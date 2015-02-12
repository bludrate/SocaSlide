angular.module('ss', ['ss.header', 'ss.photoSelector', 'ngRoute', 'templates', 'ss.timeline', 'ss.player'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: "modules/photo-selector/albums.html",
                controller: "AlbumsController"
            })
            .when('/albums/:id',
            {
                templateUrl: "modules/photo-selector/photos.html",
                controller: 'PhotosController'
            })
            .when('/slideshow/:id', {
                templateUrl: 'modules/player/player.html',
                controller: 'PlayerController'
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    });
