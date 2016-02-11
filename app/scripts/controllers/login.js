'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('LoginCtrl', function ($scope, $location, $ionicLoading, AccountService) {
    
    $scope.fbLogin = function(){
      loadingIndicator(true);
      AccountService.loginFacebook().then(function(response){
        loadingIndicator(false);
        if(response){
          $scope.$apply(function(){
            $location.path('/main');
          })
        }
        else{
          alert('didnt log in!');
        }
      })
    }
    $scope.twitterLogin = function(){
      loadingIndicator(true);
      AccountService.loginTwitter().then(function(response){
        loadingIndicator(false);
        if(response){
          $scope.$apply(function(){
            $location.path('/main');
          })
        }
        else{
          alert('didnt log in!');
        }
      })
    }
    // $scope.tumblrLogin = function(){
    //   $location.path('landing');
    // }

    //loading indicator
    function loadingIndicator(show){
      if(show){
        $scope.ionicLoading = $ionicLoading.show({
          content:'Loading...'
        });
      }
      else{
        if($scope.ionicLoading !== undefined){
          // $ionicLoading.hide();
          $scope.ionicLoading.hide();
        }
      }
    }

  });
