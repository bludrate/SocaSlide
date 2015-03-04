angular.module('ss', ['ngRoute', 'ss.audioSelector', 'route-segment', 'view-segment', 'ss.header', 'ss.photoSelector', 'ss.templates', 'ss.panel', 'ss.player', 'ss.tooltip'])
    .config(function ($routeProvider, $routeSegmentProvider) {
        $routeSegmentProvider
            .when('/', 'home')
            .when('/create', 'create')
            .when('/create/albums', 'create.albums')
            .when('/create/albums/:id', 'create.album')
            .when('/slideshow/:id', 'slideshow')

            .segment('home', {
                default: true,
                templateUrl: 'pages/home-page/home-page.html'
            })

            .segment('create', {
                templateUrl: 'pages/create-page/create-page.html'
            })
            .within()

                .segment('albums', {
                    default: true,
                    templateUrl: 'modules/photo-selector/albums.html',
                    controller: 'AlbumsController'
                })

                .segment('album', {
                    templateUrl: 'modules/photo-selector/photos.html',
                    controller: 'PhotosController',
                    dependencies: ['id']
                })

            .up()
            .segment('slideshow', {
                templateUrl: 'modules/player/player.html',
                controller: 'PlayerController',
                dependencies: ['id']
            });

        $routeProvider.otherwise({redirectTo: '/'});
    });
