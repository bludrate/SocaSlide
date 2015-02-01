angular.module('ss.filters', [])
    .filter('photoSrc', function() {
        var allSizes = ['s', 'm', 'x', 'o', 'p', 'q', 'y', 'z', 'w'];
        return function(sizes, size) {
            if (!sizes || !size) {
                return ;
            }

            var i = allSizes.indexOf(size);

            if (i === -1) {
                return ;
            }

            for(; i >= 0; i-- ) {
                if (sizes[i].type === size) {
                    return sizes[i].src;
                }
            }
        };
    });