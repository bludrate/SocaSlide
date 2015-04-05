describe('parseServices', function() {
    var examplePhotos = VK.data['photos.get'].response.items;

    beforeEach(function() {
        spyOn(Parse, 'initialize').and.callFake(function() {});
        module('parseServices');
    });

    it('should initialize Parse on run', inject(function(config) {
        expect(Parse.initialize).toHaveBeenCalledWith(config.appId, config.JSKey);
    }));

    describe('slideshowService', function() {
        var slideshowService;
        var getSpy = jasmine.createSpy('get').and.callFake(function() {return 'get result'});
        var slideshowData = {
                frames: [examplePhotos[0], examplePhotos[1]]
            };

        beforeEach(function() {
            function FakeExtend() {}

            FakeExtend.prototype.set = function() {};
            FakeExtend.prototype.save = function() {};

            spyOn(Parse.Object, 'extend').and.callFake(function() {
                return FakeExtend;
            });

            spyOn(Parse, 'Query').and.callFake(function() {
                this.get = getSpy;
            });
        });

        beforeEach(inject(function(_slideshowService_) {
            slideshowService = _slideshowService_;
        }));

        it('should define slideshow class', function() {
            expect(Parse.Object.extend).toHaveBeenCalledWith('Slideshow');
        });

        describe('createSlideshow', function() {
            it('should create new Slideshow object', function() {
                expect(slideshowService.createSlideshow(slideshowData).set).toBeDefined();
            });
        });

        describe('getSlideshow', function() {
            it('should define query', function() {
                slideshowService.getSlideshow(123);
                expect(Parse.Query).toHaveBeenCalledWith(Parse.Object.extend('Slideshow'));
            });

            it('should call query get', function() {
                slideshowService.getSlideshow(123);
                expect(getSpy).toHaveBeenCalledWith(123);
            });

            it('should return result of query get (promise)', function() {
                expect(slideshowService.getSlideshow(123)).toBe('get result');
            });
        });

        describe('saveNewSlideshow', function() {
            var saveSpy = jasmine.createSpy('save').and.callFake(function() {
                return 'promise';
            });

            beforeEach(function() {
                spyOn(slideshowService, 'createSlideshow').and.callFake(function() {
                    return {
                        save: saveSpy
                    };
                });
            });

            it('should create new slideshow', function() {
                slideshowService.saveNewSlideshow(slideshowData);
                expect(slideshowService.createSlideshow).toHaveBeenCalledWith(slideshowData);
            });

            it('should save slideshow', function() {
                slideshowService.saveNewSlideshow(slideshowData);
                expect(saveSpy).toHaveBeenCalled();
            });

            it('should return promise', function() {
                expect(slideshowService.saveNewSlideshow(slideshowData)).toBe('promise');
            });
        });
    });
});
