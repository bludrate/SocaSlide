angular.module('SSHeader', [])
    .controller('headerCtrl', headerCtrl);

function headerCtrl($scope) {
    $scope.text = "Hello World!!!";
}