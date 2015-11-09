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
      controller.current_user_moods = data.moods;
    });
  };

  // fetching happiness data
  this.getMood();

  // post the new mood
  this.createMood = function(){
    console.log("mood controller in createmood is", controller)
    controller.current_user_moods.push({
      happiness: this.happiness
    });

  // post to /moods
  $http.post('/moods', {
    authenticity_token: authenticity_token,
    mood: {
      happiness: this.happiness
    }
  }).success(function(data){
    console.log("controller in moddsCTRL is", controller)
    console.log("data in moodsCTRL is",data)
    console.log("data.mood is", data.mood)
    mood_id = data.mood.id;
    // controller.current_user_moods.push(data.mood)
    controller.current_user_moods.pop();
    controller.current_user_moods.push(data.mood);
    controller.getMood();
  });
  };

  this.createFactor = function(){
    console.log("mood id is", mood_id);
    console.log("this worked", this.blurb); 
    console.log('/moods/'+mood_id+'/factors')
  }

}]);


// ////////////////////////////////////////
// /////////// FACTOR CONTROLLER //////////
// ////////////////////////////////////////

// app.controller('FactorController', ['$http', '$scope', function($http, $scope){

// //   // call in the authenticity token
//   var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

//   var controller = this;

// // this.getFactor = function(){
// //    $http.get('/factors').success(function(data){
// //     controller.current_user_moods.push({
// //       factor: {
// //         blurb: this.blurb
// //       }
// //     });
// //   })
// //   }

//   // // fetching happiness data
//   // this.getFactor();

//   // post the new factor

//   this.createFactor = function(){
//     console.log("this worked");

//   //  $http.post('/moods/'+mood.id +'/', {
//   //    authenticity_token: authenticity_token,
//   //    factors: {
//   //      blurb: this.factor_blurb
//   //    }
//   //  }).success(function(data){
//   //   controller.data.mood.factors.push()
//   //   console.log($scope)
//   //  $scope.$parent.mood.getMood();  //This line matches what is in scope
//   // // });
//   // });
// }
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


// app.config([‘$routeProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);
//   $routeProvider
//     .when("/contacts",
//       { templateUrl: "<%= asset_path('contacts/index.html') %> ",
//         controller: "ContactsIndexCtrl" })
//     .when("/contacts/new",
//       { templateUrl: "<%= asset_path('contacts/edit.html') %> ",
//         controller: "ContactsEditCtrl" })
//     .when("/contacts/:id",
//       { templateUrl: "<%= asset_path('contacts/show.html') %> ",
//         controller: "ContactsShowCtrl" })
//     .when("/contacts/:id/edit",
//       { templateUrl: "<%= asset_path('contacts/edit.html') %> ",
//         controller: "ContactsEditCtrl" })
//     .otherwise({ redirectTo: "/contacts" });
// });
