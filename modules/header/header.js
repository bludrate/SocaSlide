angular.module('ss.header', ['vkontakteServices'])
    .controller('HeaderController', function($scope, VKUser) {
        VKUser.getInfo().then(function(data) {
            //jscs: disable
            $scope.firstName = data.first_name;
            $scope.lastName = data.last_name;
            //jscs: enable
        });
    });
