angular.module('ss.player')
    .directive('playerCanvas', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                images: '=',
                slideTime: '@'
            },
            templateUrl: 'modules/player/directives/player-canvas/player-canvas.html',
            controller: PlayerCanvasController,

            link: function(scope, element) {
                scope.canvasContext = element[0].getContext('2d');
            }
        };
    })
    .factory('defaultPlayType', function() {
        return {
            func: function(currentSlide, currentSlideTime, slideTime, images, cWidth, cHeight) {
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
            },

            timingValue: function(currentSlideTime, endTime, startValue, endValue) {
                return startValue + currentSlideTime/endTime * (endValue - startValue);
            },

            init: function(slideTime) {
                this.hideDuration = slideTime * 0.3;
            },

            scale: 1.4
        };
    });

function PlayerCanvasController($scope, defaultPlayType) {
    var self = this;
    $scope.cWidth = 1280;
    $scope.cHeight = 720;

    $scope.$watch('images', init);

    function init() {
        self.pausedAt = 0;
        self.played = false;
        self.slideTime = $scope.slideTime || 3000;

        defaultPlayType.init(self.slideTime);

        if ($scope.images && $scope.images.length) {
            self.play();
        }
    }

    function render(currentSlideTime) {
        $scope.canvasContext.clearRect(0, 0, $scope.cWidth, $scope.cHeight);

        var animationObject = defaultPlayType.func(
            self.currentSlide,
            currentSlideTime,
            self.slideTime,
            $scope.images,
            $scope.cWidth,
            $scope.cHeight
        );

        for (var key in animationObject) {
            draw($scope.images[key], animationObject[key]);
        }
    }

    function step(time) {
        var currentTime = (time - self.startTime);

        self.currentSlide = parseInt(currentTime/self.slideTime, 10);

        if (self.currentSlide >= $scope.images.length) {
            return false;
        }

        render(currentTime % self.slideTime);

        self.requestAnimationFrameId = window.requestAnimationFrame(step.bind(self));
    }

    function pause() {
        if (!self.played)
            return false;

        window.cancelAnimationFrame(self.requestAnimationFrameId);
        self.pausedAt = performance.now() - self.startTime;
        self.played = false;
    }

    function stop() {
        window.cancelAnimationFrame(self.requestAnimationFrameId);
        self.paused = 0;
        self.played = false;
    }

    function play() {
        if (self.played)
            return false;

        self.startTime = performance.now() - self.pausedAt;
        window.requestAnimationFrame(step.bind(self));
        self.played = true;
    }

    function draw(image, object){
        $scope.canvasContext.save();
        for (var key in object) {
            switch (key) {
                case 'opacity':
                    $scope.canvasContext.globalAlpha = object.opacity;
                    break;
                case 'scale':
                    $scope.canvasContext.scale(object.scale, object.scale);
                    break;
            }
        }
        $scope.canvasContext.drawImage(image, object.x, object.y);
        $scope.canvasContext.restore();
    }

    angular.extend(self, {
        play: play,
        pause: pause,
        stop: stop
    });


}