/**
 * Created by john on 2015/8/20.
 */

var bookStoreCtrls=angular.module('controllers',[]);
bookStoreCtrls.controller('helloCtrl',function($scope){
    $scope.name='jone'
})
bookStoreCtrls.controller('listCtrl',function($scope){
    $scope.info=[
        {'about':'28'},
        {'about':'老师'},
        {'about':'中国广东省深圳市宝安区民治115栋1204'}
    ]
})