//courseselectcontroller.js

'use strict'

module.exports = function(app) {
  app.controller('courseselectcontroller', ['$rootScope', '$scope', '$http', '$cookies', '$location', 'CourseServer', function($rootScope, $scope, $http, $cookies, $location, CourseServer) {
    // var _ = require('lodash');
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
    

    // $scope.selectCourse = function(val) {
    //     console.log('select course');
    //     var index = _.pick($scope.courseList, function(chr) { return chr.name == val });
    //     // $scope.selectedCourse = index;
    //     console.log(index);
    //     $rootScope.$broadcast('SelectedCourse', index);
    // }

  }]);
};
