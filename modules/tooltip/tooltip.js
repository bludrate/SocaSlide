angular.module('ss.tooltip', [])
    .factory('tooltipService', function() {
        var $body = angular.element(document.body);
        var element;
        var scope;
        var offsetX = 0;
        var offsetY = -20;
        var instance;

        function onMove(event) {
            element.css({
                top: (event.pageY + offsetY) + 'px',
                left: (event.pageX + offsetX) + 'px'
            });
        }

        function show(data) {
            instance.data = data;
            instance.showed = true;
            $body.on('mousemove', onMove);
            scope.$digest();
            offsetX = -element[0].offsetWidth / 2;
            offsetY = -element[0].offsetHeight - 10;
        }

        function hide() {
            instance.showed = false;
            $body.off('mousemove', onMove);
            scope.$digest();
        }

        function initialze(_element_, _scope_) {
            element = _element_;
            scope = _scope_;
        }

        instance = {
            showed: false,
            show: show,
            hide: hide,
            initialize: initialze
        };

        return instance;
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
