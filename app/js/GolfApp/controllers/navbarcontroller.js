'use strict';

module.exports = function(app) {
  app.controller('NavbarCtrl', function($scope) {
    $scope.menu = [
      {
        'title': 'Be The Ball',
        'link': '/'
      },
      {
        'title': 'Log In',
        'link': '#/login'
      },
      {
        'title': 'Sign Up',
        'link': '#/signup'
      },
      {
        'title': 'Select Course',
        'link': '#/selectcourse'
      },
      {
        'title': 'Create Course',
        'link': '#/createcourse'
      },
      {
        'title': 'Signout',
        'link': '#/signout'
      }
    ];
  });
}