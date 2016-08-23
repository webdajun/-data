angular.module("myapp").controller("mydata", function ($scope,$ionicSlideBoxDelegate) {
    $scope.products={
        name:"周中明",
        post:"主治医生",
       label:[{id:"心脏科"},{id:"心脏科"},{id:"教授"},{id:"博士后"},{id:"其他亮点"},{id:"其他亮点"},{id:"其他亮点"}],
       yiyuans:[
       	{mingzi:"北京协和医院",imgsrc:"images/yiyuan@2x.png"},
       	{mingzi:"北京协和医院",imgsrc:"images/yiyuan2.png"},
       	{mingzi:"北京协和医院",imgsrc:"images/yiyuan@2x.png"},
       	{mingzi:"北京协和医院",imgsrc:"images/yiyuan2.png"}
       ],
       sanchu:[
        {mingzi:"北京协和医院",imgsrc:"images/shanchuyiyuan@2x.png"},
       	{mingzi:"北京协和医院",imgsrc:"images/shanchuyiyuan@2x.png"},
       	{mingzi:"北京协和医院",imgsrc:"images/shanchuyiyuan@2x.png"}
       	],
       	xizhen:{mingzi:"北京协和医院",imgsrc:"images/tianjia@2x.png"},
       wode:[{n:"工体北门"},{n:"私营"},{n:"设备先进"},{n:"北门北门"},{n:"私营"},{n:"先进"},{n:"北门"},{n:"设备先进"}]
    };
     $scope.show=true;
    
    $scope.onShow=function(){
    	$scope.show=false;
    };
    $scope.onHide=function(){
    	$scope.show=true;
    }
});