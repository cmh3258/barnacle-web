'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:PostcompleteCtrl
 * @description
 * # PostcompleteCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('PostcompleteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
