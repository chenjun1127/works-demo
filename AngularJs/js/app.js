var my_app = angular.module('myApp', [
    'ngRoute', 'ngAnimate', 'controllers'
]);

my_app.config(function ($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'template/hello.html',
        controller: 'helloCtrl'
    }).when('/list', {
        templateUrl: 'template/list.html',
        controller: 'listCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
