angular.module('ss.player')
    .factory('loadWrapper', function($q) {
        return function(callback) {
            return callback($q.defer());
        }
    })

    /*.factory('playerAudioLoader', function() {
        function load(audios) {
            audios[0].addEventListener('progress', function(a, b) {
                console.log(a, b);
            })
        }
        return {
            progress: 0,
            load: load
        };
    })*/

    .factory('playerImgLoader', function(loadWrapper, $filter) {
        function _onFinishLoad(event) {
            instance.loaded++;

            if (instance.current < instance.images.length) {
                _loadImage(instance.current);
                instance.current++;
            }

            instance.deferred.notify(instance.loaded / instance.images.length * 100);

            if (instance.loaded === instance.images.length) {
                instance.loading = false;
                instance.deferred.resolve(instance.images);
            }

            if (event.type === 'error') {
                instance.errors.push(this);
            }
        }

        function _loadImage(index) {
            instance.images[index].src = $filter('photoSrc')(instance.frames[index].sizes, instance.quality);
        }

        function _createImage() {
            var image = new Image();

            image.addEventListener('load', _onFinishLoad);
            image.addEventListener('error', _onFinishLoad);

            return image;
        }

        function load(frames, quality, imagesReadyCallback) {
            return loadWrapper(function(deferred) {
                instance.frames = frames;
                instance.quality = quality;
                instance.deferred = deferred;

                if (!instance.frames.length) {
                    deferred.resolve(instance.images);
                    return deferred;
                }

                for (var i = 0; i < instance.frames.length; i++) {
                    instance.images.push(_createImage());
                }

                var startLoad = instance.frames.length > 5 ? 5 : instance.frames.length;

                for (; instance.current < startLoad; instance.current++) {
                    _loadImage(instance.current);
                }

                instance.loading = true;

                imagesReadyCallback(instance.images);

                return deferred.promise;
            });
        }

        function destroy() {
            for (var i = 0; i < instance.images.length; i++) {
                instance.images[i].removeEventListener('error', _onFinishLoad);
                instance.images[i].removeEventListener('load', _onFinishLoad);
            }

            instance.images.length = 0;
            instance.errors.length = 0;
            instance.loading = false;
            instance.loaded = 0;
            instance.current = 0;
        }

        var instance = {
            load: load,
            loading: false,
            destroy: destroy,
            loaded: 0,
            current: 0,
            images: [],
            errors: []
        };

        return instance;
    });
