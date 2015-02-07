angular.module('ss.photoSelector', ['vkontakteServices', 'ss.filters', 'ngRoute', 'ss.directives'])
    .controller('AlbumsController', AlbumsController)
    .controller('PhotosController', PhotosController);

function AlbumsController($scope, VKPhotos) {
    $scope.gridSize = 'p';
    VKPhotos.getAlbums().then(function(albums){
        $scope.albums = albums;
    });
}

function PhotosController($scope, VKPhotos, $route) {
    VKPhotos.getAlbumPhotos($route.current.params.id).then(function(photos){
        $scope.photos = photos;
    });
    $scope.gridSize = 'o';
}