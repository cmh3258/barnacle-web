'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
