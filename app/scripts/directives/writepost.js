'use strict';

/**
 * @ngdoc directive
 * @name barnacleApp.directive:writepost
 * @description
 * # writepost
 */
angular.module('barnacleApp')
  .directive('writepost', function ($location) {
    return {
      template: '<div ng-class="size == \'large\'? \'addEntryIconLarge\':\'addEntryIconSmall\'" class="addEntryIcon"></div>',
      restrict: 'E',
      scope: {
        size:'='
      },
      link: function postLink(scope, element, attrs) {
        // element.text('this is the writepost directive');
        element.bind('click', function() {
          console.log('clikc!');
          scope.$apply(function(){
            $location.path('/writepost');
          })
        })
      }
    };
  });
