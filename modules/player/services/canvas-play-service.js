angular.module('ss.player')
    .factory('defaultAnimationType', function() {
        function animFunc(currentSlide, currentSlideTime, slideTime, images, cWidth, cHeight) {
            var result = {};

            result[currentSlide] = {};

            if (currentSlideTime < this.hideDuration) {

                if (currentSlide > 0) {
                    var scale = this.timingValue(currentSlideTime + slideTime, slideTime + this.hideDuration, 1.2, this.scale);

                    result[currentSlide - 1] = {
                        opacity: this.timingValue(currentSlideTime, this.hideDuration, 1, 0),
                        scale: scale,
                        x: (cWidth/scale - images[currentSlide - 1].width)/2,
                        y: (cHeight/scale - images[currentSlide - 1].height)/2
                    };
                }

                result[currentSlide].opacity = this.timingValue(currentSlideTime, this.hideDuration, 0, 1);
            }

            result[currentSlide].scale = this.timingValue(currentSlideTime, slideTime + this.hideDuration, 1.2, this.scale);
            result[currentSlide].x = (cWidth/result[currentSlide].scale - images[currentSlide].width)/2;
            result[currentSlide].y = (cHeight/result[currentSlide].scale - images[currentSlide].height)/2;

            return result;
        }

        function timingValue(currentSlideTime, endTime, startValue, endValue) {
            return startValue + currentSlideTime/endTime * (endValue - startValue);
        }

        function init(slideTime) {
            this.hideDuration = slideTime * 0.3;
        }

        return {
            scale: 1.4,

            func: animFunc,
            timingValue: timingValue,
            init: init
        };
    })
    .factory('canvasPlayService', function(defaultAnimationType) {
        var requestAnimationFrameId,
            ctx,
            images,
            startTime,
            currentSlide,
            pausedAt = 0,
            slideTime = 5000,
            instance;

        defaultAnimationType.init(slideTime);

        function setCanvas(canvas) {
            ctx = canvas.getContext('2d');
        }

        function setImages(_images_) {
            images = _images_;
        }

        function render(currentSlideTime) {
            ctx.clearRect(0, 0, instance.cWidth, instance.cHeight);

            var animationObject = defaultAnimationType.func(
                currentSlide,
                currentSlideTime,
                slideTime,
                images,
                instance.cWidth,
                instance.cHeight
            );

            for (var key in animationObject) {
                draw(images[key], animationObject[key]);
            }
        }

        function step(time) {
            var currentTime = (time - startTime);

            if (currentTime < 0) {
                currentTime = 0;
            }

            currentSlide = parseInt(currentTime/slideTime, 10);

            if (currentSlide >= images.length) {
                return false;
            }

            render(currentTime % slideTime);

            requestAnimationFrameId = window.requestAnimationFrame(step);
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
            ctx.drawImage(image, object.x, object.y);
            ctx.restore();
        }

        instance = {
            cWidth: 1280,
            cHeight: 720,
            paused: true,

            setCanvas: setCanvas,
            setImages: setImages,
            play: play,
            pause: pause,
            stop: stop
        };

        return instance;
    });