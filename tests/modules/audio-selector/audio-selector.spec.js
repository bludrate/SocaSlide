describe("ss.audioSelector", function() {
    beforeEach(module('ss.audioSelector'));

    describe('AudiosController', function() {
        var scope, ctrl, VKAudios;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();

            VKAudios = {
                getAudios: jasmine.createSpy('getAudios').and.returnValue({ then: function(callback) {
                    callback([]);
                }})
            };

            ctrl = $controller('AudiosController', {
                $scope: scope,
                VKAudios: VKAudios
            });
        }));

        it('should get audios and set it to scope.audios', function() {
            expect(VKAudios.getAudios).toHaveBeenCalled();
            expect(scope.audios).not.toBeUndefined();
        });

        describe('AudiosController.toggleAudio', function() {
            var selectedAudios,
                audio = VK.data['audio.get'].response.items[3];

            beforeEach(inject(function(_selectedAudios_) {
                selectedAudios = _selectedAudios_;
                selectedAudios.set([]);
            }));

            it('should add photo to selectedPhotos if it is not added', function() {
                spyOn(selectedAudios, 'add');
                scope.toggleAudio(audio);
                expect(selectedAudios.add).toHaveBeenCalledWith(audio);
            });

            it('should remove audio from selectedAudios if it is already added', function() {
                selectedAudios.add(audio);
                spyOn(selectedAudios, 'remove');
                scope.toggleAudio(audio);
                expect(selectedAudios.remove).toHaveBeenCalledWith(audio);
            });
        });
    });
});