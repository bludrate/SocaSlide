angular.module('ss.photoSelector', ['vkontakteServices', 'ss.directives', 'ss.services', 'ngRoute'])
    .controller('AlbumsController', AlbumsController)
    .controller('PhotosController', PhotosController);

function AlbumsController($scope, VKPhotos) {
    $scope.gridSize = 'p';
    VKPhotos.getAlbums().then(function(albums){
        $scope.albums = albums;
    });
}

function PhotosController($scope, VKPhotos, selectedPhotos, $routeParams) {
    VKPhotos.getAlbumPhotos($routeParams.id).then(function(photos){
        $scope.photos = photos;
    });
    $scope.gridSize = 'o';

    $scope.togglePhoto = function(photo) {
        if (photo.selected) {
            selectedPhotos.remove(photo);
        } else {
            selectedPhotos.add(photo);
        }
    }
}