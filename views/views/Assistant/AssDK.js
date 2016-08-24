/**
 * Created by hxsd on 2016/8/18.
 */
// 注册控制器
angular.module('myapp').controller('DaKaCtrl', function($scope) {

    $scope.show = false;
    $scope.Ply2Show=false;
    $scope.AssModal2Show=false;
    $scope.AssModal1=function(){
        $scope.show = true;
    };
    $scope.HideModal1=function(){
        $scope.show = false;
    };

    $scope.AssModal2=function(){
        $scope.Ply2Show=true;
        $scope.AssModal2Show=true;
    };

    $scope.HideModal2=function(){
        $scope.AssModal2Show=false;
        $scope.Ply2Show=true;
    };


    $scope.mydata=[
        {"name":"我需要的患者","type":["工体北门","私营","设备先进的","工体北门","设备先进","工体北","工体北"]},
        {"name":"我需要的患者","type":["工体北门","私营","设备先进的","工体北门","设备先进","工体北","工体北"]},
        {"name":"我需要的患者","type":["工体北门","私营","设备先进的","工体北门","设备先进","工体北","工体北"]},
        {"name":"我需要的患者","type":["工体北门","私营","设备先进的","工体北门","设备先进","工体北","工体北"]},
        {"name":"我需要的患者","type":["工体北门","私营","设备先进的","工体北门","设备先进","工体北","工体北"]}
    ];

    $scope.delType=function(outIndex,index){
        $scope.mydata[outIndex].type.splice(index,1);
    }
});































