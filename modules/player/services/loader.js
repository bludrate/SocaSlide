angular.module('ss.player')
    .factory('loadWrapper', function($q) {
        return function(callback) {
            return callback($q.defer());
        }
    })
    .factory('playerAudioLoader', function() {
        function load(audios, progressCallback, finishCallback) {
            audios[0].addEventListener('progress', function(a, b) {
                console.log(a, b);
            })
        }
        return {
            progress: 0,
            load: load
        };
    })
    .factory('playerImgLoader', function(loadWrapper, $filter) {
        function load(frames, quality) {
            return loadWrapper(function(deferred) {
                function onFinishLoad(event) {
                    loaded++;

                    if (current < imageSources.length) {
                        loadImage();
                        current++;
                    } else {
                        instance.loading = false;
                    }

                    instance.progress = loaded / frames.length * 100;

                    if (event.type === 'error') {
                        errors.push(this);
                    }
                }
                function loadImage() {
                    var image = new Image();

                    image.addEventListener('load', onFinishLoad);

                    image.addEventListener('error', onFinishLoad);

                    image.src = $filter('photoSrc')(frames[current].sizes, quality);

                    images.push(image);
                }

                var images = [];

                if (!imageSources.length) {
                    deferred.resolve(images);
                    return deferred;
                }

                var current = 0;
                var loaded = 0;
                var errors = [];
                var startLoad = imageSources.length > 5 ? 5 : imageSources.length;

                for (; current < startLoad; current++) {
                    loadImage();
                }

                instance.loading = true;
            });
        }

        var instance = {
            load: load,
            progress: 0,
            loading: false
        };
    });
