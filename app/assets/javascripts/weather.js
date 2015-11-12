var weatherApp = angular.module('weatherApp', ['ngRoute']);

weatherApp.controller('WeatherCtrl', ['$http', '$routeParams', function ($http, $routeParams){
    this.id = $routeParams.id;

    var query = 'api.openweathermap.org/data/2.5/weather?q={city name}';

    var conroller = this;

    $http.get(query).then(
      function(data) {
        console.log(data);
      }
    );
}]);
