angular.module('MyContact')

// .controller('detailController',function ($scope,$state,$stateParams,$ionicPopup) {

//   console.log('DETAIL START.');
//   console.log($stateParams);

//   $scope.txtName = $stateParams.name;
//   $scope.txtNickName = $stateParams.nick;
//   $scope.txtSocial = $stateParams.social;
//   $scope.txtMobile = $stateParams.mobile;

//   $scope.btnBack = function () {
//     console.log('back pressed.');
//     $state.go('list');
//   }

//   $scope.btnCall = function () {
//     console.log('btn Calling.......');

//     var confirmPopup = $ionicPopup.confirm({
//       title: 'Call',
//       template: $stateParams.mobile
//     });

//     confirmPopup.then(function(res) {
//       if(res) {
//         console.log('OK');
//       } else {
//         console.log('Cancel');
//       }
//     });

//   }
// })
.controller('detailController',function ($scope,$state,$http,$stateParams,$ionicPopup) {
    console.log($stateParams.mac);
    //$http.get('https://raw.githubusercontent.com/grit0/status/master/'+$stateParams.mac).then(function(response){
    $http.get('https://status-pi.firebaseio.com/.json').then(function(response){
      console.log("connect")
      console.log(response);
      $scope.data= response.data[$stateParams.mac];
      // $scope.myDataArray = response.data;
       // $scope.data=response.data
    },function(error){
      console.log(error);
    });

  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('app.list');
  }

  $scope.btnCall = function () {
    console.log('btn Calling.......');

    var confirmPopup = $ionicPopup.confirm({
      title: 'Thank you',
      template: $stateParams.mobile
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });
    }




  $scope.btncluster = function (path) {

    console.log('btncluster Pressed : '+path);
    // $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile});
    $state.go('listcluster',{past:$stateParams.mac,clicked:path});

  }
    $scope.btncalert = function (path) {

    console.log('btncalert Pressed : '+path);
    // $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile});
    $state.go('config_alert',{past:$stateParams.mac,clicked:path});

  }
});
