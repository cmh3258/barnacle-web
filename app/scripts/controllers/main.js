'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
