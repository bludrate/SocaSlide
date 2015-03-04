angular.module('ss.audioSelector')
    .directive('playAudio', function() {
        var audio = new Audio();

        audio.addEventListener('canplay', function() {
            audio.play();
            audio.element.addClass('played');
        });

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (audio.element && audio.element.hasClass('played') && attrs.playAudio === audio.src) {
                    element.addClass('played');
                    audio.element = element;
                }

                element.on('click', function(event) {
                    event.playAudio = true;

                    if (audio.element) {
                        audio.element.removeClass('played');
                    }

                    if (audio.src === attrs.playAudio && !audio.paused) {
                        audio.pause();
                    } else {
                        audio.src = attrs.playAudio;
                        audio.element = element;
                    }
                });

            }
        }
    });