'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
