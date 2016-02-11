'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('SettingsCtrl', function ($scope, $location, AccountService) {
    
    var userInfo = AccountService.getUserInfo();
    $scope.userInfo = userInfo;

    $scope.logout = function(){
      AccountService.logOut();
      $location.path('/login');
    }

  });
