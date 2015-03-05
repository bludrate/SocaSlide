angular.module('ss.dialog', [])
    .factory('dialogService', function() {
        return {
            showed: false,
            open: function(data) {
                this.data = data;
                this.showed = true;
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
                $scope.dialogService = dialogService;
            }
        };
    });