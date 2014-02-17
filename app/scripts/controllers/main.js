'use strict';

//angular.module('cassie30App')
//  .controller('MainCtrl', function ($scope) {
//    $scope.hashtag = 'tag';
//  });


angular.module('cassie30App').controller('MainCtrl', ['$scope', 'instagram' ,
function ($scope, instagram){

  $scope.hashtag = 'dope';

  $scope.pics = [];

  instagram.fetchPopular(function(data){
    $scope.pics = data;
  });

}]);
