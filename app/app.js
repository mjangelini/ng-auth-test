'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ng-token-auth'
]).
config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {

  $routeProvider.otherwise({redirectTo: '/view1'});

  $authProvider.configure({
    apiUrl: 'http://api.example.com'
  });

}]);
