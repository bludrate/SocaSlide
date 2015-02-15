angular.module('ss.player')
    .directive('playerAudio', function() {
        return {
            restrict: 'E',
            scope: {
                audios: '='
            },
            controller: PlayerAudioController
        };
    });

function PlayerAudioController($scope) {
    $scope.$watch('audios', init);

    function init() {
        if ($scope.audios && $scope.audios.length) {
            $scope.audios[0].play();
        }
    }
}