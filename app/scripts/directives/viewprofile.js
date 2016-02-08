'use strict';

/**
 * @ngdoc directive
 * @name barnacleApp.directive:viewprofile
 * @description
 * # viewprofile
 */
angular.module('barnacleApp')
  .directive('viewprofile', function ($location) {
    return {
      template: '<span class="profile-gray"></span>',
      // restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the viewprofile directive');
        element.bind('click', function() {
          console.log('ckljfdksa');
          scope.$apply(function(){
            $location.path('/profile');
          })
        })
      }
    }
  });
