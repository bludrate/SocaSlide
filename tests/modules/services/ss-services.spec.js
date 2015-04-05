describe('ss.services', function() {
    beforeEach(module('ss.services'));

    describe('selectedPhotos', function() {
        var examplePhotos = VK.data['photos.get'].response.items;
        var selectedPhotos;

        beforeEach(inject(function(_selectedPhotos_) {
            selectedPhotos = _selectedPhotos_;
        }));

        describe('get', function() {
            it('should return selected photo collection', function() {
                expect(selectedPhotos.get()).toEqual([]);

                selectedPhotos.add(examplePhotos[0], examplePhotos[1]);

                expect(selectedPhotos.get()).toEqual([examplePhotos[0], examplePhotos[1]]);
            });

            it('should return specified photo from collection, if index was passed', function() {
                selectedPhotos.set([examplePhotos[0], examplePhotos[4]]);

                expect(selectedPhotos.get(1)).toBe(examplePhotos[4]);
            });
        });

        describe('add', function() {
            it('should add photo to selected photos collection', function() {
                selectedPhotos.add(examplePhotos[0]);
                selectedPhotos.add(examplePhotos[1]);
                selectedPhotos.add(examplePhotos[2]);
                expect(selectedPhotos.get()).toEqual([examplePhotos[0], examplePhotos[1], examplePhotos[2]]);
            });

            it('should be able to receive more then one parameter', function() {
                selectedPhotos.set([]);
                selectedPhotos.add(examplePhotos[1], examplePhotos[0], examplePhotos[4]);
                expect(selectedPhotos.get()).toEqual([examplePhotos[1], examplePhotos[0], examplePhotos[4]]);
            });

            it('should set selected property of photo to true', function() {
                selectedPhotos.set([]);
                selectedPhotos.add(examplePhotos[0]);
                expect(examplePhotos[0].selected).toBe(true);
            });
        });

        describe('set', function() {
            it('should set selected photos collection', function() {
                selectedPhotos.set([examplePhotos[0], examplePhotos[3]]);

                expect(selectedPhotos.get()).toEqual([examplePhotos[0], examplePhotos[3]]);
            });
        });

        describe('remove', function() {
            it('should remove photo', function() {
                selectedPhotos.set([examplePhotos[0], examplePhotos[2], examplePhotos[4]]);

                selectedPhotos.remove(examplePhotos[2]);

                expect(selectedPhotos.get()).toEqual([examplePhotos[0], examplePhotos[4]]);
            });

            it('should be able to receive more then one parameter', function() {
                selectedPhotos.set([examplePhotos[1], examplePhotos[0], examplePhotos[4], examplePhotos[2]]);
                selectedPhotos.remove(examplePhotos[1], examplePhotos[0], examplePhotos[4]);
                expect(selectedPhotos.get()).toEqual([examplePhotos[2]]);
            });

            it('should set selected property of photo to false', function() {
                selectedPhotos.set([examplePhotos[1]]);
                selectedPhotos.remove(examplePhotos[1]);
                expect(examplePhotos[1].selected).toBe(false);
            });
        });
    });

    describe('selectedAudios', function() {
        var exampleAudios = VK.data['audio.get'].response.items;
        var selectedAudios;

        beforeEach(inject(function(_selectedAudios_) {
            selectedAudios = _selectedAudios_;
        }));

        describe('get', function() {
            it('should return selected photo collection', function() {
                expect(selectedAudios.get()).toEqual([]);

                selectedAudios.add(exampleAudios[0], exampleAudios[1]);

                expect(selectedAudios.get()).toEqual([exampleAudios[0], exampleAudios[1]]);
            });

            it('should return specified photo from collection, if index was passed', function() {
                selectedAudios.set([exampleAudios[0], exampleAudios[4]]);

                expect(selectedAudios.get(1)).toBe(exampleAudios[4]);
            });
        });

        describe('add', function() {
            it('should add photo to selected photos collection', function() {
                selectedAudios.add(exampleAudios[0]);
                selectedAudios.add(exampleAudios[1]);
                selectedAudios.add(exampleAudios[2]);
                expect(selectedAudios.get()).toEqual([exampleAudios[0], exampleAudios[1], exampleAudios[2]]);
            });

            it('should be able to receive more then one parameter', function() {
                selectedAudios.set([]);
                selectedAudios.add(exampleAudios[1], exampleAudios[0], exampleAudios[4]);
                expect(selectedAudios.get()).toEqual([exampleAudios[1], exampleAudios[0], exampleAudios[4]]);
            });

            it('should set selected property of photo to true', function() {
                selectedAudios.set([]);
                selectedAudios.add(exampleAudios[0]);
                expect(exampleAudios[0].selected).toBe(true);
            });
        });

        describe('set', function() {
            it('should set selected photos collection', function() {
                selectedAudios.set([exampleAudios[0], exampleAudios[3]]);

                expect(selectedAudios.get()).toEqual([exampleAudios[0], exampleAudios[3]]);
            });
        });

        describe('remove', function() {
            it('should remove photo', function() {
                selectedAudios.set([exampleAudios[0], exampleAudios[2], exampleAudios[4]]);

                selectedAudios.remove(exampleAudios[2]);

                expect(selectedAudios.get()).toEqual([exampleAudios[0], exampleAudios[4]]);
            });

            it('should be able to receive more then one parameter', function() {
                selectedAudios.set([exampleAudios[1], exampleAudios[0], exampleAudios[4], exampleAudios[2]]);
                selectedAudios.remove(exampleAudios[1], exampleAudios[0], exampleAudios[4]);
                expect(selectedAudios.get()).toEqual([exampleAudios[2]]);
            });

            it('should set selected property of photo to false', function() {
                selectedAudios.set([exampleAudios[1]]);
                selectedAudios.remove(exampleAudios[1]);
                expect(exampleAudios[1].selected).toBe(false);
            });
        });
    });
});
