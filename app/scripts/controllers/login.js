'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('LoginCtrl', function ($scope, $location, AccountService) {
    
    $scope.fbLogin = function(){
      AccountService.loginFacebook().then(function(response){
        if(response){
          $scope.$apply(function(){
            $location.path('/landing');
          })
        }
        else{
          alert('didnt log in!');
        }
      })
    }
    $scope.twitterLogin = function(){
      AccountService.loginTwitter().then(function(response){
        if(response){
          $scope.$apply(function(){
            $location.path('/landing');
          })
        }
        else{
          alert('didnt log in!');
        }
      })
    }
    $scope.tumblrLogin = function(){
      $location.path('landing');
    }

  });
