angular.module('ss.player', ['parseServices', 'ss.templates', 'ss.filters'])
    .controller('PlayerController', function($scope, slideshowService, $route, $filter, canvasPlayService, audioPlayService) {
        slideshowService.getSlideshow($route.current.params.id).then(function(data) {
            var frames = data.get('frames'),
                audioList = data.get('audios'),
                images = [],
                image,
                audios = [],
                audio;

            for (var i = 0; i < frames.length; i++) {
                image = new Image();
                images.push(image);
                image.src = $filter('photoSrc')(frames[i].sizes, 'w');
            }

            for (var j = 0; j < audioList.length; j++) {
                audio = new Audio();
                audio.src = audioList[j].url;
                audios.push(audio);
            }

            canvasPlayService.setImages(images);
            audioPlayService.initialize(audios);
        });

        $scope.$on('$locationChangeStart', function() {
            canvasPlayService.stop();
            audioPlayService.stop();
        });

        $scope.fullScreen = function(event) {
            event.currentTarget.webkitRequestFullScreen();
        };
    });