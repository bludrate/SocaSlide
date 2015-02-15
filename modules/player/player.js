angular.module('ss.player', ['parseServices', 'ss.templates', 'ss.filters'])
    .controller('PlayerController', function($scope, slideshowService, $route, $filter) {
        slideshowService.getSlideshow($route.current.params.id).then(function(data) {
            var frames = data.get('frames'),
                images = [],
                image;

            for (var i = 0; i < frames.length; i++) {
                image = new Image();
                images.push(image);
                image.src = $filter('photoSrc')(frames[i].sizes, 'w');
            }

            setTimeout(function() {
                $scope.$apply(function(){
                    $scope.images = images;
                });
            }, 1000);
        });

        $scope.fullScreen = function(event) {
            event.currentTarget.webkitRequestFullScreen();
        }
    });