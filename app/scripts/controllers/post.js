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

    $scope.post = {};
    PostService.getSinglePost('-KA2XU1AHXcuOiywI8vR').then(function(response){
      // console.log('response: ', response.val());
      $scope.post = response;
      console.log($scope.post);
    })
  });
