//courseselectcontroller.js

'use strict'

module.exports = function(app) {
  app.controller('courseselectcontroller', ['$rootScope', '$scope', '$http', '$cookies', '$location', 'CourseServer', function($rootScope, $scope, $http, $cookies, $location, CourseServer) {
    // $http.defaults.headers.common['jwt'] = $cookies.jwt;

    $scope.selectedCourse = {};
    $scope.courseList = [];

    $scope.courseList = CourseServer.getCourses();

    $scope.go = function(path) {
      $location.path(path);
    };

    $scope.selectedCourse = function(val) {
      CourseServer.selectedCourse(val);
    }

  }]);
};
