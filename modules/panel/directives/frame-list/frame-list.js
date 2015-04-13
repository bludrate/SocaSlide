angular.module('ss.panel')
    .directive('frameList', function() {
        return {
            restrict: 'E',
            replace: true,
            controller: frameListController,
            templateUrl: 'modules/panel/directives/frame-list/frame-list.html',
            link: initPanelScrollGallery
        };
    });

function initPanelScrollGallery(scope, element) {
    var wrap = element[0].querySelector('.frame-list__wrap');

    scope.disabled = wrap.scrollWidth === wrap.offsetWidth;

    scope.$watch('frames.length', update);
    scope.prev = prev;
    scope.next = next;

    wrap.addEventListener('scroll', onScroll);
    wrap.addEventListener('wheel', onMouseWheel);

    function update(currentLength, prevLength) {
        if (prevLength < currentLength) {
            wrap.scrollLeft = 99999;
        }

        scope.disabled = wrap.scrollWidth === wrap.offsetWidth;

        checkButtons();
    }

    function onScroll() {
        checkButtons();

        scope.$digest();
    }

    function onMouseWheel(event) {
        var deltaX = event.wheelDeltaX ? event.wheelDeltaX : event.wheelDeltaY;
        var oldValue = wrap.scrollLeft;

        if (isNaN(deltaX)) {
            deltaX = 0;
        }

        wrap.scrollLeft -= deltaX;

        if (wrap.scrollLeft !== oldValue) {
            event.preventDefault();
        }
    }

    function next() {
        wrap.scrollLeft += 200;

        checkButtons();
    }

    function prev() {
        wrap.scrollLeft -= 200;

        checkButtons();
    }

    function checkButtons() {
        scope.prevDisabled = wrap.scrollLeft === 0;

        scope.nextDisabled = wrap.scrollLeft >= wrap.scrollWidth - wrap.offsetWidth
    }
}

function frameListController($scope, selectedPhotos) {
    $scope.frames = selectedPhotos.get();

    $scope.placeholders = new Array(6);

    $scope.removeFrame = function(frame) {
        selectedPhotos.remove(frame);
    };
}
