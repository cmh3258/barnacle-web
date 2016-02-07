'use strict';

describe('Controller: AddtagsCtrl', function () {

  // load the controller's module
  beforeEach(module('barnacleApp'));

  var AddtagsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtagsCtrl = $controller('AddtagsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
