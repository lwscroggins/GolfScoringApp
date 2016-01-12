'use strict'

module.exports = function(app) {
  app.controller('coursecreatecontroller', function($scope, $http, $location) {
    $scope.createNewCourse = function() {
      $http({
        method: 'POST',
        url: '/api/v.0.0.1/courses',
        data: $scope.course
      })
      .success(function(data) {
        $location.path('/coursecreated.html');
        console.log('course created');
      })
      .error(function(data) {
        console.log('error creating new course');
        console.log(data);
      });
    };
  });
};
