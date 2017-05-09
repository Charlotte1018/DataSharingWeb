var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var creatdata=angular.module('creatdata',[]);
creatdata.controller('creatData',function($scope){
	$scope.abi=[{"constant":false,"inputs":[],"name":"getda","outputs":[{"name":"index","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	$scope.from=web3.eth.accounts[0];
	
	
	$scope.createData=function(){
		web3.personal.unlockAccount($scope.from,'123456');
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at('0x2a85dcd735cfcb83ef70191783b9f0cfe9ed0b8d');
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.myContractInstance.register('a1',{from:$scope.from});
		$scope.index=$scope.myContractInstance.getda({from:$scope.from});
		console.log($scope.index);
	}
	// console.log($scope.address);
	// $scope.creatData=function(){
	// 	$scope.myContractInstance.Register($scope.dataname,$scope.introductionname,$scope.introductionvalue,$scope.datatype1,$scope.datatype2,{from:$scope.from});
	// 	$scope.address=$scope.myContractInstance.getDRAddress($scope.dataname,{from:web3.eth.accounts[0]});
	// 	console.log($scope.address);
	// 	console.log($scope.text);
	// 	console.log($scope.MyContract);
	// 	console.log($scope.myContractInstance);
		
	// };
	$scope.Unlock=function(){
		web3.personal.unlockAccount($scope.from,$scope.password);
		
	}
	
	


});
