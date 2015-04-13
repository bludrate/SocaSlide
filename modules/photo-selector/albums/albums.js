angular.module('ss.photoSelector')
    .controller('AlbumsController', AlbumsController);

function AlbumsController($scope, VKPhotos, selectedPhotos) {
    function add(album) {
        VKPhotos.getAlbumPhotos(album.id).then(function(photos) {
            selectedPhotos.addAll(photos);
        });
    }

    $scope.albums = [];
    $scope.sizes = ['o', 'p', 'q'];
    $scope.gridSize = 'p';

    $scope.add = add;

    VKPhotos.getAlbums().then(function(albums) {
        $scope.albums = albums;
    });
}