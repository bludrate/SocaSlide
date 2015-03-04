angular.module('ss')
    .value('breadcrumbsConfig', {
        'create.album': [
            {
                'name': 'Альбомы',
                'link': 'create/albums/'
            },

            {
                'name': 'Фотогорафии'
            }
        ]
    })
    .directive('breadcrumbs', function($route, breadcrumbsConfig, $location) {
        return {
            templateUrl: 'modules/directives/breadcrumbs/breadcrumbs.html',
            controller: function($scope, $rootScope) {
                $scope.breadcrumbs = breadcrumbsConfig[$route.current.segment];

                $rootScope.$on('$routeChangeSuccess', function() {
                    $scope.breadcrumbs = breadcrumbsConfig[$route.current.segment];
                });
            }
        };
    });