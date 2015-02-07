describe("ss.photoSelector", function() {
    beforeEach(module('ss.photoSelector'));

    describe('AlbumsController', function() {
        var scope, ctrl, VKPhotos;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();

            VKPhotos = {
                getAlbums: jasmine.createSpy('getAlbums').and.returnValue({ then: function(callback) {
                    callback([]);
                }})
            };

            ctrl = $controller('AlbumsController', {
                $scope: scope,
                VKPhotos: VKPhotos
            });
        }));

        it('should get albums and set it to scope.albums', function() {
            expect(VKPhotos.getAlbums).toHaveBeenCalled();
            expect(scope.albums).not.toBeUndefined();
        });

        it('should set gridSize to p', function() {
            expect(scope.gridSize).toBe('p');
        })
    });

    describe('PhotosController', function() {
        var scope, ctrl, VKPhotos, route;

        beforeEach(inject(function($controller, $rootScope, $route) {
            $route.current = {
                params: {
                    id: -6
                }
            };
            route = $route;

            scope = $rootScope.$new();

            VKPhotos = {
                getAlbumPhotos: jasmine.createSpy('getAlbumPhotos').and.returnValue({ then: function(callback) {
                    callback([]);
                }})
            };

            ctrl = $controller('PhotosController', {
                $scope: scope,
                VKPhotos: VKPhotos
            });
        }));

        it('should get photos by album id and set it to scope.photos', function() {
            expect(VKPhotos.getAlbumPhotos).toHaveBeenCalledWith(route.current.params.id);
            expect(scope.photos).not.toBeUndefined();
        });

        it('should set gridSize to o', function() {
            expect(scope.gridSize).toBe('o');
        });

    });
});