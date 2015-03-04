angular.module('ss.tooltip', [])
    .factory('tooltipService', function() {
        var $body = angular.element(document.body);
        var element;
        var scope;
        var offsetX = 0;
        var offsetY = -20;

        function onMove(event) {
            element.css({
                top: (event.pageY + offsetY) + 'px',
                left: (event.pageX + offsetX) + 'px'
            });
        }

        return {
            showed: false,
            show: function(data) {
                this.data = data;
                this.showed = true;
                $body.on('mousemove', onMove);
                scope.$digest();
                offsetX = -element[0].offsetWidth / 2;
                offsetY = -element[0].offsetHeight - 10;
            },

            hide: function() {
                this.showed = false;
                $body.off('mousemove', onMove);
                scope.$digest();
            },

            initialize: function(_element_, _scope_) {
                element = _element_;
                scope = _scope_;
            }
        };
    })
    .directive('tooltipPopup', function(tooltipService) {
        return {
            restrict: 'E',
            templateUrl: 'modules/tooltip/tooltip.html',
            replace: true,
            scope: true,
            link: function(scope, element) {
                tooltipService.initialize(element, scope);
                scope.tooltipService = tooltipService;
            }
        };
    })
    .directive('tooltip', function(tooltipService) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('mouseenter', function() {
                        tooltipService.show({
                            message: attrs.tooltip
                        });
                    })
                    .on('mouseleave', function() {
                        tooltipService.hide();
                    });
            }
        };
    });