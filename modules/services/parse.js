angular.module('parse', [])
    .run(function() {
        Parse.initialize("d95PTnwnQvQCj49xf9AUMgXpbSEIl78rVDUg55X0", "MzTSKQkIJFB1qA33Hg2Qzk7UKikiIN75nj9f3PR4");
    })
    .factory('parse', function() {
        return {};
    });