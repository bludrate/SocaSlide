angular.module('ss.slideshowList', ['parseServices', 'ss.dialog', 'vkontakteServices'])
    .directive('slideshowList', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                userId: '@'
            },
            controller: SlideshowListController,
            templateUrl: 'modules/slideshow-list/slideshow-list.html'
        }
    });

function SlideshowListController($scope, slideshowService, dialogService, VKWall) {
    slideshowService.getUserSlideshows($scope.userId)
        .then(function(data) {
            $scope.slideshows = data;
            $scope.$digest();
        });

    $scope.show = function(id) {
        dialogService.open({
            template: 'modules/player-modal/player-modal.html',
            src: id
        });
    };

    $scope.remove = function(slideshow) {
        if (!confirm("Вы верены, что хотите удалить слайдшоу \"" + slideshow.get('title') + '"')) return ;

        slideshowService
            .remove(slideshow)
            .then(function() {
                $scope.slideshows.splice($scope.slideshows.indexOf(slideshow), 1);
                $scope.$digest();
            }, function(response) {
                console.log(response);
                alert('error while deleting slideshow')
            });
    };

    $scope.share = VKWall.postSlideshow;
}