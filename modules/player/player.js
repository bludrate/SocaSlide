angular.module('ss.player', ['parseServices', 'ss.templates', 'ss.filters'])
    .controller('PlayerController', function($scope, slideshowService, $route, $filter) {
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
            setTimeout(function() {
                $scope.$apply(function(){
                    $scope.images = images;
                    $scope.audios = audios;
                });
            }, 1000);
        });

        $scope.fullScreen = function(event) {
            event.currentTarget.webkitRequestFullScreen();
        }
    });