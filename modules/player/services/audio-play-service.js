angular.module('ss.player')
    .factory('audioPlayService', function(audioService) {
        var audios = [];
        var currentAudio = 0;
        var instance;
        var audio = audioService.audio;

        function initialize(_audios_) {
            if (!_audios_.length) {
                console.error('Audios not found!');
                return;
            }

            audios = _audios_;

            currentAudio = 0;

            audio.src = audios[currentAudio].url;
        }

        function play() {
            if (!audios.length) {
                return false;
            }

            audioService.play();
        }

        function pause() {
            audioService.pause()
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

            audioService.play();
        }

        function stop() {
            audioService.stop();
        }

        function destroy() {
            stop();
            audios.length = 0;
        }

        function setVolume(volume) {
            audio.volume = volume;
        }

        function rewind(value) {
            audio.currentTime = value % audio.duration;
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
            destroy: destroy,
            rewind: rewind
        };

        return instance;
    });
