var app = angular.module('app', ['ngAnimate']);

console.log("hi")
app.controller('AppController', ['$scope', '$http', '$q', function($scope, $http,$q) { 
  console.log("hi")
  $scope.number2type = ""
  $scope.name = "Webgility Guy"
  $scope.title = "Stafford's Nightmare"
  $scope.number = "503-503-5003"
  $scope.number2 = ""
  $scope.pronouns = ""
 
}]);