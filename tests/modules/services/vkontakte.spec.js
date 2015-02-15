describe('vkonatke services', function() {
    beforeEach(module('vkontakteServices'));

    describe('VKReady service', function() {
        var VKReady;
        beforeEach(inject(function(_VKReady_) {
            VKReady = _VKReady_;
        }));

        it('VKReady.then should call deferred.promise.then', function() {
            var successCallback = jasmine.createSpy('successCallback');
            var errorCallback = jasmine.createSpy('errorCallback');

            spyOn(VKReady.deferred.promise, 'then');

            VKReady.then(successCallback, errorCallback);

            expect(VKReady.deferred.promise.then).toHaveBeenCalledWith(successCallback, errorCallback);
        });
    });

    describe('VKPhotos', function() {
        var VKPhotos, VKReady, rootScope;
        beforeEach(inject(function(_VKPhotos_, _VKReady_, $rootScope) {
            rootScope = $rootScope;
            VKPhotos = _VKPhotos_;
            VKReady = _VKReady_;
        }));

        describe('getAlbums', function(){
            it('should wait for VKready', function() {
                spyOn(VKReady, 'then');

                VKPhotos.getAlbums();

                expect(VKReady.then).toHaveBeenCalled();
            });

            it('should return promise', function() {
                expect('then' in VKPhotos.getAlbums()).toBe(true);
            });

            it('should call VK.api', function() {
                spyOn(window.VK, 'api');

                VKPhotos.getAlbums();

                rootScope.$apply();

                expect(window.VK.api).toHaveBeenCalled();
            });

            it('should call VK.api with specific parameters', function() {
                spyOn(VK, 'api');

                VKPhotos.getAlbums();

                rootScope.$apply();

                expect(VK.api).toHaveBeenCalledWith('photos.getAlbums', {
                    need_system: 1,
                    need_covers: 1,
                    photo_sizes: 1
                }, jasmine.any(Function));
            });

            it('should respond with array', function() {
                var data;

                VKPhotos.getAlbums().then(function(albums) {
                    data = albums;
                });

                rootScope.$apply();

                expect(data).toEqual(jasmine.any(Array));
            });

            it('should reject on wrong data received', function() {
                var data = VK.data;
                var spy = jasmine.createSpy('callback');

                VK.data = {
                    'photos.get': {},
                    'photos.getAlbums': {}
                };

                VKPhotos.getAlbums().then(function(){

                }, function(response){
                    spy(response);
                });

                rootScope.$apply();

                expect(spy).toHaveBeenCalledWith('error in getting data');

                VK.data = data;
            });
        });

        describe('getAlbumPhotos', function(){
            it('should wait for VKready', function() {
                spyOn(VKReady, 'then');

                VKPhotos.getAlbumPhotos();

                expect(VKReady.then).toHaveBeenCalled();
            });

            it('should return promise', function() {
                expect('then' in VKPhotos.getAlbumPhotos()).toBe(true);
            });

            it('should call VK.api', function() {
                spyOn(window.VK, 'api');

                VKPhotos.getAlbumPhotos();

                rootScope.$apply();

                expect(window.VK.api).toHaveBeenCalled();
            });

            it('should reject on wrong data received', function() {
                var data = VK.data;
                var spy = jasmine.createSpy('callback');

                VK.data = {
                    'photos.get': {},
                    'photos.getAlbums': {}
                };

                VKPhotos.getAlbumPhotos().then(function(){

                }, function(response){
                    spy(response);
                });

                rootScope.$apply();

                expect(spy).toHaveBeenCalledWith('error in getting data');

                VK.data = data;
            });

            it('should call VK.api with specific parameters', function() {
                spyOn(VK, 'api');

                VKPhotos.getAlbumPhotos(2);

                rootScope.$apply();

                expect(VK.api).toHaveBeenCalledWith('photos.get', {
                    album_id: 2,
                    photo_sizes: 1
                }, jasmine.any(Function));
            });

            it('should respond with array', function() {
                var data;

                VKPhotos.getAlbumPhotos(2).then(function(albums) {
                    data = albums;
                });

                rootScope.$apply();

                expect(data).toEqual(jasmine.any(Array));
            });
        });
    });

    describe('VKAudios', function() {
        var VKAudios, VKReady, rootScope;
        beforeEach(inject(function(_VKAudios_, _VKReady_, $rootScope) {
            rootScope = $rootScope;
            VKAudios = _VKAudios_;
            VKReady = _VKReady_;
        }));

        describe('getAudios', function(){
            it('should wait for VKready', function() {
                spyOn(VKReady, 'then');

                VKAudios.getAudios();

                expect(VKReady.then).toHaveBeenCalled();
            });

            it('should return promise', function() {
                expect('then' in VKAudios.getAudios()).toBe(true);
            });

            it('should call VK.api', function() {
                spyOn(window.VK, 'api');

                VKAudios.getAudios();

                rootScope.$apply();

                expect(window.VK.api).toHaveBeenCalled();
            });

            it('should call VK.api with specific parameters', function() {
                spyOn(VK, 'api');

                VKAudios.getAudios();

                rootScope.$apply();

                expect(VK.api).toHaveBeenCalledWith('audio.get', {}, jasmine.any(Function));
            });

            it('should respond with array', function() {
                var data;

                VKAudios.getAudios().then(function(audios) {
                    data = audios;
                });

                rootScope.$apply();

                expect(data).toEqual(jasmine.any(Array));
            });

            it('should reject on wrong data received', function() {
                var data = VK.data;
                var spy = jasmine.createSpy('callback');

                VK.data = {
                    'audio.get': {}
                };

                VKAudios.getAudios().then(function(){

                }, function(response){
                    spy(response);
                });

                rootScope.$apply();

                expect(spy).toHaveBeenCalledWith('error in getting data');

                VK.data = data;
            });
        });
    });
});