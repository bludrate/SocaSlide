angular.module('ss.panel', ['ss.services', 'parseServices', 'ss.filters', 'mouseWheel', 'ss.settings', 'ss.dialog'])
    .directive('panel', function() {
        return {
            restrict: 'E',
            controller: panelController,
            templateUrl: 'modules/panel/panel.html'
        };
    });

function panelController($scope, $location, $rootScope, slideshowService, selectedPhotos, selectedAudios, slideshowSettingsService, dialogService) {
    $scope.selectedPhotos = selectedPhotos;
    $scope.settings = slideshowSettingsService.get();

    $scope.saveSlideshow = function() {
        slideshowService.saveNewSlideshow({
            frames: selectedPhotos.get(),
            audios: selectedAudios.getIds(),
            settings: slideshowSettingsService.get()
        }).then(function(slideshow) {
            $rootScope.$apply(function() {
                var path = '/slideshow/' + slideshow.id;
                $location.path(path);
            });
        });
    };

    $scope.openSettings = function() {
        dialogService.open({
            template: 'modules/slideshow-settings/slideshow-settings.html'
        });
    };
}