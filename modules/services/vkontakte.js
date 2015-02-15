angular.module('vkontakteServices', [])
    .run(function(VKReady) {
        VK.init(function() {
            VKReady.deferred.resolve();
        }, function() {
            VKReady.deferred.reject();
        }, '5.28');
    })

    .factory('methodWrapper', function(VKReady, $q) {
        return function (method) {
            var deferred = $q.defer();

            VKReady.then(function() {
                method(deferred);
            }, function() {
                deferred.reject('VK not available');
            });

            return deferred.promise;
        };
    })

    .factory('VKReady', function($q) {
        return {
            deferred: $q.defer(),
            then: function(successCallback, errorCallback) {
                this.deferred.promise.then(successCallback, errorCallback);
            }
        };
    })

    .factory('VKPhotos', function(methodWrapper) {
        function getAlbums() {
            return methodWrapper(function(deferred){
                VK.api('photos.getAlbums', {
                    need_system: 1,
                    need_covers: 1,
                    photo_sizes: 1
                }, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        function getAlbumPhotos(id) {
            return methodWrapper(function(deferred) {
                VK.api('photos.get', {
                    album_id: id,
                    photo_sizes: 1
                }, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        return {
            getAlbums: getAlbums,
            getAlbumPhotos: getAlbumPhotos
        };
    })

    .factory('VKAudios', function(methodWrapper) {
        function getAudios() {
            return methodWrapper(function(deferred){
                VK.api('audio.get', {}, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        return {
            getAudios: getAudios
        };
    });