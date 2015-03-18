angular.module('ss.player')
    .factory('defaultAnimationType', function() {
        function drawImageSize(image, cWidth, cHeight, scale) {
            var factor = 1,
                width,
                height;

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

        function animFunc(currentSlide, currentSlideTime, slideDuration, images, cWidth, cHeight) {
            var result = {};
            var scaleSize, scale;

            result[currentSlide] = {
                sx: 0,
                sy: 0
            };

            if (currentSlideTime < this.hideDuration) {

                if (currentSlide > 0) {
                    scale = this.timingValue(currentSlideTime + slideDuration, slideDuration + this.hideDuration, 1, this.scale);
                    var prevIndex = currentSlide - 1;

                    scaleSize = drawImageSize(images[prevIndex], cWidth, cHeight, scale);

                    result[prevIndex] = {
                        opacity: this.timingValue(currentSlideTime, this.hideDuration, 1, 0),
                        sx: 0,
                        sy: 0,
                        x: (cWidth - scaleSize.width) / 2,
                        y: (cHeight - scaleSize.height) / 2,
                        width: images[prevIndex].width,
                        height: images[prevIndex].height,
                        scaleWidth: scaleSize.width,
                        scaleHeight: scaleSize.height
                    };
                }

                result[currentSlide].opacity = this.timingValue(currentSlideTime, this.hideDuration, 0, 1);
            }

            scale = this.timingValue(currentSlideTime, slideDuration + this.hideDuration, 1, this.scale);
            scaleSize = drawImageSize(images[currentSlide], cWidth, cHeight, scale);

            result[currentSlide].x = (cWidth - scaleSize.width) / 2;
            result[currentSlide].y = (cHeight - scaleSize.height) / 2;
            result[currentSlide].width = images[currentSlide].width;
            result[currentSlide].height = images[currentSlide].height;
            result[currentSlide].scaleWidth = scaleSize.width;
            result[currentSlide].scaleHeight = scaleSize.height;

            return result;
        }

        function timingValue(currentSlideTime, endTime, startValue, endValue) {
            return startValue + currentSlideTime/endTime * (endValue - startValue);
        }

        function init(slideDuration) {
            this.hideDuration = slideDuration * 0.3;
        }

        return {
            scale: 1.2,

            func: animFunc,
            timingValue: timingValue,
            init: init
        };
    })
    .factory('canvasPlayService', function($rootScope, defaultAnimationType) {
        var requestAnimationFrameId,
            ctx,
            images,
            startTime,
            pausedAt = 0,
            slideDuration = 5000,
            instance,
            scope;

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

            var currentSlide = parseInt(instance.currentTime/slideDuration, 10);
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
            if (instance.paused)
                return false;

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
            if (!instance.paused)
                return false;

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

        function draw(image, object){
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

            ctx.drawImage(image, object.sx, object.sy, object.width, object.height, object.x, object.y, object.scaleWidth, object.scaleHeight);
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