var app=angular.module('MyContact')

app.value('con',0
    // name: "abc",
    // email: "ee"


//}
);

// app.factory('items', function() {
//       var items = {};
//             $http.get('https://raw.githubusercontent.com/grit0/status/master/all.json').then(function(response){
//           console.log(response);
//           items =response.data;
//           console.log(co);
//           // $scope.myDataArray = response.data.tree;
//           $scope.myDataArray=Object.keys(response.data)

//           //console.log(Object.keys(response.data));
//         },function(error){
//           console.log(error);
//         });
//             console.log("fac");
//     return items;
// });
// app.factory('myService', function($http) {
//   var promise;
//   var myService = {
//     async: function() {
//       if ( !promise ) {
//         // $http returns a promise, which has a then function, which also returns a promise
//         promise = $http.get('https://api.github.com/repos/grit0/status/git/trees/master').then(function (response) {
//           // The then function here is an opportunity to modify the response
//           // console.log(response);
//           // The return value gets picked up by the then in the controller.
//           return response.data.tree;
//         });
//       }
//       // Return the promise to the controller
//       return promise;
//     }
//   };
//   return myService;
// });
app.factory('ponyService', function($http) {
  var getPonies = function(callbackFn) {
    $http.get('https://raw.githubusercontent.com/grit0/status/master/all.json').success(function(data) {
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
              return $http.get('https://raw.githubusercontent.com/grit0/status/master/all.json'); // You Have to give Correct Url either Local path or api etc 

        }
    };
});
app.controller('listController',['$scope','$state','$http','$rootScope','con','MyService','ponyService',function ($scope,$state,$http,$rootScope,co,MyService,ponyService) {
  console.log("listcon_start");

        // $http.get('https://api.github.com/repos/grit0/status/git/trees/master').then(function(response){
        //   console.log(response);
        //   $scope.myDataArray = response.data.tree;
        //   co=response.data.tree;
        // },function(error){
        //   console.log(error);
        // });

// $scope.getData = function() {
    // Call the async method and then do stuff with what is returned inside our own then function
  //   myService.async().then(function(d) {
  //     $scope.data = d;
  //   });
  // };
  // console.log(myService.async().$$state.value);

    ponyService.getPonies(function(ponies) {
      
    
     key = Object.keys(ponies)
     $rootScope.allmac=key;
    //  $scope.list=[];
    // for(i in key ){
    // // $rootScope.allmac.push(key[i].substr(0, key[i].search(".json")).toUpperCase());
    // $scope.list.push({
    //   mac:ponies[key[i]]["basic"]["hostname"],
    //   hostname:key[i]
    // });}
    // console.log($scope.list["mac"]);
  });
    // 

// $scope.content = null;
//          MyService.getdata().success(function (data){
                  
//                    $scope.content=data; // as per  emilySmitley Answer which is Working Good
// console.log($scope.content);
//                  });

        //   $http.get('https://raw.githubusercontent.com/grit0/status/master/all.json').then(function(response){
        //   console.log(response);
        //   co=response.data;
        //   console.log(co);
        //   // $scope.myDataArray = response.data.tree;
        //   $scope.myDataArray=Object.keys(response.data)
        //   $rootScope.m=5;
        //   //console.log(Object.keys(response.data));
        // },function(error){
        //   console.log(error);
        // });

 $rootScope.m=6;
console.log($rootScope.m);
        $scope.btnDetail = function (data) {
          console.log('btnDetaill Pressed.');
    // $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile});
    $state.go('detail',{mac:data});
  }

}]);





  // $scope.myDataArray = [
  //  {
  //    name:'Phongsak Thomthitchong',
  //    nick:'Bank',
  //    social:'fb.com/senchaboxdev',
  //    mobile:'086-979-7070'
  //  },
  //  {
  //    name:'Wichai Thomthitchong',
  //    nick:'Dad',
  //    social:'youtube.com/senchabox',
  //    mobile:'1234567890'
  //  },
  //  {
  //    name:'Nakrit Thomthitchong',
  //    nick:'Namo',
  //    social:'senchabox.com',
  //    mobile:'0987654321'
  //  }
  // ]