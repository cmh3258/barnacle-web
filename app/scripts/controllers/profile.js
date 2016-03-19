'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('ProfileCtrl', function ($scope, $ionicLoading, PostService) {

    // $scope.pageInView = 1;
    // $scope.userInfo = null;
    $scope.posts = [];
    console.log('[ProfileCtrl] here?');

    initial();

    function initial(){
      loadingInicator(true);
      PostService.getPosts().then(function(response){
        // $scope.posts = response;
        for(var key in response){
          console.log('key: ', key, response[key]);
          $scope.posts.push(response[key]);
        }
        // console.log($scope.posts);
        loadingInicator(false);
      })
    }
    
    // $scope.logout = function(){
    //   AccountService.logOut();
    //   $location.path('/login');
    // }

    // $scope.viewSettings = function(){
    //   var userInfo = AccountService.getUserInfo();
    //   $scope.userInfo = userInfo;
    //   $scope.pageInView = 2;
    // }

    // $scope.writePost = function(){
    //   $location.path('/writepost');
    // }

    function loadingInicator(shouldShow){
      if(shouldShow){
        $scope.ionicLoading = $ionicLoading.show({
          content: 'Loading...'
        });
      }
      else{
        $scope.ionicLoading.hide();
      }
    }
    

  });
