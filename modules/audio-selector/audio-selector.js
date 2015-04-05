angular.module('ss.audioSelector', ['vkontakteServices', 'ss.services', 'ss.filters', 'ss.audioService'])
    .controller('AudiosController', AudiosController);

function AudiosController($scope, VKAudios, selectedAudios) {
    VKAudios.getAudios().then(function(audios) {
        $scope.audios = audios;
    });

    $scope.toggleAudio = function(event, audio) {
        if (event.playAudio) {
            return false;
        }

        if (audio.selected) {
            selectedAudios.remove(audio);
        } else {
            selectedAudios.add(audio);
        }
    }
}
