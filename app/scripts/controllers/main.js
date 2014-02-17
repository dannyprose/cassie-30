'use strict';

angular.module('cassie30App').controller('MainCtrl', ['$scope', 'instagram' , '$interval' ,
function ($scope, instagram, $interval){

  $scope.hashtag = 'winter';      // Tag to get photos for
  $scope.refreshInterval = 60;    // Refresh rate (in seconds)

  $scope.pics = [];

  // Setup and run Instagram Refresh
  function refresh() {
    instagram.fetchPhotoByTag($scope.hashtag, function(data){
      $scope.pics = data;
    });
  }

  refresh();

  // Refresh Feed
  $interval(function() {
    refresh();
  }, $scope.refreshInterval * 1000);

}]);
