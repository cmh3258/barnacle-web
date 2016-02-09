'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:PostcompleteCtrl
 * @description
 * # PostcompleteCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('PostcompleteCtrl', function ($scope, $location) {

    $scope.writepost = function(){
      $location.path('/writepost');
    }

    $scope.viewPosts = function(){
      $location.path('/profile');
    }
  });
