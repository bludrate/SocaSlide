describe("ss.photoSelector", function() {
    beforeEach(module('ss.photoSelector'));

    describe('PhotoSelectorController', function() {
        var scope, ctrl, VKPhotos;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();

            VKPhotos = {
                getAlbums: jasmine.createSpy('getAlbums').and.returnValue({ then: function(callback) {
                    callback([]);
                }})
            };

            ctrl = $controller('PhotoSelectorController', {
                $scope: scope,
                VKPhotos: VKPhotos
            });
        }));

        it('should get albums and set it to scope.albums', function() {
            expect(VKPhotos.getAlbums).toHaveBeenCalled();
            expect(scope.albums).not.toBeUndefined();
        });
    });
});