angular.module('ss.audioSelector', ['vkontakteServices', 'ss.services'])
    .controller('AudiosController', AudiosController);

function AudiosController($scope, VKAudios, selectedAudios) {
    VKAudios.getAudios().then(function(audios){
        $scope.audios = audios;
    });

    $scope.toggleAudio = function(audio) {
        if (audio.selected) {
            selectedAudios.remove(audio);
        } else {
            selectedAudios.add(audio);
        }
    }
}