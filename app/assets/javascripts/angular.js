////////////////////////////////////////
/////////// MOOD APPLICATION ///////////
////////////////////////////////////////
var app = angular.module('moodApp', []);


////////////////////////////////////////
/////////// HEADER CONTROLLER //////////
////////////////////////////////////////

// Verifies the current_user
app.controller('HeaderController', ['$http', function($http){
  var controller = this;
  $http.get('/session').success(function(data){
    controller.current_user = data.current_user;
  });
}]);


////////////////////////////////////////
/////////// MOOD CONTROLLER ////////////
////////////////////////////////////////
app.controller('MoodController', ['$http', function($http){

  // authenticity token
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  var controller = this;

  // value of happiness determined by emoji picked; default is null
  this.happiness = null;


  // get the happiness value for current user
  this.getMood = function(){
    $http.get('/moods').success(function(data){
      controller.current_user_happiness = data.happiness;
      console.log(data);
    });
  };

  // fetches user happiness rating
  this.getMood();

  // post the new mood
  this.createMood = function(){
    console.log(this);
    controller.current_user_happiness.push({
      happiness: this.happiness
    });

  // post to /moods
  $http.post('/moods', {
    authenticity_token: authenticity_token,
    mood: {
      happiness: this.happiness
    }
  }).success(function(data){
    controller.getMood();
  });
  };

}]);

// ////////////////////////////////////////
// /////////// FACTOR CONTROLLER //////////
// ////////////////////////////////////////
app.controller('FactorController', ['$http', '$scope', function($http, $scope){

  // call in the authenticity token
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  // value of happiness determined by emoji picked; default is null
  this.blurb = '';

  // get the factors
  this.getFactor = function(){
    $http.get('/factors').success(function(data){
      controller.current_user_blurb = data.blurb;
      console.log(data);
    });
  };

  // fetches user happiness rating
  this.getFactor();

  // post the new mood
  this.createFactor = function(){
    console.log(this);
    controller.current_user_blurb.push({
      blurb: this.blurb
    });

  // post to /moods
  $http.post('/factors', {
    authenticity_token: authenticity_token,
    factor: {
      blurb: this.blurb
    }
  }).success(function(data){
    controller.getFactor();
  });
  };
}]);
