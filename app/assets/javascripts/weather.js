var weatherApp = angular.module('weatherApp', ['ngRoute']);

weatherApp.controller('WeatherCtrl', ['$http', '$routeParams', function ($http, $routeParams){
    this.id = $routeParams.id;
<<<<<<< HEAD
    var query = 'api.openweathermap.org/data/2.5/weather?q={city name}'
=======
    var query = 'api.openweathermap.org/data/2.5/weather?q={city name}';
>>>>>>> 770ef2ecf1bc3609f35d409c3102fe13dd84bb4f
    var conroller = this;

    $http.get(query).then(
      function(data) {
        console.log(data);
      }
    );
}]);
