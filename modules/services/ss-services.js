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
                for(var i = 0; i < arguments.length; i++) {
                    arguments[i].selected = true;
                }
            },

            remove: function() {
                var index;
                for (var i = 0; i < arguments.length; i++) {
                    index = photos.indexOf(arguments[i]);
                    if (index !== -1) {
                        photos.splice(index, 1);
                    }
                    arguments[i].selected = false;
                }
            }
        };
    })

    .factory('selectedAudios', function() {
        var audios = [];

        return {
            get: function(index) {
                if (index) {
                    return audios[index];
                } else {
                    return audios;
                }
            },

            set: function(newCollection) {
                audios = newCollection;
            },

            add: function() {
                Array.prototype.push.apply(audios, arguments);
                for(var i = 0; i < arguments.length; i++) {
                    arguments[i].selected = true;
                }
            },

            remove: function() {
                var index;
                for (var i = 0; i < arguments.length; i++) {
                    index = audios.indexOf(arguments[i]);
                    if (index !== -1) {
                        audios.splice(index, 1);
                    }
                    arguments[i].selected = false;
                }
            }
        };
    });