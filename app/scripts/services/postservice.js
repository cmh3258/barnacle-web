'use strict';

/**
 * @ngdoc service
 * @name barnacleApp.PostService
 * @description
 * # PostService
 * Factory in the barnacleApp.
 */
angular.module('barnacleApp')
  .factory('PostService', function (AccountService, $q) {
    
    var ref = new Firebase("https://sweltering-inferno-4461.firebaseio.com");
    var postsRef = ref.child("posts");
    var post = {};

    return {
      addPost: function(tags){
        console.log('tags: ', tags);
        var getUserid = AccountService.getUserInfo();
        post.userId = getUserid.userId;
        post.tags = tags;
        console.log('push post: ', post);
        postsRef.push(post);
        post = {};
        AccountService.updateUserTags(tags); //update the users tags
        return;
      },
      createPost: function(date, content, tags){
        if(date !== null){
          post.date = date.toString();
        }
        if(content !== null){
          post.content = content;
        }
        if(tags !== null){
          post.tags = tags;
        }

        post.isPublic = false;
      },
      getPosts: function(){
        var defer = $q.defer();
        var getUserid = AccountService.getUserInfo();
        console.log('getUserid:', getUserid);
        if(getUserid === null){
          defer.resolve(false);;
        }
        else{
          //get posts by user id
          postsRef.orderByChild("userId").startAt(getUserid.userId).endAt(getUserid.userId).limitToLast(30).on('value', function(snapshot) {
            console.log('snapshot: ', snapshot.val());
            if(snapshot.val() !== null){
              defer.resolve(snapshot.val());
            }
            else{
              defer.resolve(false);
            }
          })
        }
        return defer.promise;
      }
    };
  });
