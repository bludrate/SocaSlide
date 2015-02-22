describe("timeline", function() {
    beforeEach(module('ss.timeline'));

    describe('FramesController',function() {
        var ctrl, scope,
             selectedPhotos, selectedAudios;

        beforeEach(inject(function($controller, $rootScope, _selectedAudios_, _selectedPhotos_) {
            selectedAudios = _selectedAudios_;
            selectedPhotos = _selectedPhotos_;

            scope = $rootScope.$new();

            ctrl = $controller('FramesController', {
                $scope: scope
            });
        }));

        it('should set frames from selectedPhotos', function() {
            expect(scope.frames).toBe(selectedPhotos.get());
        });

        it('should set audios from selectedAudios', function() {
            expect(scope.audios).toBe(selectedAudios.get());
        });

        describe('removeFrame', function() {
            var photo = VK.data['photos.get'].response.items[3];

            it('should remove photo from selectedPhotos', function() {
                selectedPhotos.add(photo);
                spyOn(selectedPhotos, 'remove');
                scope.removeFrame(photo);
                expect(selectedPhotos.remove).toHaveBeenCalledWith(photo);
            })
        });

        describe('removeAudio', function() {
            var audio = VK.data['audio.get'].response.items[3];

            it('should remove audio from selectedAudios', function() {
                selectedAudios.add(audio);
                spyOn(selectedAudios, 'remove');
                scope.removeAudio(audio);
                expect(selectedAudios.remove).toHaveBeenCalledWith(audio);
            })
        });

        describe('saveSlideshow', function() {
            var slideshowService, location;

            beforeEach(inject(function(_slideshowService_, $location) {
                location = $location;
                slideshowService = _slideshowService_;
            }));

            it('should save slideshow', function() {
                var frames = [],
                    audios = [];

                spyOn(slideshowService, 'saveNewSlideshow').and.callFake(function() {
                    return {
                        then: function(callback) {
                            callback({id: 1});
                        }
                    };
                });
                scope.frames = frames;
                scope.audios = audios;

                scope.saveSlideshow();

                expect(slideshowService.saveNewSlideshow).toHaveBeenCalledWith({
                    frames: frames,
                    audios: audios
                });

                expect(location.path()).toBe('/slideshow/1');
            });
        });
    });
});