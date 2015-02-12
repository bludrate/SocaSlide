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

        function createSlideshow(slideshowData) {
            return new Slideshow(slideshowData);
        }

        function getSlideshow(id) {
            var query = new Parse.Query(Slideshow);
            return query.get(id);
        }

        function saveNewSlideshow(slideshowData) {
            var newSlideshow = this.createSlideshow(slideshowData);

            return newSlideshow.save();
        }

        return {
            createSlideshow: createSlideshow,
            getSlideshow: getSlideshow,
            saveNewSlideshow: saveNewSlideshow
        };
    });