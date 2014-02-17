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

      var endPoint = 'https://api.instagram.com/v1/tags/dope/media/recent?client_id=20c5389504fc402d983e5685b859d6ba&callback=JSON_CALLBACK';

      $http.jsonp(endPoint).success(function(response){
        callback(response.data);
      });

    }

  };

}]);
