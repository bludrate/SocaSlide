describe('selectedPhotos service', function() {
    var selectedPhotos,
        examplePhotos = VK.data['photos.get'].response.items;

    beforeEach(module('ss.services'));

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