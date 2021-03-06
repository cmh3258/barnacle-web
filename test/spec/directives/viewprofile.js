'use strict';

describe('Directive: viewprofile', function () {

  // load the directive's module
  beforeEach(module('barnacleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<viewprofile></viewprofile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the viewprofile directive');
  }));
});
