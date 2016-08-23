/**
 * Created by hxsd on 2016/8/17.
 */
angular.module("myapp").controller("searchCtrl",function($scope,$location,$anchorScroll,$ionicScrollDelegate){
    $scope.onoff=false;
    $scope.toggle=false;
    $scope.obj={replayword:""};
    $scope.replay="工体北门";
    $scope.Search=function(){
        $scope.onoff=true;
        $scope.toggle=true;
    };
    $scope.Onclick=function(){
        $scope.onoff=false;
        $scope.obj.replayword="";
        $scope.replay="工体北门";

    };
    $scope.Change=function(replayword){
        $scope.toggle=true;
        $scope.replay="工体北门";
    };
    $scope.Blur=function(){
        $scope.onoff=false;
        $scope.toggle=false;
    };
    $scope.scrollTo = function(id) {
        var scroll = document.getElementById(id).offsetTop - $ionicScrollDelegate.getScrollPosition().top;
        $ionicScrollDelegate.scrollBy(0,  scroll, true);
     };
});