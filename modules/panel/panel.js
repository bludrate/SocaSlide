angular.module('ss.panel', ['ss.services', 'parseServices', 'ss.filters', 'ss.settings', 'ss.dialog'])
    .directive('panel', function() {
        return {
            restrict: 'E',
            controller: panelController,
            templateUrl: 'modules/panel/panel.html'
        };
    });

function panelController($scope, selectedPhotos, durationService, dialogService) {
    $scope.selectedPhotos = selectedPhotos;
    $scope.duration = durationService.value;

    $scope.preview = function() {
        dialogService.open({
            template: 'modules/preview-modal/preview-modal.html'
        });
    };

    $scope.openSettings = function() {
        dialogService.open({
            template: 'modules/slideshow-settings/slideshow-settings.html'
        });
    };
}
