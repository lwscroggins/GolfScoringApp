'use strict'

module.exports = function(app) {
  app.controller('gamecontroller',['$scope', '$http', '$location', 'CourseServer', function($scope, $http, $location, CourseServer) {
    // $http.defaults.headers.common.jwt = $cookies.jwt;

    $scope.holes = [];

    $scope.getCourse = CourseServer.getCourse();
    $scope.index = Object.keys($scope.getCourse)[0];
    $scope.courseName = '';

    $scope.getAllHoles = function(event, data) {
      $scope.holes = $scope.getCourse[$scope.index].holes;
      $scope.courseName = $scope.getCourse[$scope.index].name;
    };

    $scope.getAllHoles();

    $scope.scoreHole = function(index, strokes) {
      //saves the score when it's entered by the user
      //calculates the over/under par for the hole
      $scope.holes[index].strokes = strokes;
      $scope.holes[index].scoresubmitted = 1;
      $scope.holes[index].difference = Number($scope.holes[index].strokes) - Number($scope.holes[index].par);
      console.log('strokes: ' + $scope.holes[index].strokes);
      console.log('difference: ' + $scope.holes[index].difference);
    };

    $scope.scoreGame = function () {
      //ends the game
      //calculates the over/under par score
      //displays the scores by hole and total with pars for each hole
      var total = 0;
      $scope.finalScore = '';
      angular.forEach($scope.holes, function(value, key) {
        var strokes = Number($scope.holes[key].strokes);
        total = total + strokes;
      });
      $scope.finalScore = total.toString();
      return $scope.finalScore;
    }

    $scope.coursePar = function() {
      var total = 0;
      $scope.parforthecourse = '';
      angular.forEach($scope.holes, function(value, key) {
        var totalPar = Number($scope.holes[key].par);
        total = total + totalPar;
      });
      $scope.parforthecourse = total.toString();
      return $scope.parforthecourse;
    }

    $scope.courseOverUnder = function() {
      var total = 0;
      $scope.coursedifference = '';
      angular.forEach($scope.holes, function(value, key) {
        var difference = Number($scope.holes[key].difference);
        total = total + difference;
      });
      $scope.coursedifference = total.toString();
      return $scope.coursedifference;
    }

    $scope.gameOver = function(path) {
      $location.path(path);
    };

    $scope.compareResults = function() {
      //compares this game to a previous game at the same course
    };

    $scope.sendResults = function() {
      //emails the results to an address of the user's choosing
    };
  }]);
};
