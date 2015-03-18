angular.module('ss.previewModal', ['ss.player', 'parseServices', 'ss.services', 'ss.constants', 'ss.dialog'])
    .controller('PreviewModalController', function($scope, currentUser, slideshowService, selectedPhotos, selectedAudios, slideshowSettingsService, URLS, dialogService, durationService) {
        $scope.title = '';

        $scope.saveSlideshow = function() {
            slideshowService.saveNew({
                frames: selectedPhotos.get(),
                audios: selectedAudios.getIds(),
                settings: slideshowSettingsService.get(),
                author: currentUser,
                title: $scope.title,
                duration: durationService.value(),
                cover: selectedPhotos.get()[0]
            }).then(function(slideshow) {
                dialogService.open({
                    template: 'modules/slideshow-saved-modal/slideshow-saved-modal.html',
                    slideshow: slideshow
                }, true);
            });
        };
    });