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
// app.controller('MoodController', ['$http', function($http){
//
//   // value of happiness determined by emoji picked; default is null
//   this.happiness = null;
//
//   // get the mood value for current user
//   this.newMood = function(){
//
//   };
//
//   // post the new mood
//   this.postMood = function(){
//
//   };
// }]);
//
// ////////////////////////////////////////
// /////////// FACTOR CONTROLLER //////////
// ////////////////////////////////////////
// app.controller('FactorController', ['$http', function($http){
//
//   // value of happiness determined by emoji picked; default is null
//   this.blurb = '';
//
//   // get the new blurb
//
//   // post the new blurb
//
// }]);
