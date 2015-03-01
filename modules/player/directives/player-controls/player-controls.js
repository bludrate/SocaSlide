angular.module('ss.player')
    .directive('playerControls', function() {
        return  {
            restrict:'E',
            scope: true,
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

    function stop() {
        audioPlayService.stop();
        canvasPlayService.stop();
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

    $scope.volume = audioPlayService.volume * 100;
    $scope.played = false;
    $scope.pause = pause;
    $scope.stop = stop;
    $scope.play = play;
    $scope.setVolume = setVolume;
}