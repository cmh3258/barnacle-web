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
    
    $scope.tags = []; //get the users saved tags
    $scope.formInput = {};

    $scope.finish = function(){
      // console.log('finish!');
      PostService.addPost($scope.tags);
      $location.path('/postcomplete');
    }

    $scope.addingTag = function(){
      var tag = $scope.formInput.customTag;
      if(tag !== ''){
        $scope.tags.push({label:tag, selected:true});
        $scope.formInput.customTag = '';
      }
    }

    $scope.toggleTag = function(index){
      // $scope.tags.splice(index, 1);
      $scope.tags[index].selected = !$scope.tags[index].selected;
    }

  });
