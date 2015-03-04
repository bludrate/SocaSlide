angular.module('ss.panel')
    .directive('audioList', function() {
        return {
            restrict: 'E',
            controller: audioListController,
            templateUrl: 'modules/panel/directives/audio-list/audio-list.html'
        };
    });

function audioListController($scope, selectedAudios) {
    $scope.audios = selectedAudios.get();

    $scope.removeAudio = function(audio) {
        selectedAudios.remove(audio);
    };
}