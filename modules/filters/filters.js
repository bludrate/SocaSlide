angular.module('ss.filters', ['gridSizes'])
    .filter('photoSrc', function(gridSizes) {
        function searchSize(sizes, type) {
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].type === type) {
                    return sizes[i];
                }
            }
        }

        return function(sizes, type) {
            if (!sizes || !type) {
                return ;
            }

            var i = gridSizes.types.indexOf(type);

            if (i === -1) {
                return ;
            }

            var size;
            for(; i >= 0; i-- ) {
                size = searchSize(sizes, gridSizes.types[i]);
                if (size) {
                    return size.src;
                }
            }
        };
    });