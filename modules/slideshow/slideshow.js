angular.module('ss.slideshow', [])
    .controller('SlideshowController', function($scope, $route) {
        $scope.src = $route.current.params.id;
    });
