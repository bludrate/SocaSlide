angular.module('ss')
    .controller('SlideshowSavedController', function($scope, VKWall) {
        $scope.share = VKWall.postSlideshow;
    });