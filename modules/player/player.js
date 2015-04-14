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
    playerImgLoader,
    $q
) {
    var activityTimer;

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

    $scope.$on('$destroy', function() {
        canvasPlayService.destroy();
        audioPlayService.destroy();
        playerImgLoader.destroy();
    });

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
    $scope.canPlay = false;
    $scope.resetActivity = resetActivity;

    function initialize(frames, audioIds, duration, settings) {
        var imgReadyDfd = $q.defer();
        var imgReadyDfdResolved = false;
        var audioReadyDfd;

        playerImgLoader.load(frames, 'w', function(images) {
            canvasPlayService.initialize(images, $scope, settings);
        }).then(function() {
            $scope.loaded = true;
        }, function() {
            alert('Error while loading images')
        }, function(progress) {
            $scope.loadProgress = progress;

            //if we can play 15 seconds of slideshow
            if (duration * progress / 100 > 15000 && !imgReadyDfdResolved) {
                imgReadyDfd.resolve();
                imgReadyDfdResolved = true;
            }
        });

        if (audioIds.length) {
            audioReadyDfd = VKAudios.getAudios(audioIds.join(',')).then(audioPlayService.initialize);
        }

        $q.all([imgReadyDfd, audioReadyDfd]).then(function() {
            $scope.canPlay = true;
        });

        $scope.duration = duration;
    }

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
}
