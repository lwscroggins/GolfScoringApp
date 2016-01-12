'use strict'

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
require('angular-resource');
require('angular-bootstrap');
require('angular-touch');

var GolfApp = angular.module('GolfApp', ['ngRoute', 'base64', 'ngCookies', 'ngResource', 'ui.bootstrap', 'ngTouch']);

//controllers
require('./GolfApp/controllers/navbarcontroller')(GolfApp);
require('./GolfApp/controllers/useraccesscontroller')(GolfApp);
require('./GolfApp/controllers/coursecreatecontroller')(GolfApp);
require('./GolfApp/controllers/courseselectcontroller')(GolfApp);
require('./GolfApp/controllers/gamecontroller')(GolfApp);

//filters

//services
require('./GolfApp/services/auth')(GolfApp);
require('./GolfApp/services/course-server')(GolfApp);

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
    .when('/coursecreated', {
      templateUrl: '/views/GolfApp/coursecreated.html',
      controller: 'coursecreatecontroller'
    })
    .when('/selectcourse', {
      templateUrl: '/views/GolfApp/selectcourse.html',
      controller: 'courseselectcontroller'
    })
    .when('/createholes', {
      templateUrl: '/views/GolfApp/createholes.html',
      controller: 'coursecreatecontroller'
    })
    .when('/fore', {
      templateUrl: '/views/GolfApp/fore.html',
      controller: 'gamecontroller'
    })
    .when('/gameover', {
      templateUrl: '/views/GolfApp/gameover.html',
      controller: 'gamecontroller'
    })
    .when('/signout', {
      templateUrl: '/views/GolfApp/signout.html',
      controller: 'useraccesscontroller'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
