angular.module('ss.header', ['ss.photoSelector'])
    .controller('HeaderController', HeaderController);

function HeaderController($scope, selector) {
    selector.test();
    $scope.text = "Hello World!!!";
}