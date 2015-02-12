describe('ss.player', function() {
    beforeEach(module('ss.player'));

    describe('PlayerController', function() {
        var ctrl;

        beforeEach(inject(function($controller) {
            ctrl = $controller('AlbumsController', {
                $scope: scope,
                VKPhotos: VKPhotos
            });
        }));
    });
});