'use strict';

describe('Directive: settings', function () {

  // load the directive's module
  beforeEach(module('barnacleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<settings></settings>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the settings directive');
  }));
});
