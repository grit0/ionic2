angular.module('MyContact')
.controller('listclusterController',function ($scope,$state,$stateParams,$rootScope,ponyService) {


function has (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var x = []
x=$stateParams.clicked.split(".");;
console.log("x = "+x.length);


 $rootScope.m=7;

    ponyService.getPonies(function(ponies) {
    	$scope.status=[];

    	for( i in $rootScope.allmac){
    		if(x.length==2)
    			it=ponies[$rootScope.allmac[i]][x[0]][x[1]];
    		else
    			it=ponies[$rootScope.allmac[i]][x[0]][x[1]][x[2]];
    		$scope.status.push({
    				mac:$rootScope.allmac[i],
    				item:it,
    				attibute:x[1]
    			});
    		// console.log($rootScope.allmac[i]);
    		//$scope.status['mac']=$rootScope.allmac[i];

    }
console.log($stateParams.past);
 // console.log($rootScope.allmac);
  });
  //   ponyService.getPonies(function(ponies) {
  //   $scope.myDataArray=Object.keys(ponies)
  //   // $scope.ponies = ponies.tree;
  //   $scope.ponies = ponies;
  //   console.log($scope.ponies);
  // });
// countries = Object.keys(countries).filter(function(key) {
//     // Countries under 1000000000
//     return countries[key] <= 1000000000;
// });
 // console.log(Object.keys(users.fred));
// console.log(Object.getOwnPropertyNames('age').sort());
// console.log('fred'.hasOwnProperty(40));
// console.log('age' in users['fred']);
//allkey=[];
// function f(va){
// 	if(va in users['fred'])
// 		return 1;
// 	allkey.push(Object.keys(va));
// 	return f()
// }

	$scope.btnBack = function () {
		console.log('back pressed.'+$stateParams.past);

		$state.go('detail',{mac:$stateParams.past});
	}
console.log($stateParams);

});