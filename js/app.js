angular.module('ss', ['ss.header', 'ss.photoSelector', 'ngRoute', 'templates', 'ss.timeline'])
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
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    });
