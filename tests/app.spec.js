describe('testing routes', function() {
    beforeEach(module('ss'));

    it('should test routes', inject(function($route) {
        expect($route.routes['/']).toBeDefined();
        expect($route.routes['/albums/:id']).toBeDefined();
        expect($route.routes['/slideshow/:id']).toBeDefined();

        expect($route.routes['/'].controller).toBe('AlbumsController');
        expect($route.routes['/'].templateUrl).toBe('modules/photo-selector/albums.html');

        expect($route.routes['/albums/:id'].controller).toBe('PhotosController');
        expect($route.routes['/albums/:id'].templateUrl).toBe('modules/photo-selector/photos.html');

        expect($route.routes['/slideshow/:id'].controller).toBe('PlayerController');
        expect($route.routes['/slideshow/:id'].templateUrl).toBe('modules/player/player.html');

        expect($route.routes[null].redirectTo).toBe('/');
    }));
});