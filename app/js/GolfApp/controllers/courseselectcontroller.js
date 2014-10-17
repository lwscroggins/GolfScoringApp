'use strict'

module.exports = function(app) {
  app.controller('courseselectcontroller', function($scope, $http, $location) {

    $scope.getAllCourses = function (callback) {
      // callback($scope.allCourses);
      //this will have to be changed
    };

    $scope.courseSelected = function (course) {
      $scope.courseInfo = course.name + ' (' + course.id + ')';
      //almost positive that this is wrong.
    };

    $scope.allCourses = function() {
      //not sure what goes here yet
    };

  });
};
