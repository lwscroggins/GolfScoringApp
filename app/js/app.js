'use strict'

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var GolfApp = angular.module('GolfApp', ['ngRoute', 'base64', 'ngCookies']);

//controllers
require('./GolfApp/controllers/useraccesscontroller')(GolfApp);
require('./GolfApp/controllers/coursecreatecontroller')(GolfApp);

//filters

//services
require('./GolfApp/services/auth')(GolfApp);

//directives

GolfApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/views/GolfApp/login.html',
      controller: 'useraccesscontroller'
    })
    .when('/signup', {
      templateUrl: '/views/GolfApp/signup.html',
      controller: 'useraccesscontroller'
    })
    .when('/createcourse', {
      templateUrl: '/views/GolfApp/createcourse.html',
      controller: 'coursecreatecontroller'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
