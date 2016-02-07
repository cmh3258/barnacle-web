'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('LoginCtrl', function ($scope, $location) {
    
    $scope.fbLogin = function(){
      $location.path('landing');
    }
    $scope.twitterLogin = function(){
      $location.path('landing');
    }
    $scope.tumblrLogin = function(){
      $location.path('landing');
    }

  });
