angular.module('ss.player')
    .factory('audioPlayService', function() {
        var audios = [],
            currentAudio = 0,
            instance,
            audio = new Audio();

        function initialize(_audios_) {
            audios = _audios_;

            currentAudio = 0;

            audio.src = audios[currentAudio].url;
        }

        function play() {
            if (!audios.length)
                return false;

            audio.play();
        }

        function pause() {
            audio.pause()
        }

        function audioEnded() {
            if (audios.length === 1) {
                audio.currentTime = 0;
            } else {
                currentAudio++;

                if (currentAudio >= audios.length) {
                    currentAudio = 0;
                }

                audio.src = audios[currentAudio].url;
            }

            audio.play();
        }

        function stop() {
            audio.pause();
            audio.currentTime = 0;
        }

        function destroy() {
            stop();
            audios.length = 0;
        }

        function setVolume(volume) {
            audio.volume = volume;
        }

        audio.addEventListener('ended', audioEnded);
        audio.volume = 0.5;

        instance = {
            volume: audio.volume,
            initialize: initialize,
            play: play,
            stop: stop,
            pause: pause,
            setVolume: setVolume,
            destroy: destroy
        };

        return instance;
    });