angular.module('ss.services', [])
    .factory('selectedPhotos', function() {
        var photos = [];

        return {
            get: function(index) {
                if (index) {
                    return photos[index];
                } else {
                    return photos;
                }
            },

            set: function(newCollection) {
                photos = newCollection;
            },

            add: function() {
                Array.prototype.push.apply(photos, arguments);
            },

            remove: function() {
                var index;
                for (var i = 0; i < arguments.length; i++) {
                    index = photos.indexOf(arguments[i]);
                    if (index !== -1) {
                        photos.splice(index, 1);
                    }
                }
            }
        };
    });