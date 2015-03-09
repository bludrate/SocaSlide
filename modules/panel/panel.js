angular.module('ss.panel', ['ss.services', 'parseServices', 'ss.filters', 'ss.settings', 'ss.dialog'])
    .directive('panel', function() {
        return {
            restrict: 'E',
            controller: panelController,
            templateUrl: 'modules/panel/panel.html'
        };
    });

function panelController($scope, selectedPhotos, slideshowSettingsService, dialogService) {
    $scope.selectedPhotos = selectedPhotos;
    $scope.settings = slideshowSettingsService.get();

    $scope.preview = function() {
        dialogService.open({
            template: 'modules/player-modal/player-modal.html',
            src: 'local'
        });
    };

    $scope.openSettings = function() {
        dialogService.open({
            template: 'modules/slideshow-settings/slideshow-settings.html'
        });
    };
}