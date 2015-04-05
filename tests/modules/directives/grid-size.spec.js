describe('grid-size directive', function() {
    var scope;
    var controller;
    var template;

    beforeEach(module('ss.directives'));
    beforeEach(inject(function($rootScope, $compile) {
        var element = angular.element('<grid-size size="gridSize"></grid-size>');
        template = $compile(element)($rootScope.$new());
        $rootScope.$digest();
        controller = element.controller();
        scope = element.isolateScope() || element.scope();
    }));

    it('should assign size names', inject(function(gridSizes) {
        expect(scope.names).toBe(gridSizes.names);
    }));
});
