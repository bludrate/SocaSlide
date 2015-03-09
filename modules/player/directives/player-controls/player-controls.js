angular.module('ss.player')
    .directive('playerControls', function() {
        return  {
            restrict:'E',
            replace: true,
            scope: {
                fullScreen: '&'
            },
            templateUrl: 'modules/player/directives/player-controls/player-controls.html',
            controller: PlayerControlsController
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
        if ($scope.volume < 0 ) {
            $scope.volume = 0;
        }

        if ($scope.volume > 100) {
            $scope.volume = 100;
        }

        audioPlayService.setVolume($scope.volume / 100);
    }

    function toggle() {
        if ($scope.played) {
            pause();
        } else {
            play();
        }
    }

    $scope.volume = audioPlayService.volume * 100;
    $scope.noActivity = false;
    $scope.played = false;
    $scope.toggle = toggle;
    $scope.setVolume = setVolume;
}