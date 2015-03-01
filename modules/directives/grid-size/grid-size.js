angular.module('ss.directives', ['ss.gridSizes', 'ss.templates'])
    .directive('gridSize', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                gridSize: '=size'
            },
            templateUrl: "modules/directives/grid-size/grid-size.html",
            controller: function($scope, gridSizes) {
                function changeSize(size) {
                    $scope.gridSize = size;
                }

                $scope.sizes = ['o', 'p', 'q'];
                $scope.names = gridSizes.names;

                $scope.changeSize = changeSize;
            }
        }
    });
