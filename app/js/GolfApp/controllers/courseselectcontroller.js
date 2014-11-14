'use strict'

module.exports = function(app) {
  app.controller('courseselectcontroller', function($scope, courseServer, $http, $cookies, $location) {

    $http.defaults.headers.common['jwt'] = $cookies.jwt;

    $scope.getAllCourses = function (callback) {
      courseServer.index()
        .success(function(data) {
          $scope.course = data;
        });
    };

    $scope.getAllCourses();

    $scope.courseSelected = function (course) {
      $scope.courseInfo = course.name + ' (' + course.id + ')';
      //almost positive that this is wrong.
    };

    $scope.allCourses = function() {
      //not sure what goes here yet
    };

  });
};
