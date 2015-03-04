angular.module('ss.panel')
    .directive('frameList', function() {
        return {
            restrict: 'E',
            controller: frameListController,
            templateUrl: 'modules/panel/directives/frame-list/frame-list.html'
        };
    });

function frameListController($scope, selectedPhotos) {
    $scope.frames = selectedPhotos.get();

    $scope.removeFrame = function(frame) {
        selectedPhotos.remove(frame);
    };

    $scope.scroll = function(event) {
        var deltaY = event.wheelDeltaY;

        if (isNaN(deltaY)) {
            deltaY = 0;
        }

        event.currentTarget.scrollLeft -= deltaY;
    };
}