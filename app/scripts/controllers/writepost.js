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
    
    // var vm = this;
    $scope.content = {writeContenta:''};
    $scope.currentDate = new Date();

    $scope.selectCategory = function(content){
      console.log('content: ', content);
      if(content.length < 10){
        console.log('less than 10');
      }
      else{
        PostService.createPost($scope.currentDate.toISOString(), content, null);
        $location.path('/main/addtags');
      }
    }

  });
