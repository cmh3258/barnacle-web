'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('LandingCtrl', function ($scope, $location) {
    
    $scope.write = function(){
      $location.path('/writepost');
    }
  });
