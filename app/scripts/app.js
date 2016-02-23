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
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ionic',
    'firebase',
    'monospaced.elastic',
    // 'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
      // .state('tab', {
      //   url: "/tab",
      //   abstract: true,
      //   templateUrl: "views/profile.html"
      // })

  $urlRouterProvider.otherwise('/')


  $stateProvider.state('main.home', {
    url: '/home',
    views: {
      home: {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  $stateProvider.state('main.write', {
    url: '/write',
    views: {
      write: {
        templateUrl: 'views/writepost.html',
        controller: 'WritepostCtrl'
      }
    }
  })

  $stateProvider.state('main.addtags', {
    url: '/addtags',
    views: {
      write: {
        templateUrl: 'views/addtags.html',
        controller: 'AddtagsCtrl'
      }
    }
  })

  $stateProvider.state('main.settings', {
    url: '/settings',
    views: {
      settings: {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  $stateProvider.state('login', {
    url: '/login',
    views: {
      login: {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  $stateProvider.state('main', {
    url: '/main',
    views: {
      main: {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }
    }
  })
      /*.state('tab', {
        url: "/",
        abstract: true,
        templateUrl: "about.html"
      })

      .state('tab.home', {
        url: '/home',
        abstract: true,
          views: {
            'tab-home': {
              templateUrl: 'views/profile.html',
              controller: 'ProfileCtrl'
            }
          }
        })

      .state('tab.write', {
        url: '/write',
        abstract: true,
          views: {
            'tab-write': {
              templateUrl: 'views/writepost.html',
              controller: 'WritepostCtrl',
              controllerAs: 'vm'
            }
          }
        })

      .state('tab.addtags', {
        url: '/addtags',
        abstract: true,
          views: {
            'tab-write': {
              templateUrl: 'views/addtags.html',
              controller: 'AddtagsCtrl'
            }
          }
        })

      .state('tab.profile', {
        url: '/profile',
        abstract: true,
          views: {
            'tab-profile': {
              templateUrl: 'views/settings.html',
              controller: 'SettingsCtrl'
            }
          }
        })*/

    /*$routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
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
      .when('/tab/addtags', {
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
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });  */

     // $urlRouterProvider.otherwise("/tab/home");

    })

  .run(function (AccountService, $location, $rootScope, $ionicPlatform){

    $ionicPlatform.ready(function(){
      console.log('run!');
      AccountService.userLoginStatus().then(function(response){
        console.log('login stats?', response);
        // console.log('response: ', response, response.val());
        if(response === false || response.val() == null){
          console.log('trying to go to login');
          // $rootScope.$apply(function() {
            console.log('go to login');
            $location.path('/login');
          // })
        }
        else{
          console.log('here2');
          var path = $location.url();
          if(path === '/' || path === '/login' || path === '/postcomplete'){
            $rootScope.$apply(function() {
              // $location.path('/landing');
              $location.path('/main');
            })
          }
          console.log('can stay, we logged in.');
        }
      })
    })
    
      
  });

  var PhoneGapInit = function () {
    this.boot = function () {
      angular.bootstrap(document, ['barnacleApp']);
    };

    if (window.phonegap !== undefined) {
      document.addEventListener('deviceready', function() {
        console.log('1');
        this.boot();
      });
    } else {
        console.log('2');

      console.log('PhoneGap not found, booting Angular manually');
      // this.boot();
    }
  };

  angular.element(document).ready(function() {
        console.log('3');

    new PhoneGapInit();
  });



