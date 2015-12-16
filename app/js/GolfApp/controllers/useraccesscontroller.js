'use strict'

module.exports = function(app) {
  app.controller('useraccesscontroller', function($scope, $http, $cookies, $base64, $location) {
    console.log('hello');
    if($location.path() === '/signout') $cookies.jwt = null;
    if($location.path() === '/login') $scope.newuser = true;

    $scope.signin = function() {
      console.log('signin clicked');
      $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode($scope.user.email + ':' + $scope.user.password);
      console.log('headers acquired - useraccesscontroller');
      $http({
        method: 'GET',
        url: '/api/v.0.0.1/users',
        data: $scope.user
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        $location.path('/selectcourse');
        console.log('successfully logged in and directed to /selectcourse page');
      })
      .error(function(data) {
        console.log('error in signin');
        console.log(data);
      });
    };

    $scope.validatePassword = function() {
      return $scope.user.password === $scope.user.passwordConfirmation;
    };

    $scope.createNewUser = function() {
      console.log('clicked createNewUser');
      $http({
        method: 'POST',
        url: '/api/v.0.0.1/users',
        data: $scope.user
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        $location.path('/login');
        console.log('succesfuly created new user');
      })
      .error(function(data) {
        console.log('error creating new user: useraccesscontroller');
        console.log(data);
      });
    };

    $scope.isLoggedIn = function() {
      $scope.user ? true : false;
    };
  });
};
