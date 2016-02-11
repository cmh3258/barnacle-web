'use strict';

/**
 * @ngdoc directive
 * @name barnacleApp.directive:settings
 * @description
 * # settings
 */
angular.module('barnacleApp')
  .directive('settings', function () {
    return {
      templateUrl: 'views/settings.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the settings directive');
      // }
      controller:'SettingsCtrl'
    };
  });
