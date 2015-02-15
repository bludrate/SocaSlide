describe('testing routes', function() {
    beforeEach(module('ss'));

    it('should test routes', inject(function($route) {
        expect($route.routes['/']).toBeDefined();
        expect($route.routes['/albums/:id']).toBeDefined();
        expect($route.routes['/slideshow/:id']).toBeDefined();

        expect($route.routes['/sound'].controller).toBe('SoundController');
        expect($route.routes['/sound'].templateUrl).toBe('modules/sound-selector/sound-selector.html');

        expect($route.routes['/albums'].controller).toBe('AlbumsController');
        expect($route.routes['/albums'].templateUrl).toBe('modules/photo-selector/albums.html');

        expect($route.routes['/albums/:id'].controller).toBe('PhotosController');
        expect($route.routes['/albums/:id'].templateUrl).toBe('modules/photo-selector/photos.html');

        expect($route.routes['/slideshow/:id'].controller).toBe('PlayerController');
        expect($route.routes['/slideshow/:id'].templateUrl).toBe('modules/player/player.html');

        expect($route.routes[null].redirectTo).toBe('/');
    }));

    it('should set routes names', inject(function($route){
        expect($route.routes['/'].name).toBe('home');
        expect($route.routes['/albums'].name).toBe('albums');
        expect($route.routes['/albums/:id'].name).toBe('album');
        expect($route.routes['/slideshow/:id'].name).toBe('slideshow');
        expect($route.routes['/sound'].name).toBe('sound');
    }));
});