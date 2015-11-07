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
  // this.newHappiness = null;

  // gets mood data and adds to the controller
  this.getMood = function (){
    $http.get('/moods').success(function(data){
      controller.current_user_happiness = data.happiness;
    });
  };

  // fetching mood data
  this.getMood();

  // create a new mood
  this.createMood = function (){
    controller.current_user_happiness.push({
      happiness: this.happiness
    });

    $http.post('/moods', {
      authenticity_token: authenticity_token,
      happiness: this.happiness
    }).success(function(data){
      controller.current_user_happiness.pop();
      controller.current_user_happiness.push(data.happiness);
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

  // blurb string
  this.blurb = '';

  // get the factors
  this.getFactor = function(){
    $http.get('/factors').success(function(data){
      controller.current_user.blurb = data.blurb;
      console.log(data);
    });
  };

  // fetches user blurb
  this.getFactor();

  // post the new factor
  this.createFactor = function(){
    console.log(this);
    controller.current_user_blurb.push({
      blurb: this.blurb
    });

  // post to /factors
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
