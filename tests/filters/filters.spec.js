describe('ss.filters', function() {
    var $filter;
    beforeEach(function(){
        module('ss.filters');
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });

    describe('photoSrc filter', function() {
        var sizes = [{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c405\/-ewBamQj0AY.jpg","width":75,"height":42,"type":"s"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c406\/NR_05bxfdFs.jpg","width":130,"height":73,"type":"m"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c407\/NS9RcFaz_kc.jpg","width":604,"height":340,"type":"x"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c408\/-ZwMXJgMzVA.jpg","width":807,"height":454,"type":"y"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c409\/KJSftcl8UbM.jpg","width":1280,"height":720,"type":"z"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c40a\/90mmAh3KfYQ.jpg","width":130,"height":87,"type":"o"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c40b\/yzOZWDnnMkw.jpg","width":200,"height":133,"type":"p"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c40c\/RuK-y7oXlw0.jpg","width":320,"height":213,"type":"q"},{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c40d\/zx9JQlx_dcM.jpg","width":510,"height":340,"type":"r"}];

        it('should return nearest available src', function() {
            expect($filter('photoSrc')(sizes, 's')).toBe("http:\/\/cs619818.vk.me\/v619818875\/1c405\/-ewBamQj0AY.jpg");
        });

        it('should return undefined on wrong parameters', function() {
            expect($filter('photoSrc')()).toBeUndefined();
            expect($filter('photoSrc')([])).toBeUndefined();
            expect($filter('photoSrc')(sizes, 'some')).toBeUndefined();
        });

        it('should return undefined if nothig was found', function() {
            expect($filter('photoSrc')([{"src":"http:\/\/cs619818.vk.me\/v619818875\/1c405\/-ewBamQj0AY.jpg","width":75,"height":42,"type":"m"}], 's')).toBeUndefined();
        })
    });
});