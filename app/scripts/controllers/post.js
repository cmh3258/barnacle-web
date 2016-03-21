'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('PostCtrl', function ($scope, PostService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    PostService.getSinglePost('-KA2XU1AHXcuOiywI8vR');
  });
