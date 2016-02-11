'use strict';

/**
 * @ngdoc directive
 * @name barnacleApp.directive:profile
 * @description
 * # profile
 */
angular.module('barnacleApp')
  .directive('profile', function () {
    return {
      templateUrl: 'views/profile.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the profile directive');
      // }
      controller:'ProfileCtrl'
    };
  });
