////////////////////////////////////////
/////////// MOOD APPLICATION ///////////
////////////////////////////////////////
var app = angular.module('moodApp', ['ngRoute']);


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


// ////////////////////////////////////////
// /////////// MOOD CONTROLLER ////////////
// ////////////////////////////////////////
app.controller('MoodController', ['$http', '$scope', function($http, $scope){

  // authenticity token
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  var controller = this;


  // value of happiness determined by emoji picked; default is null
  this.happiness = null;


  // get the happiness value for current user
  this.getMood = function(){
    $http.get('/moods').success(function(data){
      controller.current_user_moods = data.moods;
    });
  };

  // fetching happiness data
  this.getMood();

  // post the new mood
  this.createMood = function(){
    console.log(this);
    controller.current_user_moods.push({
      happiness: this.happiness,
      factors: this.factors
    });

  // post to /moods
  $http.post('/moods', {
    authenticity_token: authenticity_token,
    mood: {
      happiness: this.happiness,
      factors: this.factors
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
// app.controller('FactorController', ['$http', '$scope', function($http, $scope){
//
//   // call in the authenticity token
//   var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//
//   $scope.factors.blurb = '';
//
//   // post the new factor
//   this.createFactor = function(){
//
//   $scope.mood.factors.push($scope.blurb);
//
//   $http.post('/moods', {
//     authenticity_token: authenticity_token,
//     factors: {
//       blurb: this.blurb
//     }
//   }).success(function(data){
//     $scope.$parent.mood.getMood();
//   });
//   };
// }]);




////////////////////////////////////////
/////////////// ROUTING ////////////////
////////////////////////////////////////
// app.config(['$routeProvider', '$locationProvider',
//   function($routeProvider, $locationProvider){
//     $locationProvider.html5mode(true);
//     $routeProvider
//       .when('/home', {
//         templateUrl: '/views/home.html.erb',
//         controller: 'MoodController'
//   })
//       .otherwise({
//         redirectTo: '/'
//       });
// }]);
