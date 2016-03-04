'use strict';

describe('Controller: Navbar Controller', function() {
  beforeEach(module('GolfApp'));

  var NavbarCtrl, scope;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', { $scope: scope });
  }));

  it('Should load the Navbar controller', function() {
    expect(typeof NavbarCtrl).not.toBe('undefined');
  });

  it('Should have a menu of 6 items', function() {
    expect(scope.menu.length).toEqual(6);
  });

  it('Should open with the menu collapsed', function() {
    expect(scope.isCollapsed).toEqual(true);
  });
});
