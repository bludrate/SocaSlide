angular.module('ss.player')
    .factory('defaultAnimationType', function() {
        /**
         * calculate image width and height to fit canvas size
         * @param image {Image}
         * @param cWidth {Number}
         * @param cHeight {Number}
         * @param scale {Number}
         * @returns {{width: number, height: number}}
         */
        function drawImageSize(image, cWidth, cHeight, scale) {
            var factor = 1;
            var width;
            var height;

            if (image.width > cWidth) {
                width = cWidth;
                factor = cWidth / image.width;
            }

            if (image.height * factor > cHeight) {
                height = cHeight;
                factor = cHeight / image.height;
                width = factor * image.width;
            } else {
                height = image.height;
                width = image.width;
            }

            return {
                width: width * scale,
                height: height * scale
            };
        }

        /**
         * calculate images draw properties depends on time
         * @param currentSlide {Number}
         * @param currentSlideTime {Number}
         * @param slideDuration {Number}
         * @param images {Array}
         * @param cWidth {Number}
         * @param cHeight {Number}
         * @returns {Object}
         */
        function animateFunction(currentSlide, currentSlideTime, slideDuration, images, cWidth, cHeight) {
            var result = {};
            var scaledSize;
            var scale;

            result[currentSlide] = {
                sx: 0,
                sy: 0
            };

            if (currentSlideTime < this.hideDuration) {

                if (currentSlide > 0) {
                    var prevIndex = currentSlide - 1;

                    scale = this.timingValue(
                        currentSlideTime + slideDuration,
                        slideDuration + this.hideDuration,
                        1,
                        this.scale
                    );
                    scaledSize = drawImageSize(images[prevIndex], cWidth, cHeight, scale);

                    result[prevIndex] = {
                        opacity: this.timingValue(currentSlideTime, this.hideDuration, 1, 0),
                        sx: 0,
                        sy: 0,
                        x: (cWidth - scaledSize.width) / 2,
                        y: (cHeight - scaledSize.height) / 2,
                        width: images[prevIndex].width,
                        height: images[prevIndex].height,
                        scaleWidth: scaledSize.width,
                        scaleHeight: scaledSize.height
                    };
                }

                result[currentSlide].opacity = this.timingValue(currentSlideTime, this.hideDuration, 0, 1);
            }

            scale = this.timingValue(currentSlideTime, slideDuration + this.hideDuration, 1, this.scale);
            scaledSize = drawImageSize(images[currentSlide], cWidth, cHeight, scale);

            result[currentSlide].x = (cWidth - scaledSize.width) / 2;
            result[currentSlide].y = (cHeight - scaledSize.height) / 2;
            result[currentSlide].width = images[currentSlide].width;
            result[currentSlide].height = images[currentSlide].height;
            result[currentSlide].scaleWidth = scaledSize.width;
            result[currentSlide].scaleHeight = scaledSize.height;

            return result;
        }

        function timingValue(currentSlideTime, endTime, startValue, endValue) {
            return startValue + currentSlideTime / endTime * (endValue - startValue);
        }

        function init(slideDuration) {
            this.hideDuration = slideDuration * 0.3;
        }

        return {
            scale: 1.2,

            func: animateFunction,
            timingValue: timingValue,
            init: init
        };
    })
    .factory('canvasPlayService', function($rootScope, defaultAnimationType) {
        var requestAnimationFrameId;
        var ctx; //canvas context
        var images;
        var startTime;
        var pausedAt = 0;
        var slideDuration = 5000;
        var instance;
        var scope;

        defaultAnimationType.init(slideDuration);

        function setCanvas(canvas) {
            ctx = canvas.getContext('2d');
        }

        function initialize(_images_, playerScope, settings) {
            images = _images_;
            scope = playerScope;
            slideDuration = settings.slideDuration * 1000 || slideDuration;
        }

        function render() {
            if (instance.currentTime < 0) {
                instance.currentTime = 0;
            }

            var currentSlide = parseInt(instance.currentTime / slideDuration, 10);
            var currentSlideTime = instance.currentTime % slideDuration;

            if (currentSlide >= images.length) {
                return false;
            }

            ctx.clearRect(0, 0, instance.cWidth, instance.cHeight);

            var animationObject = defaultAnimationType.func(
                currentSlide,
                currentSlideTime,
                slideDuration,
                images,
                instance.cWidth,
                instance.cHeight
            );

            for (var key in animationObject) {
                draw(images[key], animationObject[key]);
            }

            return true;
        }

        function step(time) {
            instance.currentTime = (time - startTime);

            if (render()) {
                scope.$broadcast('playProgress', instance.currentTime);
                requestAnimationFrameId = window.requestAnimationFrame(step);
            } else {
                scope.$broadcast('playEnd');
            }
        }

        function pause() {
            if (instance.paused) {
                return false;
            }

            window.cancelAnimationFrame(requestAnimationFrameId);
            pausedAt = performance.now() - startTime;
            instance.paused = true;
        }

        function stop() {
            ctx.clearRect(0, 0, instance.cWidth, instance.cHeight);
            window.cancelAnimationFrame(requestAnimationFrameId);
            pausedAt = 0;
            instance.paused = true;
        }

        function play() {
            if (!instance.paused) {
                return false;
            }

            startTime = performance.now() - pausedAt;
            window.requestAnimationFrame(step);
            instance.paused = false;
        }

        function destroy() {
            stop();
            images.length = 0;
        }

        function rewind(time) {
            instance.currentTime = time;
            pausedAt = time;
            render();
        }

        function draw(image, object) {
            ctx.save();
            for (var key in object) {
                switch (key) {
                    case 'opacity':
                        ctx.globalAlpha = object.opacity;
                        break;
                    case 'scale':
                        ctx.scale(object.scale, object.scale);
                        break;
                }
            }

            ctx.drawImage(
                image,
                object.sx,
                object.sy,
                object.width,
                object.height,
                object.x,
                object.y,
                object.scaleWidth,
                object.scaleHeight
            );

            ctx.restore();
        }

        instance = {
            cWidth: 1280,
            cHeight: 720,
            paused: true,
            destroy: destroy,
            setCanvas: setCanvas,
            initialize: initialize,
            play: play,
            pause: pause,
            stop: stop,
            rewind: rewind,
            currentTime: 0
        };

        return instance;
    });
