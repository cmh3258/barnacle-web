'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('LandingCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
