angular.module('ss.timeline', ['ss.services', 'parseServices'])
    .controller('framesController', function($scope, selectedPhotos, slideshowService) {
        $scope.frames = selectedPhotos.get();

        $scope.removeFrame = function(frame) {
            selectedPhotos.remove(frame);
        };

        $scope.saveSlideshow = function() {
            slideshowService.saveNewSlideshow({
                frames: $scope.frames
            });
        };
    });