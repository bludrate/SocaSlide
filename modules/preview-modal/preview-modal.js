angular.module('ss.previewModal', ['ss.player', 'parseServices', 'ss.services', 'ss.constants', 'ss.dialog'])
    .controller('PreviewModalController', function($scope, slideshowService, selectedPhotos, selectedAudios, slideshowSettingsService, URLS, dialogService, durationService) {
        $scope.title = '';

        $scope.saveSlideshow = function() {
            slideshowService.saveNewSlideshow({
                frames: selectedPhotos.get(),
                audios: selectedAudios.getIds(),
                settings: slideshowSettingsService.get(),
                author: VK.params.viewer_id,
                title: $scope.title,
                duration: durationService.value()
            }).then(function(slideshow) {
                var link = '#/slideshow/' + slideshow.id;
                dialogService.open({
                    template: 'modules/slideshow-saved-modal/slideshow-saved-modal.html',
                    link: URLS.app + link,
                    previewLink: link
                }, true);
            });
        };
    });