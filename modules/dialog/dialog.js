angular.module('ss.dialog', [])
    .factory('dialogService', function($rootScope) {
        return {
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