'use strict';

describe('Controller: PostcompleteCtrl', function () {

  // load the controller's module
  beforeEach(module('barnacleApp'));

  var PostcompleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostcompleteCtrl = $controller('PostcompleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
