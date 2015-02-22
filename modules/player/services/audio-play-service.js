angular.module('ss.player')
    .factory('audioPlayService', function() {
        var audios,
            currentAudio = 0;

        function initialize(_audios_) {
            audios = _audios_;

            for (var i = 0; i < audios.length; i++) {
                audios[i].addEventListener('ended', audioEnded);
            }
        }

        function play() {
            if (!audios.length)
                return false;

            audios[currentAudio].play();
        }

        function pause() {
            audios[currentAudio].pause()
        }

        function stop() {
            audios[currentAudio].pause();
            audios[currentAudio].currentTime = 0;
            currentAudio = 0;
        }

        function audioEnded() {
            currentAudio++;

            if (currentAudio >= audios.length) {
                currentAudio = 0;
            }

            audios[currentAudio].play();
        }

        return {
            initialize: initialize,
            play: play,
            pause: pause,
            stop: stop
        };
    });