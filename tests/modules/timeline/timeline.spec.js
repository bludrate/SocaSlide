describe("timeline", function() {
    beforeEach(module('ss.timeline'));

    describe('framesController',function() {
        var ctrl, scope, selectedPhotos;

        beforeEach(inject(function($controller, $rootScope, _selectedPhotos_) {
            selectedPhotos = _selectedPhotos_;

            scope = $rootScope.$new();

            ctrl = $controller('framesController', {
                $scope: scope
            });
        }));

        it('should set frames from selectedPhotos', function() {
            expect(scope.frames).toBe(selectedPhotos.get());
        });

        describe('removeFrame', function() {
            var selectedPhotos,
                photo = VK.data['photos.get'].response.items[3];

            beforeEach(inject(function(_selectedPhotos_) {
                selectedPhotos = _selectedPhotos_;
            }));

            it('should remove photo from selectedPhotos', function() {
                selectedPhotos.add(photo);
                spyOn(selectedPhotos, 'remove');
                scope.removeFrame(photo);
                expect(selectedPhotos.remove).toHaveBeenCalledWith(photo);
            })
        });
    });
});