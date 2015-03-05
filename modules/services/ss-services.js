angular.module('ss.services', [])
    .factory('selectedPhotos', function() {
        var photos = [];

        return {
            size: function() {
                return photos.length;
            },
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

            add: function(photo) {
                var existIndex = this.exist(photo);
                if (existIndex === -1) {
                    photos.push(photo);
                } else {
                    if (photos[existIndex] !== photo) {
                        photos[existIndex] = photo;
                    }
                }

                photo.selected = true;
            },

            addAll: function(photoArray) {
                for(var i = 0; i < photoArray.length; i++) {
                    this.add(photoArray[i]);
                }
            },

            remove: function(photo) {
                var index = this.exist(photo);
                if (index !== -1) {
                    photos.splice(index, 1);
                }
                photo.selected = false;
            },

            removeAll: function(photoArray) {
                for (var i = 0; i < photoArray.length; i++) {
                    this.remove(photoArray[i])
                }
            },

            check: function(photo) {
                var index = this.exist(photo);
                if (index !== -1) {
                    if (photos[index] !== photo) {
                        photos[index] = photo;
                    }

                    photo.selected = true;
                }
            },

            checkAll: function(photoArray) {
                for (var i = 0; i < photoArray.length; i++) {
                    this.check(photoArray[i])
                }
            },

            exist: function(_photo_) {
                for (var i = 0; i < photos.length; i++) {
                    if (_photo_.id === photos[i].id) {
                        return i;
                    }
                }

                return -1;
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

            getIds: function() {
                return audios.map(function(audio) {
                    return audio.id
                });
            },

            add: function(audio) {
                //temporary
                if (audios.length) {
                    this.remove(audios[0]);
                }
                audios.push(audio);

                //var existIndex = this.exist(audio);
                //
                //if (existIndex === -1) {
                //    audios.push(audio);
                //} else {
                //    if (audios[existIndex] !== audio) {
                //        audios[existIndex] = audio;
                //    }
                //
                //}

                audio.selected = true;
            },

            remove: function(audio) {
                var index = this.exist(audio);
                if (index !== -1) {
                    audios.splice(index, 1);
                }

                audio.selected = false;
            },

            exist: function(_audio_) {
                for (var i = 0; i < audios.length; i++) {
                    if (_audio_.id === audios[i].id) {
                        return i;
                    }
                }

                return -1;
            }
        };
    });