angular.module('ss')
    .directive('addSpace', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.after('&nbsp;');
            }
        }
    });

/*bad bad angular (( need space for justify list*/