'use strict';

/**
 * @ngdoc function
 * @name barnacleApp.controller:AddtagsCtrl
 * @description
 * # AddtagsCtrl
 * Controller of the barnacleApp
 */
angular.module('barnacleApp')
  .controller('AddtagsCtrl', function ($scope, $location, PostService, AccountService) {
    
    $scope.tags = []; //get the users saved tags
    $scope.formInput = {};
    $scope.userTags = null;
    $scope.userTitle = null;

    initial();
    
    function initial(){
      var userData = AccountService.getUserInfo();
      if(userData === null){
        $location.path('/main/write');
      }
      else{
        $scope.userTags = userData.tags;
        console.log('$scope.userTags: ', $scope.userTags);
      }
    }

    $scope.finish = function(){
      // console.log('finish!');
      PostService.addPost($scope.tags, $scope.userTitle);
      $location.path('/main/postcomplete');
    }

    $scope.addingTag = function(){
      var tag = $scope.formInput.customTag;
      if(tag !== ''){
        $scope.tags.push({label:tag, selected:true});
        $scope.formInput.customTag = '';
      }
    }

    $scope.addingTitle = function(){
      var title = $scope.formInput.titleOfPost;
      if(title !== ''){
        $scope.userTitle = title;
      }
      $scope.formInput.titleOfPost = '';
    }

    $scope.toggleTag = function(index){
      // $scope.tags.splice(index, 1);
      $scope.tags[index].selected = !$scope.tags[index].selected;
    }

    $scope.back = function(){
      $location.path('/main/write');
    }

  });
