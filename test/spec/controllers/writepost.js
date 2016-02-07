'use strict';

describe('Controller: WritepostCtrl', function () {

  // load the controller's module
  beforeEach(module('barnacleApp'));

  var WritepostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WritepostCtrl = $controller('WritepostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
