'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:WritepostCtrl
 * @description
 * # WritepostCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('WritepostCtrl', function ($scope, $location) {
    
    var vm = this;
    vm.writeContenta = '';
    vm.currentDate = new Date();

    $scope.selectCategory = function(content){
      console.log('content: ', content, vm.writeContenta);
      if(content.length < 10){
        console.log('less than 10');
      }
      else{
        $location.path('/addtags');
      }
    }

  });
