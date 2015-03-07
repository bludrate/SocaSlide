angular.module('ss.player', ['parseServices', 'ss.templates', 'ss.filters', 'vkontakteServices'])
    .directive('player', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'modules/player/player.html',
            scope: {
                src: '@'
            },
            controller: playerController
        };
    });

function playerController($scope, slideshowService, $filter, canvasPlayService, audioPlayService, VKAudios) {
    slideshowService.getSlideshow($scope.src).then(function(data) {
        var frames = data.get('frames'),
            audioIds = data.get('audios'),
            images = [],
            image,
            audio;

        for (var i = 0; i < frames.length; i++) {
            image = new Image();
            images.push(image);
            image.src = $filter('photoSrc')(frames[i].sizes, 'w');
        }

        VKAudios.getAudios(audioIds.join(',')).then(audioPlayService.initialize);

        canvasPlayService.setImages(images);
    });

    $scope.$on('$destroy', function() {
        canvasPlayService.stop();
    });
}