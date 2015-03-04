angular.module('ss.panel', ['ss.services', 'parseServices', 'ss.filters', 'mouseWheel'])
    .directive('panel', function() {
        return {
            restrict: 'E',
            controller: panelController,
            templateUrl: 'modules/panel/panel.html'
        };
    });

function panelController($scope, $location, $rootScope, slideshowService, selectedPhotos, selectedAudios) {
    $scope.saveSlideshow = function() {
        slideshowService.saveNewSlideshow({
            frames: selectedPhotos.get(),
            audios: selectedAudios.getIds()
        }).then(function(slideshow) {
            $rootScope.$apply(function() {
                var path = '/slideshow/' + slideshow.id;
                $location.path(path);
            });
        });
    };
}