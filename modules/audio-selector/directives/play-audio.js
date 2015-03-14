angular.module('ss.audioSelector')
    .directive('playAudio', function(audioService) {
        var currentElement;

        audioService.audio.addEventListener('pause', function() {
            if (currentElement) {
                currentElement.removeClass('played');
                currentElement = undefined;
            }
        });

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(event) {
                    event.playAudio = true;

                    if (currentElement) {
                        currentElement.removeClass('played');
                    }

                    if (audioService.audio.src === attrs.playAudio && !audioService.audio.paused) {
                        audioService.pause();
                    } else {
                        audioService.play(attrs.playAudio);
                        element.addClass('played');
                        currentElement = element;
                    }
                });

            }
        }
    });