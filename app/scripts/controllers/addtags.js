'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:AddtagsCtrl
 * @description
 * # AddtagsCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('AddtagsCtrl', function ($scope, $location, PostService) {
    
    $scope.finish = function(){
      // console.log('finish!');
      PostService.addPost();
      $location.path('/postcomplete');
    }

  });
