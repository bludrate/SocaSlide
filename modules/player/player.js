angular.module('ss.player', ['parseServices', 'ss.templates', 'ss.filters', 'vkontakteServices', 'ss.services'])
    .directive('player', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'modules/player/player.html',
            scope: {
                src: '@'
            },
            controller: playerController,
            link: function(scope, element) {
                scope.fullScreen = function() {
                    element[0].webkitRequestFullScreen();
                }
            }
        };
    });

function playerController($scope, slideshowService, $filter, canvasPlayService, audioPlayService, VKAudios, selectedPhotos, selectedAudios) {
    if ($scope.src === 'local') {
        initialize(selectedPhotos.get(), selectedAudios.getIds());
    } else {
        slideshowService.getSlideshow($scope.src).then(function(data) {
            initialize(data.get('frames'), data.get('audios'));
        });
    }

    function initialize(frames, audioIds) {
        var images = [],
            image;

        for (var i = 0; i < frames.length; i++) {
            image = new Image();
            images.push(image);
            image.src = $filter('photoSrc')(frames[i].sizes, 'z');
        }

        if (audioIds.length) {
            VKAudios.getAudios(audioIds.join(',')).then(audioPlayService.initialize);
        }

        canvasPlayService.setImages(images);
    }


    $scope.$on('$destroy', function() {
        canvasPlayService.destroy();
        audioPlayService.destroy();
    });

    var activityTimer;

    function checkActivity() {
        clearTimeout(activityTimer);

        activityTimer = setTimeout(function() {
            $scope.noActivity = true;
            $scope.$digest();
        }, 3000);

        if ($scope.noActivity) {
            $scope.noActivity = false;
        }
    }

    $scope.checkActivity = checkActivity;
}