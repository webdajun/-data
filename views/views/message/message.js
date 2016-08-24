/**
 * Created by hxsd on 2016/8/17.
 */
angular.module("myapp").controller("messageCtrl",function($scope,$http){
    var url="views/message/message.json";
    $scope.message={};
    $scope.toggle=false;
    $scope.obj={replayword:""};
    $http.get(url).success(function(data){
        $scope.message=data;
    }).error(function(){});
    $scope.Onclick=function(replayword){
        $scope.message.replaywords.push(replayword);
        $scope.obj.replayword="";
    };
    $scope.replay="回复";
    $scope.Change=function(replayword){
        $scope.toggle=true;
        $scope.replay="回复王小妮";
    };
    $scope.Blur=function(){
        $scope.toggle=false;
    };
});
