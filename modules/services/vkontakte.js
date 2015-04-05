angular.module('vkontakteServices', ['ss.constants', 'ss.filters'])
    .run(function(VKReady) {
        VK.init(function() {
            VKReady.deferred.resolve();
        }, function() {
            VKReady.deferred.reject();
        }, '5.28');
    })

    .factory('methodWrapper', function(VKReady, $q) {
        return function(method) {
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

    .factory('VKUser', function(methodWrapper) {
        function getInfo() {
            return methodWrapper(function(deferred) {
                VK.api('users.get', {}, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response[0]);
                    } else {
                        deferred.reject('error while getting user info');
                    }
                });
            });
        }

        return {
            getInfo: getInfo
        };
    })

    .factory('VKWall', function(methodWrapper, URLS) {
        function postSlideshow(slideshow) {
            var cover = slideshow.get('cover');

            return methodWrapper(function(deferred) {
                //jscs: disable
                var attachments = 'photo' + cover.owner_id + '_' + cover.id + ',' +
                    URLS.app + '#/slideshow/' + slideshow.id;
                //jscs: enable

                VK.api('wall.post', {
                    message: 'Слайдшоу ' + slideshow.get('title'),
                    attachments: attachments
                }, function(response) {
                    console.log(response);
                    deferred.resolve();
                });
            });
        }

        return {
            postSlideshow: postSlideshow
        };
    })

    .factory('VKPhotos', function(methodWrapper) {
        function getAlbums() {
            //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
            var parameters = {
                need_system: 1,
                need_covers: 1,
                photo_sizes: 1
            };
            //jscs: enable requireCamelCaseOrUpperCaseIdentifiers

            return methodWrapper(function(deferred) {
                VK.api('photos.getAlbums', parameters, function(data) {
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
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
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
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            });
        }

        function getAlbum(id) {
            var parameters = {};
            var system;

            if (id < 0) {
                system = true;
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                parameters.need_system = 1;
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            } else {
                system = false;
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                parameters.album_ids = id;
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            }

            return methodWrapper(function(deferred) {
                VK.api('photos.getAlbums', parameters, function(data) {
                    if (data.response) {
                        if (system) {
                            data.response.items.some(function(album) {
                                if (album.id == id) {
                                    deferred.resolve(album);
                                    return true;
                                }
                            });
                        } else {
                            deferred.resolve(data.response.items[0]);
                        }
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        return {
            getAlbums: getAlbums,
            getAlbumPhotos: getAlbumPhotos,
            getAlbum: getAlbum
        };
    })

    .factory('VKAudios', function(methodWrapper) {
        //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
        function getAudios(audio_ids) {
            return methodWrapper(function(deferred) {
                VK.api('audio.get', {
                    audio_ids: audio_ids
                }, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }
        //jscs: enable requireCamelCaseOrUpperCaseIdentifiers

        return {
            getAudios: getAudios
        };
    });
