angular.module('ss.player')
    .directive('playerCanvas', function(canvasPlayService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                images: '=',
                slideTime: '@'
            },
            controller: function($scope) {
                $scope.cWidth = canvasPlayService.cWidth;
                $scope.cHeight = canvasPlayService.cHeight;
            },
            template: '<canvas width="{{cWidth}}" height="{{cHeight}}"></canvas>',

            link: function(scope, element) {
                canvasPlayService.setCanvas(element[0]);
            }
        };
    });