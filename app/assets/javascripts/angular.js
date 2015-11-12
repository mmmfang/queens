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


////////////////////////////////////////
/////////// MOOD CONTROLLER ////////////
////////////////////////////////////////
app.controller('MoodController', ['$http', function($http){

  // authenticity token
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  var controller = this;

  // value of happiness determined by emoji picked; default is null
  this.happiness = undefined;


  // get the happiness value for current user
  this.getMood = function(){
    $http.get('/moods').success(function(data){
      controller.current_user_moods = data.moods;
    });
  };

  // fetching mood data
  controller.getMood();

  // post the new mood
  this.createMood = function(){
    controller.current_user_moods.push({
      happiness: this.happiness
    });

    // post the happiness
    $http.post('/moods', {
      authenticity_token: authenticity_token,
      mood: {
        happiness: this.happiness
      }
    }).success(function(moodData){
      var mood = moodData.mood;

      // post the factors
      $http.post('/moods/' + mood.id + "/factors", {
        authenticity_token: authenticity_token,
        factor: {
          blurb: controller.factorsBlurb
        }
      }).success(function (factorData) {

        mood.factors.push(factorData.factor);

        controller.happiness = undefined;
        controller.factorsBlurb = undefined;
      });

      controller.current_user_moods.pop();
      controller.current_user_moods.push(mood);
      controller.getMood();
    });
  };


}]);



////////////////////////////////////////
/////////// ROUTE CONTROLLER ///////////
////////////////////////////////////////
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled:true});

  $routeProvider.
    when('/moods',
    { templateUrl: '/angular_templates/moods.html',   ///SHOW ONE PAGE
        controller:  'MoodController',
        controllerAs: 'mood'
    }).when('/form',
      { templateUrl: '/angular_templates/form.html',   ///SHOW ONE PAGE
        controller:  'MoodController',
        controllerAs: 'mood'
    }).when('/moods/:id',
      { templateUrl: '/angular_templates/show.html',   ///SHOW ONE PAGE
        controller:  'MoodController',
        controllerAs: 'mood'
    }).when('/users/:id',
      { templateUrl: '/angular_templates/user.html',   ///SHOW ONE PAGE
        controller:  'HeaderController',
        controllerAs: 'header'
    }).otherwise(
      { redirectTo: '/'
    });
 }]) ;




 // custom filters to convert from Kelvin
 //  app.filter('kelvinToFar', function() {
 // return function(kelvin) {
 // return parseFloat((kelvin) - 273.15)  * 9/5 + 32;
 //    };
 //  });
 //
 //  app.filter('kelvinToCelsius', function() {
 // return function(kelvin) {
 // return parseFloat((kelvin) - 273.15);
 //    };
 //  });
 // weather api
 app.controller('WeatherCtrl', ['$http', function ($http){
     this.getWeather = function () {
     var query = 'http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&APPID=eaf6fe412d32917ff999cc01f8b23979';
     var ctrl = this;
 // eaf6fe412d32917ff999cc01f8b23979

     $http.get(query).success(
       function(data) {
         ctrl.weather = data;
         var kelvin = data.main.temp;
         var far = Math.floor((1.8 * (kelvin - 273) +32));
         data.main.temp = far;

       }
     );
   };
 }]);

// app.controller('ChartCtrl', function($scope), {
//   $scope.charts = d3.range(10).map(function(){
//     return d3.range(10).map(Math.random());
//   });
// });
// d3
// app.directive('chart', function(){
//   function link(scope, el){
//   }
//     return {
//       link: link,
//       restrict: 'E'
//     };
// });
