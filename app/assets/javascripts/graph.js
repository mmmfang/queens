


    angular.module('d3app', [])
  //set up controller to get the data
      .directive('d3Graph', function (){

      return {
        // restrict to element only
        restrict: 'E',
        replace: true,
        // allows two-way binding between controller and directive
        scope: { val: '='},
        template: '<div>hi there</div>',
        link: function(scope, element, attrs) {

            //get data
            scope.getData = function () {
              $http({
                method: 'GET',
                url: 'http://localhost:3000/moods.json'
              }).
              success(function (data){
                $scope.data = data;
              });
            }; scope.getData();

            //d3 code - setup bar graph
            //setup margins
            var margin = { top: 10, right: 20, bottom: 10, left: 20};
            var w = 400 - margin.left - margin.right;
            var h = 300 - margin.top - margin.bottom;

            // append the svg to html element
            var svg = d3.select('#graph').append('svg')
            .attr('width', w)
            .attr('height', h)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

            //setup the scales
            //data needs to reach up into parent to communicate with controller
            //data will be defined later
            .domain([0, d3.max(scope.$parent.data)])
            .range([0, h]);

            var colorScale = d3.scale.quantize()
              .domain([0, scope.$parent.data.length])
              .range(['white', 'pink', 'deeppink', 'red']);

            //setup x axis using occurred_at value
           var xScale = d3.time.scale()
         .domain([
           d3.min(data, function(d) { return d.occurred_at; }),
           d3.max(data, function(d) { return d.occurred_at; })
         ]);

            //append the bars
            svg.selectAll('rect')
            //bind data
              .data(scope.$parent.data)
              .enter()
              .append('rect')
              .attr('x', function(d) { return xScale(d); })
              .attr('y', function(d) { return h - yScale(d); })
              .attr('width', xScale.range())
              .attr('height', function(d) { return yScale(d); });


          // $scope.data = [$scope.moods.happiness, $scope.moods.occurred_at]


        }


      };

    });

  // ($scope, $http)) {
  //   $scope.getData = function () {
  //     $http({
  //       method: 'GET',
  //       url: 'http://localhost:3000/moods.json'
  //     }).
  //     success(function (data){
  //       $scope.data = data;
  //     });
  //   };
