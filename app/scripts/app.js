'use strict';

/**
 * @ngdoc overview
 * @name barnacleApp
 * @description
 * # barnacleApp
 *
 * Main module of the application.
 */
angular
  .module('barnacleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ionic',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/writepost', {
        templateUrl: 'views/writepost.html',
        controller: 'WritepostCtrl',
        controllerAs: 'vm'
      })
      .when('/addtags', {
        templateUrl: 'views/addtags.html',
        controller: 'AddtagsCtrl'
      })
      .when('/postcomplete', {
        templateUrl: 'views/postcomplete.html',
        controller: 'PostcompleteCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function (AccountService, $location, $rootScope){

    AccountService.userLoginStatus().then(function(response){
      console.log('response: ', response, response.val());
      if(response === false || response.val() == null){
        $rootScope.$apply(function() {
          $location.path('/login');
        })
      }
      else{
        var path = $location.url();
        if(path === '/' || path === '/login' || path === '/postcomplete'){
          $rootScope.$apply(function() {
            $location.path('/landing');
          })
        }
        console.log('can stay, we logged in.');
      }
    })
      
  })

  var PhoneGapInit = function () {
    this.boot = function () {
      angular.bootstrap(document, ['barnacleApp']);
    };

    if (window.phonegap !== undefined) {
      document.addEventListener('deviceready', function() {
        this.boot();
      });
    } else {
      console.log('PhoneGap not found, booting Angular manually');
      this.boot();
    }
  };

  angular.element(document).ready(function() {
    new PhoneGapInit();
  });



