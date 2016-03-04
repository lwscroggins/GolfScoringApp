'use strict';

require('angular');
// require('angular-cookies');
require('angular-base64');
// require('angular-resource');
var uibs = require('angular-ui-bootstrap');

var GolfApp = angular.module('GolfApp', [require('angular-route'), uibs, require('angular-touch'), require('angular-cookies'), 'base64', require('angular-resource')]);

//controllers
require('./GolfApp/controllers/navbarcontroller')(GolfApp);
require('./GolfApp/controllers/infocontroller')(GolfApp);
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
    .when('/info', {
      templateUrl: '/views/GolfApp/info.html',
      controller:'infocontroller'
    })
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
    .when('/desktop', {
      templateUrl: '/views/GolfApp/desktop.html',
      controller: 'useraccesscontroller'
    })
    .otherwise({
      redirectTo: '/info'
    });
}]);
