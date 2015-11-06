////////////////////////////////////////
/////////// MOOD APPLICATION ///////////
////////////////////////////////////////
var app = angular.module('moodApp', []);


////////////////////////////////////////
/////////// SESSION CONTROLLER /////////
////////////////////////////////////////

// Verifies the current_user
app.controller = ('SessionController', [$http, function(){
  var controller = this;
  $http.get('/session').success(function(data){
    controller.current_user = data.current_user;
  });
}]);


////////////////////////////////////////
/////////// MOOD CONTROLLER ////////////
////////////////////////////////////////
app.controller = ('MoodController', [$http, function($http){

  // setting up the authenticity token
  var authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  var controller = this;

  // Mood Integer values for HTML
  this.happiness = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // GETS mood data and adds it to the controller
  this.getMood = function(){
    $http.get('/moods').success(function(data){
      controller.current_user_moods = data.moods;
    });
  };

  // grab mood data for current_user
  this.getMood();


  // CREATE a new mood post
  this.createMood = function(){

    // takes mood data from form and pushes it into the current_user_mood property
    controller.current_user_moods.push({
      happiness: this.newHappiness
    });

    // make the post to /moods
    $http.post('/moods', {
      authenticity_token: authenticity_token,
      moods: {
        happiness: this.Happiness
    }
  }).success(function(data){
    controller.current_user_moods.pop();
    controller.current_user_moods.push(data.moods);
    controller.getMood();
  });
  };
}]);


////////////////////////////////////////
/////////// FACTOR CONTROLLER //////////
////////////////////////////////////////
app.controller('FactorController', ['$http', '$scope'], function($http, $scope){

  // setting up the authenticity token
  var authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  // creating the factor
  this.createFactor = function(){
    $http.post('/moods'+$scope.$parent.mood.id+'/factors', {
      authenticity_token: authenticity_token,
      factor: {
        description: this.newFactorDescription
      }
    }).success(function(data){
      $scope.$parent.factorsCtrl.getMood();
    });
  };
});
