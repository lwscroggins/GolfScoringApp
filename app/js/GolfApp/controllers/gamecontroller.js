'use strict'

module.exports = function(app) {
  app.controller('gamecontroller', function($scope, $http, $location, $cookies) {
    $http.defaults.headers.common.jwt = $cookies.jwt;

    $scope.getAllHoles = function() {
      //gets all the holes available for the course
    };

    $scope.getAllHoles();

    $scope.scoreHole = function() {
      //saves the score when it's entered by the user
      //calculates the over/under par for the hole
    };

    $scope.gameOver = function() {
      //ends the game
      //calculates the over/under par score
      //displays the scores by hole and total with pars for each hole
    };

    $scope.compareResults = function() {
      //compares this game to a previous game at the same course
    };

    $scope.sendResults = function() {
      //emails the results to an address of the user's choosing
    };
  });
};
