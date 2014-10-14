'use strict'

module.exports = function(app) {
  app.controller('useraccesscontroller', function($scope, $http, $cookies, $base64, $location) {
    if($location.path === '/signout') $cookies.jwt = null;
    if($location.path === '/login') $scope.newuser = true;

    $scope.signin = function() {
      $http.defaults.headers.common.Authorization = 'Basic' + $base64.encode($scope.user.email + ":" + $scope.user.password);
      $http({
        method: 'GET',
        url: '/api/v.0.0.1/users'
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
      $http({
        method: 'POST',
        url: '/api/v.0.0.1/users',
        data: $scope.users
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        $location.path('/signup');
        console.log('succesffuly created new user');
      })
      .error(function(data) {
        console.log('error creating new user');
        console.log(data)
      });
    };
  });
};
