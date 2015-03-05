angular.module('ss.settings', ['ss.dialog'])
    .factory('slideshowSettingsService', function() {
        var data = {
            slideDuration: 5
        };

        return {
            get: function() {
                return data;
            },
            save: function(_data_) {
                angular.extend(data, _data_);
            }
        };
    })
    .controller('SlideshowSettingsController', function($scope, slideshowSettingsService) {
        $scope.data = angular.copy(slideshowSettingsService.get());

        $scope.save = function() {
            slideshowSettingsService.save($scope.data);
        };
    });