angular.module('ss.filters', ['ss.gridSizes'])
    .filter('photoSrc', function(gridSizes) {
        var retina = window.devicePixelRatio > 1;

        /**
         * get closest available image size
         * @param sizes {Array}
         * @param type {String}
         * @returns {Object}
         */
        function closestSize(sizes, type) {
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].type === type) {
                    return sizes[i];
                }
            }
        }

        /**
         * Return 2x size type of image
         * @param type {String}
         * @returns {String}
         */
        function retinaType(type) {
            switch (type) {
                case 's': return 'm';
                case 'm': return 'p';
                case 'o': return 'p';
                case 'p': return 'r';
                case 'q': return 'x';
                case 'x': return 'z';
                case 'y': return 'z';
                case 'r': return 'z';
                default: return 'z';
            }
        }

        return function(sizes, type) {
            if (!sizes || !type) {
                return '';
            }

            if (retina) {
                type = retinaType(type);
            }

            var i = gridSizes.types.indexOf(type);

            if (i === -1) {
                return '';
            }

            var size;
            for (; i >= 0; i--) {
                size = closestSize(sizes, gridSizes.types[i]);
                if (size) {
                    return size.src;
                }
            }
        };
    })

    .filter('timeFormatter', function() {
        function addZero(number) {
            number = number.toString();
            return number.length > 1 ? number : '0' + number;
        }

        return function(time, type) {
            if (type === 'ms') {
                time /= 1000;
            }

            var minutes = parseInt(time / 60, 10);
            var seconds = addZero(time % 60);

            return minutes + ':' + seconds;
        };
    });
