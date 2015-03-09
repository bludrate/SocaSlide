angular.module('ss.playerModal', ['ss.player', 'parseServices', 'ss.services', 'ss.constants', 'ss.dialog'])
    .controller('PlayerModalController', function($scope, slideshowService, selectedPhotos, selectedAudios, slideshowSettingsService, URLS, dialogService) {
        $scope.saveSlideshow = function() {
            slideshowService.saveNewSlideshow({
                frames: selectedPhotos.get(),
                audios: selectedAudios.getIds(),
                settings: slideshowSettingsService.get(),
                author: VK.params.viewer_id
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