VK.loadParams(window.location.href);

angular.module('ss.constants', [])
    .constant('URLS', {
        app: 'http://vk.com/app4750775_238478875'
    })
    //jscs: disable
    .constant('currentUser', VK.params.viewer_id);
    //jscs: enable
