var myapp=angular.module("myapp",["ionic"]);
myapp.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");


    $stateProvider.state("home",{url:"/home",templateUrl:"views/home/home.html"});
    /*-----------------我的资料----------------------------------*/
   $stateProvider.state("mydata",{url:"/mydata",templateUrl:"views/mydata/mydata.html",controller:"mydata"});
   $stateProvider.state("mydata_fukuan",{url:"/mydata_fukuan",templateUrl:"views/mydata/mydata_fukuan.html"});
   $stateProvider.state("mydata_bj",{url:"/mydata_bj",templateUrl:"views/mydata/mydata_bj.html",controller:"mydata"});
    $stateProvider.state("mydata_bjzl",{url:"/mydata_bjzl",templateUrl:"views/mydata/mydata_bjzl.html",controller:"mydata"});
   
  /*-----------------大咖助理- DaJun----------------------------------*/
    $stateProvider.state("Assistant",{url:"/Assistant",templateUrl:"views/Assistant/Assistant.html"});
    $stateProvider.state("ASSzhuanDaka",{url:"/ASSzhuanDaka",templateUrl:"views/Assistant/ASSzhuanDaka.html"});
    $stateProvider.state("ASSzhuanYiYuan",{url:"/ASSzhuanYiYuan",templateUrl:"views/Assistant/ASSzhuanYiYuan.html"});
    $stateProvider.state("AssPingTai",{url:"/AssPingTai",templateUrl:"views/Assistant/AssPingTai.html"});
    $stateProvider.state("AssYaoQing",{url:"/AssYaoQing",templateUrl:"views/Assistant/AssYaoQing.html"});
    $stateProvider.state("AssHeZuo",{url:"/AssHeZuo",templateUrl:"views/Assistant/AssHeZuo.html"});
    $stateProvider.state("AssHuanZheZL",{url:"/AssHuanZheZL",templateUrl:"views/Assistant/AssHuanZheZL.html"});
    $stateProvider.state("AssYYChuZhen",{url:"/AssYYChuZhen",templateUrl:"views/Assistant/AssYYChuZhen.html"});
    $stateProvider.state("AssDaKaYiS",{url:"/AssDaKaYiS",templateUrl:"views/Assistant/AssDaKaYiS.html"});
 /*---------------大咖助理 ---end--------------------------------------*/
/*-----------------------------------------医院推广------------------*/
    $stateProvider.state("popularize",{url:"/popularize",templateUrl:"views/PoP/popularize.html"});

    /*-----------------------------------------------------------------*/
    $stateProvider.state("login",{url:"/login",templateUrl:"views/login/login.html"});
    /*---------------我的需求--------------------------------------*/
    $stateProvider.state("my_needs",{url:"/my_needs",templateUrl:"views/my_needs/my_needs.html"});

    /*---------------我的订单----我的会诊单--------------------------------------*/
    $stateProvider.state("my_order",{url:"/my_order",templateUrl:"views/my_order/my_order.html"});

    /*---------------我的订单----订单详情--------------------------------------*/
    $stateProvider.state("my_order_details",{url:"/my_order_details",templateUrl:"views/my_order/my_order_details.html"});
    /*---------------同道留言------------------------------------------*/
    $stateProvider.state("message",{url:"/message",templateUrl:"views/message/message.html", controller:"messageCtrl"});
    /*---------------大咖同道------------------------------------------*/
    $stateProvider.state("search",{url:"/search",templateUrl:"views/search/search.html", controller:"searchCtrl"});

    $urlRouterProvider.otherwise("home");
});