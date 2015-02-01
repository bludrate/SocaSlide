angular.module('ss.header', [])
    .controller('HeaderController', HeaderController);

function HeaderController($scope) {
    $scope.text = "Hello World!!!";
}