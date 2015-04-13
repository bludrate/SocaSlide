angular.module('ss.photoSelector')
    .controller('PhotosController', PhotosController);

function PhotosController($scope, VKPhotos, selectedPhotos, $routeParams) {
    function togglePhoto(photo) {
        if (photo.selected) {
            selectedPhotos.remove(photo);
        } else {
            selectedPhotos.add(photo);
        }
    }

    $scope.gridSize = 'o';
    $scope.photos = [];

    $scope.togglePhoto = togglePhoto;

    VKPhotos.getAlbumPhotos($routeParams.id).then(function(photos) {
        selectedPhotos.checkAll(photos);
        $scope.photos = photos;
    });

    VKPhotos.getAlbumInfo($routeParams.id).then(function(album) {
        $scope.album = album;
    });
}
