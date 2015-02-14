describe('player-canvas directive', function() {
    var scope, controller, template;

    beforeEach(module('ss.player'));
    beforeEach(inject(function($rootScope, $compile) {
        var element = angular.element('<player-canvas images="images"></player-canvas>');
        scope = $rootScope.$new();
        scope.images = [new Image(200, 200), new Image(200,200)];
        template = $compile(element)(scope);
        $rootScope.$digest();
        controller = element.controller('playerCanvas');
        scope = element.isolateScope() || element.scope();
    }));

    it('should define canvas context', function() {
        expect(scope.canvasContext).not.toBeUndefined();
    });

    describe('play', function() {
        it('should change played to true', function() {
            controller.play();

            expect(controller.played).toBe(true);
        });

        it('should call window.requestAnimationFrame', function() {
            spyOn(window, 'requestAnimationFrame');
            controller.played = false;
            controller.play();

            expect(window.requestAnimationFrame).toHaveBeenCalled();
        });

        it('should set start time', function() {
            var prevValue = controller.startTime;
            controller.played = false;
            controller.play();

            expect(controller.startTime).not.toBe(prevValue);
        });
    });

    describe('pause', function() {
        it('should set played to false', function() {
            controller.pause();

            expect(controller.played).toBe(false);
        });

        it('should remember paused time', function() {
            var prevValue = controller.pausedAt;

            controller.play();

            controller.pause();

            expect(controller.pausedAt).not.toBe(prevValue);
        });

        it('should cancel requestAnimationFrame', function() {
            spyOn(window, 'cancelAnimationFrame');

            controller.pause();

            expect(window.cancelAnimationFrame);
        })
    });

    describe('stop', function() {
        it('should set played to false', function() {
            controller.stop();

            expect(controller.played).toBe(false);
        });

        it('should reset paused time', function() {
            var prevValue = controller.pausedAt;

            controller.stop();

            expect(controller.pausedAt).toBe(0);
        });

        it('should cancel requestAnimationFrame', function() {
            spyOn(window, 'cancelAnimationFrame');

            controller.stop();

            expect(window.cancelAnimationFrame);
        })
    });
});