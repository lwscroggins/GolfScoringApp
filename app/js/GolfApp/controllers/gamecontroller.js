'use strict'

module.exports = function(app) {
  app.controller('gamecontroller',['$scope', '$http', '$location', '$cookies', 'CourseServer', function($scope, $http, $location, $cookies, CourseServer) {
    // $http.defaults.headers.common.jwt = $cookies.jwt;

    $scope.holes = [];

    $scope.getCourse = CourseServer.getCourse();

    $scope.getAllHoles = function(event, data) {
      $scope.holes = $scope.getCourse[0].holes;
    };

    $scope.getAllHoles();
    console.log($scope.holes);

    $scope.scoreHole = function(index, strokes) {
      //saves the score when it's entered by the user
      //calculates the over/under par for the hole
      $scope.holes[index].strokes = strokes;
      $scope.holes[index].difference = Number($scope.holes[index].strokes) - Number($scope.holes[index].par);
      console.log($scope.holes[index]);
    };

    $scope.gameOver = function() {
      //ends the game
      //calculates the over/under par score
      //displays the scores by hole and total with pars for each hole
      var path = '/gameover';
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
