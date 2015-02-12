angular.module('ss.timeline', ['ss.services', 'parseServices'])
    .controller('framesController', function($scope, $location, $rootScope, selectedPhotos, slideshowService) {
        $scope.frames = selectedPhotos.get();

        $scope.removeFrame = function(frame) {
            selectedPhotos.remove(frame);
        };

        $scope.saveSlideshow = function() {
            slideshowService.saveNewSlideshow({
                frames: $scope.frames
            }).then(function(slideshow) {
                $rootScope.$apply(function() {
                    var path = '/slideshow/' + slideshow.id;
                    $location.path(path);
                });
            });
        };
    });