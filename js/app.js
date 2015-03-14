angular.module('ss', ['ngRoute', 'ss.audioSelector', 'route-segment', 'view-segment', 'ss.header', 'ss.photoSelector', 'ss.templates', 'ss.panel', 'ss.player', 'ss.tooltip', 'vkontakteServices', 'ss.slideshow', 'ss.previewModal'])
    .config(function ($routeSegmentProvider, $routeProvider) {
        VK.loadParams(window.location.href);

        $routeSegmentProvider
            .when('/', 'start')
            .when('/home', 'home')
            .when('/create', 'create')
            .when('/create/albums', 'create.albums')
            .when('/create/albums/:id', 'create.album')
            .when('/slideshow/:id', 'slideshow')

            .segment('start', {
                templateUrl: 'pages/start-page/start-page.html'
            })
            .segment('home', {
                default: true,
                templateUrl: 'pages/home-page/home-page.html'
            })
            .segment('slideshow', {
                templateUrl: 'pages/slideshow-page/slideshow-page.html',
                controller: 'SlideshowController',
                dependencies: ['id']
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
                });

        $routeProvider.otherwise({redirectTo: '/home'});
    })
    .run(function($location, $rootScope) {
        var locationInitialized = false;

        VK.addCallback('onLocationChanged', function(location) {
            if (!locationInitialized) {
                locationInitialized = true;
                if (!location || location === '/') {
                    location = '/home';
                }
            }

            if (location !== $location.url()) {
                $rootScope.$apply(function() {
                    $location.path(location);
                });
            }
        });

        $rootScope.$on('$locationChangeSuccess', function() {
            if (locationInitialized) {
                VK.callMethod('setLocation', $location.url());
            }
        });
    });