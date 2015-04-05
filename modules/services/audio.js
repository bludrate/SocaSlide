angular.module('ss.audioService', [])
    .factory('audioService', function() {
        var audio = new Audio();

        return {
            audio: audio,

            play: function(url) {
                if (url) {
                    audio.src = url;
                }

                audio.play();
            },

            pause: function() {
                audio.pause();
            },

            stop: function() {
                audio.pause();
                audio.currentTime = 0;
            },

            destroy: function() {
                audio.src = '';
            }
        };
    });
