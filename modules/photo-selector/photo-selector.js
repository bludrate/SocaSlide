angular.module('ss.photoSelector', ['vkontakteServices', 'ss.directives', 'ss.services', 'ngRoute'])
    .controller('AlbumsController', AlbumsController)
    .controller('PhotosController', PhotosController)
    .factory('albumData', function(VKPhotos) {
        var systemAlbums = [-6, -7, -15];

        function getData(id) {
            if (systemAlbums.indexOf(id)) {
                VKPhotos.getAlbums();
            } else {
                VKPhotos
            }
        }

        return {};
    });

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

    VKPhotos.getAlbum($routeParams.id).then(function(album) {
        $scope.album = album;
    });
}
