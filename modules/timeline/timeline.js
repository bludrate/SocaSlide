angular.module('ss.timeline', ['ss.services', 'parseServices', 'ss.filters'])
    .controller('FramesController', function($scope, $location, $rootScope, selectedPhotos, slideshowService, selectedAudios) {
        $scope.frames = selectedPhotos.get();
        $scope.audios = selectedAudios.get();

        $scope.removeFrame = function(frame) {
            selectedPhotos.remove(frame);
        };

        $scope.removeAudio = function(audio) {
            selectedAudios.remove(audio);
        };

        $scope.saveSlideshow = function() {
            slideshowService.saveNewSlideshow({
                frames: $scope.frames,
                audios: $scope.audios
            }).then(function(slideshow) {
                $rootScope.$apply(function() {
                    var path = '/slideshow/' + slideshow.id;
                    $location.path(path);
                });
            });
        };
    });