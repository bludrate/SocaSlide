angular.module('ss.photoSelector', ['vkontakteServices'])
    .controller('PhotoSelectorController', PhotoSelectorController);

function PhotoSelectorController($scope, VKPhotos) {
    VKPhotos.getAlbums().then(function(albums){
        $scope.albums = albums;
    });
}