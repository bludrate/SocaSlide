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

        function setVolume(volume) {
            audio.volume = volume;
        }

        audio.addEventListener('ended', audioEnded);
        audio.volume = 0.5;

        instance = {
            volume: audio.volume,
            initialize: initialize,
            play: play,
            pause: pause,
            setVolume: setVolume
        };

        return instance;
    });