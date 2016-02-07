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
  
    // Create a callback which logs the current auth state
    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }
    }
    // Register the callback to be fired every time auth state changes
    var ref = new Firebase("https://sweltering-inferno-4461.firebaseio.com");
    ref.onAuth(authDataCallback);

    // Public API here
    return {
      loginFacebook: function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        },{scope: "email"});
      }
    };
  });
