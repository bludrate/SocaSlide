describe('ss.photoSelector', function() {
    beforeEach(module('ss.photoSelector'));

    describe('AlbumsController', function() {
        var scope;
        var ctrl;
        var VKPhotos;

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
        var scope;
        var ctrl;
        var VKPhotos;

        beforeEach(inject(function($controller, $rootScope, $routeParams) {
            $routeParams.id = 6;
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
            expect(VKPhotos.getAlbumPhotos).toHaveBeenCalledWith(6);
            expect(scope.photos).not.toBeUndefined();
        });

        it('should set gridSize to o', function() {
            expect(scope.gridSize).toBe('o');
        });

        describe('PhotosController.togglePhoto', function() {
            var selectedPhotos;
            var photo = VK.data['photos.get'].response.items[3];

            beforeEach(inject(function(_selectedPhotos_) {
                selectedPhotos = _selectedPhotos_;
                selectedPhotos.set([]);
            }));

            it('should add photo to selectedPhotos if it is not added', function() {
                spyOn(selectedPhotos, 'add');
                scope.togglePhoto(photo);
                expect(selectedPhotos.add).toHaveBeenCalledWith(photo);
            });

            it('should remove photo from selectedPhotos if it is already added', function() {
                selectedPhotos.add(photo);
                spyOn(selectedPhotos, 'remove');
                scope.togglePhoto(photo);
                expect(selectedPhotos.remove).toHaveBeenCalledWith(photo);
            });
        });
    });
});
