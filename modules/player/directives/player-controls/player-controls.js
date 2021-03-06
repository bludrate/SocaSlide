angular.module('ss.player')
    .directive('playerControls', function() {
        return {
            restrict:'E',
            replace: true,
            scope: {
                toggleFullScreen: '&',
                duration: '@',
                rewindStarted: '=',
                noActivity: '=',
                canPlay: '='
            },
            templateUrl: 'modules/player/directives/player-controls/player-controls.html',
            controller: PlayerControlsController,
            link: function(scope, element, attrs) {
                if (attrs.autoplay === 'true') {
                    var watcher = scope.$watch('canPlay', function(newValue) {
                        if (newValue) {
                            scope.play();
                            watcher(); //stop watching
                        }
                    });
                }
            }
        }
    });

function PlayerControlsController($scope, audioPlayService, canvasPlayService) {
    function play() {
        audioPlayService.play();
        canvasPlayService.play();
        $scope.played = true;
    }

    function pause() {
        audioPlayService.pause();
        canvasPlayService.pause();
        $scope.played = false;
    }

    function setVolume() {
        audioPlayService.setVolume($scope.volume / 100);
    }

    function toggle() {
        if ($scope.played) {
            pause();
        } else {
            play();
        }
    }

    function rewindStart() {
        audioPlayService.pause();
        canvasPlayService.pause();
        $scope.rewindStarted = true;
    }

    function rewindEnd() {
        if ($scope.played) {
            audioPlayService.play();
            canvasPlayService.play();
        }
        $scope.rewindStarted = false;
    }

    function rewind() {
        audioPlayService.rewind(Number($scope.currentTime) / 1000);
        canvasPlayService.rewind(Number($scope.currentTime));
    }

    function isFullScreenActive() {
        return Boolean(document.webkitFullscreenElement);
    }

    $scope.$on('playProgress', function(event, progress) {
        $scope.currentTime = progress;

        if (!$scope.noActivity) {
            $scope.$digest();
        }
    });

    $scope.$on('playEnd', function() {
        $scope.played = false;
        $scope.$digest();
    });

    $scope.volume = audioPlayService.volume * 100;
    $scope.currentTime = 0;
    $scope.played = false;
    $scope.isFullScreenActive = isFullScreenActive;
    $scope.toggle = toggle;
    $scope.play = play;
    $scope.pause = pause;
    $scope.setVolume = setVolume;
    $scope.rewind = rewind;
    $scope.rewindStart = rewindStart;
    $scope.rewindEnd = rewindEnd;
}
