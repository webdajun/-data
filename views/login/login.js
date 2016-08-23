angular.module("myapp").controller("loginCtrl",function($scope,$interval){
    $scope.count="发送验证码";
    $scope.login=function(){
        $scope.num=59;
        $scope.timer=$interval(function(){
            $scope.count="重新发送( "+$scope.num+"s )";
            if($scope.num>0){
                $scope.num-=1;
            }else{
                $scope.count="重新发送验证";
            }
        },1000);
    }

});