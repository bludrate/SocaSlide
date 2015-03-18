angular.module('parseServices', [])
    .constant('config', {
        appId: "d95PTnwnQvQCj49xf9AUMgXpbSEIl78rVDUg55X0",
        JSKey: "MzTSKQkIJFB1qA33Hg2Qzk7UKikiIN75nj9f3PR4"
    })
    .run(function(config) {
        Parse.initialize(config.appId, config.JSKey);
    })
    .factory('slideshowService', function() {
        var Slideshow = Parse.Object.extend('Slideshow');

        function create(slideshowData) {
            return new Slideshow(slideshowData);
        }

        function getSlideshow(id) {
            var query = new Parse.Query(Slideshow);
            return query.get(id);
        }

        function remove(slideshow) {
            return slideshow.destroy();
        }

        function saveNew(slideshowData) {
            var newSlideshow = this.create(slideshowData);

            return newSlideshow.save();
        }

        function getUserSlideshows(userId) {
            var query = new Parse.Query(Slideshow);
            query.equalTo('author', userId);
            query.select('title', 'cover', 'duration');
            return query.find();
        }

        return {
            create: create,
            getSlideshow: getSlideshow,
            saveNew: saveNew,
            remove: remove,
            getUserSlideshows: getUserSlideshows
        };
    });