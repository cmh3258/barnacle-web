'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('ProfileCtrl', function ($scope, $location, AccountService, PostService) {

    $scope.pageInView = 1;
    $scope.userInfo = null;

    PostService.getPosts().then(function(response){
      $scope.posts = response;
      console.log($scope.posts);
    })
    
    $scope.logout = function(){
      AccountService.logOut();
      $location.path('/login');
    }

    $scope.viewSettings = function(){
      var userInfo = AccountService.getUserInfo();
      $scope.userInfo = userInfo;
      $scope.pageInView = 2;
    }

    $scope.writePost = function(){
      $location.path('/writepost');
    }

  });
