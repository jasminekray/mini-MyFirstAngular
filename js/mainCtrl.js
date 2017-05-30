angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ["Anna", "Evan", "Joe", "Jon"];

  $scope.addFriend = function(newFriend){
    friends.push(newFriend);
  }
});
