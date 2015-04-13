angular.module('ss.audioSelector')
    //play audio after clicking element
    .directive('playAudio', function(audioService) {
        var currentPlayedElement;

        audioService.audio.addEventListener('pause', function() {
            if (currentPlayedElement) {
                currentPlayedElement.removeClass('played');
                currentPlayedElement = undefined;
            }
        });

        function play(url, element) {
            if (currentPlayedElement) {
                currentPlayedElement.removeClass('played');
            }

            if (audioService.audio.src === url && !audioService.audio.paused) {
                audioService.pause();
            } else {
                audioService.play(url);
                element.addClass('played');
                currentPlayedElement = element;
            }
        }

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    //for prevent toggle audio on clicking play control
                    event.playAudio = true;

                    play(attrs.playAudio, element);
                });
            }
        };
    });