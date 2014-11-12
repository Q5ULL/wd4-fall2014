'use strict';

describe('Controller: MycoolrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('week6AngApp'));

  var MycoolrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MycoolrouteCtrl = $controller('MycoolrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
