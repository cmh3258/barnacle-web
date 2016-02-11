'use strict';

/**
 * @ngdoc directive
 * @name barnacleApp.directive:write
 * @description
 * # write
 */
angular.module('barnacleApp')
  .directive('write', function () {
    return {
      templateUrl: 'views/writepost.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the write directive');
      // }
      controller: 'WritepostCtrl',
      controllerAs: 'vm'
    };
  });
