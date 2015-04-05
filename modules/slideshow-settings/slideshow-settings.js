angular.module('ss.settings', ['ss.services'])
    .controller('SlideshowSettingsController', function($scope, slideshowSettingsService) {
        $scope.data = angular.copy(slideshowSettingsService.get());

        $scope.save = function() {
            slideshowSettingsService.save($scope.data);
        };
    });
