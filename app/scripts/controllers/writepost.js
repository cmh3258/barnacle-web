'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:WritepostCtrl
 * @description
 * # WritepostCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('WritepostCtrl', function ($scope, $location, PostService) {
    
    var vm = this;
    vm.writeContenta = '';
    vm.currentDate = new Date();

    $scope.selectCategory = function(content){
      console.log('content: ', content, vm.writeContenta);
      if(content.length < 10){
        console.log('less than 10');
      }
      else{
        PostService.createPost(vm.currentDate, vm.writeContenta, null);
        $location.path('/addtags');
      }
    }

  });
