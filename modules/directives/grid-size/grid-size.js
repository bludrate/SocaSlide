angular.module('ss.directives', ['gridSizes', 'templates'])
    .directive('gridSize', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                gridSize: '=size',
                sizes: '@'
            },
            templateUrl: "modules/directives/grid-size/grid-size.html",
            controller: function($scope, gridSizes) {
                $scope.names = gridSizes.names;
            }
        }
    });
