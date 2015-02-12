angular.module('ss.player', ['parseServices'])
    .controller('PlayerController', function($scope, slideshowService, $route) {
        slideshowService.getSlideshow($route.current.params.id).then(function(data) {
            console.log(data.get('frames'));
        });
    });