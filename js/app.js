angular.module('ss', [
    'ngRoute',
    'ss.audioSelector',
    'route-segment',
    'view-segment',
    'ss.header',
    'ss.photoSelector',
    'ss.templates',
    'ss.panel',
    'ss.player',
    'ss.tooltip',
    'vkontakteServices',
    'ss.slideshow',
    'ss.previewModal',
    'ss.slideshowList'
]);

(function() {
    if (!VK || !window.name) {
        return;
    }

    angular.module('ss')
        .config(function($routeSegmentProvider, $routeProvider) {
            VK.addCallback('onScrollTop', function(scrollTop, windowHeight, offsetTop) {
                VK.callMethod('scrollWindow', offsetTop);
                VK.callMethod('resizeWindow', 1000, windowHeight > 500 ? windowHeight : 500);
            });

            VK.callMethod('scrollTop');

            $routeSegmentProvider
                .when('/home', 'home')
                .when('/create', 'create')
                .when('/create/albums', 'create.albums')
                .when('/create/albums/:id', 'create.album')
                .when('/slideshow/:id', 'slideshow')

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
                    templateUrl: 'modules/photo-selector/albums/albums.html',
                    controller: 'AlbumsController'
                })

                .segment('album', {
                    templateUrl: 'modules/photo-selector/photos/photos.html',
                    controller: 'PhotosController',
                    dependencies: ['id']
                });

            $routeProvider.otherwise({redirectTo: '/home'});
        })
        .run(function($location, $rootScope, currentUser, URLS) {
            $location.path(VK.params.hash);

            VK.addCallback('onLocationChanged', function(location) {
                if (location !== $location.url()) {
                    $rootScope.$apply(function() {
                        $location.path(location);
                    });
                }
            });

            $rootScope.$on('$locationChangeSuccess', function() {
                VK.callMethod('setLocation', $location.url());
            });

            $rootScope.currentUser = currentUser;
            $rootScope.URLS = URLS;
        });
})();
