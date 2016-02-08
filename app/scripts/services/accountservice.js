'use strict';

/**
 * @ngdoc service
 * @name barnacleApp.AccountService
 * @description
 * # AccountService
 * Factory in the barnacleApp.
 */
angular.module('barnacleApp')
  .factory('AccountService', function () {

    var ref = new Firebase("https://sweltering-inferno-4461.firebaseio.com");
    var usersRef = ref.child("users");
    var userData = null;
    var loggedIn = false;

    // Tests to see if /users/<userId> has any data. 
    function checkIfUserExists(userId) {
      console.log('[checkIfUserExists] userId: ', userId);

      // var usersRef = new Firebase(usersRef);
      usersRef.child(userId).once('value', function(snapshot) {
        console.log('snapshot: ', snapshot.val());
        var exists = (snapshot.val() !== null);
        userExistsCallback(userId, exists);
      });
    }

    function userExistsCallback(userId, exists) {
      if (exists){
        console.log('user ' + userId + ' exists!');
        //do stuff
        loggedIn = true;
      } 
      else{
        console.log('user ' + userId + ' does not exist!');
        //create a user in our database
        usersRef.child(userId).set({userId:userId, displayName:userData.displayName, email:userData.email});
        loggedIn = true;
      }
    }


  
    // Create a callback which logs the current auth state
    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        var provider = authData.provider;
        userData = authData[provider];

        console.log('provider: ', provider);
        console.log('userData: ', userData);
        checkIfUserExists(authData.uid);

      } else {
        console.log("User is logged out");
      }
    }
    // Register the callback to be fired every time auth state changes
    var ref = new Firebase("https://sweltering-inferno-4461.firebaseio.com");
    // ref.onAuth(authDataCallback);

    /* 
      we need to check if the user has a profile by the uid. if so, then continue.
      else, ref.child("users").child(authData.uid).set({
        provider: authData.provider,
        name: getName(authData)
      }); <- create user in our database

      how to check if user already exists? .once()?
    */

    // Public API here
    return {
      loginFacebook: function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            var provider = authData.provider;
            var info = authData[provider];
            console.log('provider: ', provider);
            console.log('info: ', info);
          }
        },{scope: "email"});
      },
      logOut: function(){
        ref.unauth();
      },
      userLoginStatus: function(){
        var authData = ref.getAuth();
        if (authData) {
          console.log("Authenticated user with uid:", authData.uid);
        }

        // return loggedIn;
      }
    };
  });
