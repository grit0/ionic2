var app=angular.module('MyContact')
app.value('con',0
    // name: "abc",
    // email: "ee"
//}
);
app.factory('ponyService', function($http) {
  var getPonies = function(callbackFn) {
    $http.get('https://status-pi.firebaseio.com/.json').success(function(data) {
      callbackFn(data);
    });
  };

  return {
    getPonies: getPonies
  };
});
app.factory('MyService', function($http){
    return {
        getdata: function(){
              return $http.get('https://status-pi.firebaseio.com/.json?shallow=ture');
        }
    };
});
app.controller('listController',['$scope','$state','$http','$rootScope','con','MyService','ponyService',function ($scope,$state,$http,$rootScope,co,MyService,ponyService) {
  console.log("listcon_start");
    ponyService.getPonies(function(ponies) {
     key = Object.keys(ponies)
    console.log("key : "+key)
     var newArr = [];
     for (var i=0; i<key.length; i+=3) {
       newArr.push([key.slice(i, i+3)]);
     }
    //  console.log("n : "+[['a','b','c'],['c','d'],['e','f']])
    console.log("new : "+newArr)
     $rootScope.allmac=newArr;
  });

 $rootScope.m=6;
console.log($rootScope.m);


    $scope.btnDetail = function (data) {
          console.log('btnDetaill Pressed. send data is : '+data);
    // $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile});
    $state.go('detail',{mac:data});
  }

 }]);
