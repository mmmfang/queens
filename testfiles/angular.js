////////////////////////////////////////
/////////// MOOD APPLICATION ///////////
////////////////////////////////////////
var app = angular.module('moodApp', []);


////////////////////////////////////////
/////////// MOOD CONTROLLER ////////////
////////////////////////////////////////
app.controller('MoodController', ['$http', function($http){

  // value of happiness determined by emoji picked; default is null
  this.happiness = null;

  // get the mood value for current user
  this.newMood = function(){

  };

  // post the new mood
  this.postMood = function(){

  };
}]);

////////////////////////////////////////
/////////// FACTOR CONTROLLER //////////
////////////////////////////////////////
app.controller('FactorController', ['$http', function($http){

  // value of happiness determined by emoji picked; default is null
  this.blurb = '';

  // get the new blurb

  // post the new blurb
  
}]);
