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
    console.log("mood controller in createmood is", controller)
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
    console.log("controller in moddsCTRL is", controller)
    console.log("data in moodsCTRL is",data)
    console.log("data.mood is", data.mood)

    controller.current_user_moods.pop();
    controller.current_user_moods.push(data.mood);
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


  this.createFactor = function(mood_id){
    console.log("mood id is", mood_id);
    console.log("blurb is", this.newblurb);
    console.log('/moods/'+mood_id+'/factors');

 $http.post('/moods/'+mood_id+'/factors/', {
     authenticity_token: authenticity_token,
     factor: {
       blurb: this.newblurb
     }
}).success(function(data){
  console.log('SUCCESS');
  console.log(data);
//   //   controller.data.mood.factors.push()
//   //   console.log($scope)
//   //  $scope.$parent.mood.getMood();  //This line matches what is in scope
//   // // });
//   // })


 });
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
