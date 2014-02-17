'use strict';

angular.module('cassie30App').controller('MainCtrl', ['$scope', 'instagram' ,
function ($scope, instagram){

  $scope.hashtag = 'dope';

  $scope.pics = [];

  instagram.fetchPhotoByTag($scope.hashtag, function(data){
    $scope.pics = data;
  });

}]);
