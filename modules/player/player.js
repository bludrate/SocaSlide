angular.module('ss.player', [
    'parseServices',
    'ss.templates',
    'ss.filters',
    'vkontakteServices',
    'ss.services',
    'ss.audioService'
])
    .directive('player', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'modules/player/player.html',
            scope: {
                src: '@'
            },
            controller: playerController,
            link: function(scope, element, attrs) {
                scope.toggleFullScreen = function() {
                    if (document.webkitFullscreenElement) {
                        document.webkitCancelFullScreen();
                    } else {
                        element[0].webkitRequestFullScreen();
                    }
                };

                scope.autoplay = 'autoplay' in attrs;
            }
        };
    });

function playerController(
    $scope,
    slideshowService,
    canvasPlayService,
    audioPlayService,
    VKAudios,
    selectedPhotos,
    selectedAudios,
    durationService,
    slideshowSettingsService,
    playerImgLoader
) {
    if ($scope.src === 'local') {
        initialize(
            selectedPhotos.get(),
            selectedAudios.getIds(),
            durationService.value(),
            slideshowSettingsService.get()
        );
    } else {
        slideshowService.getSlideshow($scope.src).then(function(data) {
            initialize(data.get('frames'), data.get('audios'), data.get('duration'), data.get('settings'));
        });
    }

    function initialize(frames, audioIds, duration, settings) {
        playerImgLoader.load(frames, 'w', function(images) {
            canvasPlayService.initialize(images, $scope, settings);
        }).then(function() {
            $scope.loaded = true;
        }, function() {
            alert('Error while loading images')
        }, function(progress) {
            $scope.loadProgress = progress;
            $scope.canPlay = duration * progress / 100 > 15;
        });

        if (audioIds.length) {
            VKAudios.getAudios(audioIds.join(',')).then(audioPlayService.initialize);
        }

        $scope.duration = duration;
    }

    $scope.$on('$destroy', function() {
        canvasPlayService.destroy();
        audioPlayService.destroy();
        playerImgLoader.destroy();
    });

    var activityTimer;

    function resetActivity() {
        if ($scope.rewindStarted) {
            return false;
        }

        clearActivity();
        setActivity();
    }

    function clearActivity() {
        clearTimeout(activityTimer);

        if ($scope.noActivity) {
            $scope.noActivity = false;
        }
    }

    function setActivity() {
        activityTimer = setTimeout(function() {
            $scope.noActivity = true;
            $scope.$digest();
        }, 3000);
    }

    $scope.$watch('rewindStarted', function(started) {
        if (started) {
            clearActivity();
        } else {
            setActivity();
        }
    });

    $scope.$on('playEnd', function() {
        audioPlayService.stop();
    });

    $scope.rewindStarted = false;
    $scope.resetActivity = resetActivity;
}
