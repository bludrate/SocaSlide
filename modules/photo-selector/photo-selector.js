angular.module('ss.photoSelector', ['vkontakteServices'])
    .factory('selector', function(VKPhotos) {
        return {
            test: function() {
                VKPhotos.getAlbums();
            }
        };
    });