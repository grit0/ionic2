// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MyContact', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('app', {
    url: '/app',
    // abstract: true,
    templateUrl: "templates/menu.html",

    controller: 'AppCtrl'
    })

    // .state('list',{
    //   url:'/list',
    //   templateUrl:'templates/list.html',
    //   controller:'listController'
    // })


    .state('detail',{
      url:'/detail:{mac}',
      templateUrl:'templates/detail.html',
      controller:'detailController'
    })
        .state('listcluster',{
      url:'/listcluster:{past},{clicked}',
      templateUrl:'templates/listcluster.html',
      controller:'listclusterController'
    })
        .state('config_alert',{
      url:'/config_alert:{past},{clicked}',
      templateUrl:'templates/config_alert.html',
      controller:'config_alertController'
    })



  .state('app.search', {
    url: "/search",
    views: {
      'tab-search': {
         templateUrl: "templates/search.html"
        //         templateUrl: "templates/list.html",
        // controller:'listController'
      }
    }
  })
        .state('app.list',{
      url:'/list',
    views: {
      'tab-list': {
        templateUrl: "templates/list.html",
        controller:'listController'
      }
    }
  })
    .state('app.browse', {
    url: "/browse",
    views: {
      'tab-browse': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.single', {
      url: "/playlists",
      views: {
        'tab-playlists': {
          templateUrl: "templates/playlist.html",
          // controller: 'PlaylistCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/list');

})
