//courseselectcontroller.js

'use strict'

module.exports = function(app) {
  app.controller('courseselectcontroller', ['$rootScope', '$scope', '$http', '$location', 'CourseServer', function($rootScope, $scope, $http, $location, CourseServer) {
    // $http.defaults.headers.common['jwt'] = $cookies.jwt;

    $scope.selectedCourse = {};
    $scope.courseList = [];

    $scope.courseList = CourseServer.getCourses();

    // $scope.courseList = function() {
    //   CourseServer.index()
    //     .success(function(data) {
    //       $scope.courses = data;
    //     });
    // };

    // $scope.courseList();

    $scope.go = function(path) {
      $location.path(path);
    };

    $scope.selectedCourse = function(val) {
      CourseServer.selectedCourse(val);
    }

  }]);
};
