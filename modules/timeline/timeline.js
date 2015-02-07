angular.module('ss.timeline', ['ss.services'])
    .controller('framesController', function($scope, selectedPhotos) {
        $scope.frames = selectedPhotos.get();

        $scope.removeFrame = function(frame) {
            selectedPhotos.remove(frame);
        }
    });