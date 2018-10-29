var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.names = [];
  $scope.updateMessage = function() {
    $scope.first = $scope.first.toUpperCase();
    $scope.last = $scope.last.toUpperCase();
    $scope.message = 'HELLO ' + $scope.first + ' ' + $scope.last + '!';
    var name = { first: $scope.first, last: $scope.last };
    $scope.names.push(name);
  };
});
