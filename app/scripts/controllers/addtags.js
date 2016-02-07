'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:AddtagsCtrl
 * @description
 * # AddtagsCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('AddtagsCtrl', function ($scope, $location) {
    
    $scope.finish = function(){
      console.log('finish!');
      $location.path('/postcomplete');
    }

  });
