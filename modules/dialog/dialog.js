angular.module('ss.dialog', [])
    .factory('dialogService', function($rootScope) {
        var instance = {
            showed: false,

            initialize: function(scope) {
                this.scope = scope;
            },

            open: function(data, digest) {
                this.data = data;
                this.showed = true;

                if (digest) {
                    this.scope.$digest();
                }
            },

            close: function() {
                this.data = undefined;
                this.showed = false;
            }
        };

        $rootScope.$on('$locationChangeSuccess', function() {
            instance.close();
        });

        return instance;
    })
    .directive('dialog', function() {
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            templateUrl: 'modules/dialog/dialog.html',
            controller: function($scope, dialogService) {
                dialogService.initialize($scope);
                $scope.dialogService = dialogService;

                $scope.closeOnBgClick = function(event) {
                    if (event.target === event.currentTarget) {
                        dialogService.close();
                    }
                };
            }
        };
    });