angular.module('ss.previewModal', ['ss.player', 'parseServices', 'ss.services', 'ss.constants', 'ss.dialog'])
    .controller('PreviewModalController', PreviewModalController);

function PreviewModalController(
    $scope,
    currentUser,
    slideshowService,
    selectedPhotos,
    selectedAudios,
    slideshowSettingsService,
    dialogService,
    durationService
) {
    function saveSlideshow() {
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
    }

    $scope.title = '';

    $scope.saveSlideshow = saveSlideshow;
}
