describe('header active-link directive', function() {
    var element;
    beforeEach(module('ss.header'));

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<a href="/albums" active-link></a>');
        template = $compile(element)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should toggle class active depend on location', inject(function($location, $rootScope) {
        expect(element.hasClass('active')).toBe(false);

        $rootScope.$apply(function() {
            $location.path('/albums');
        });

        expect(element.hasClass('active')).toBe(true);

        $rootScope.$apply(function() {
            $location.path('/');
        });

        expect(element.hasClass('active')).toBe(false);
    }));
});