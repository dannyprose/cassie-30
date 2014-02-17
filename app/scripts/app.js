'use strict';

var app = angular.module('cassie30App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('instagram', ['$http', function($http){

  return {
    fetchPopular: function(callback){

      var endPoint = 'https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK';

      $http.jsonp(endPoint).success(function(response){
        callback(response.data);
      });

    }

  };

}]);
