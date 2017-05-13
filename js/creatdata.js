var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var creatdata=angular.module('creatdata',[]);
creatdata.controller('creatData',function($scope){
	$scope.from=web3.eth.accounts[0];
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

	$scope.CreateData=function()
	{
		web3.personal.unlockAccount($scope.from,$scope.password);
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.myContractInstance.dataRegister($scope.dataname,$scope.introductionname,$scope.introductionvalue,$scope.level1,$scope.level2,{from:$scope.from,gas:80000000});
		// $scope.DPAddress=$scope.myContractInstance.DPAddress.call();
		// console.log($scope.DPAddress);
	};
	$scope.RequestData=function()
	{
		
	}



















	$scope.CreateData1=function(){
		web3.personal.unlockAccount($scope.from,$scope.password);
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at('0x7ba0849cd978b4c8ae89d7089c3d11ed67141f6f');
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.myContractInstance.register($scope.dataname,$scope.introductionname,$scope.introductionvalue,{from:$scope.from});
		// $scope.myContractInstance.register('a1','a1','aa',{from:$scope.from});
		// $scope.DPAddress=$scope.myContractInstance.getDPAddress('a1',{from:$scope.from});
		// $scope.DRAddress=$scope.myContractInstance.getDRAddress('a1',{from:$scope.from});
		// $scope.Provider=$scope.myContractInstance.getProvider('a1',{from:$scope.from});
		$scope.DPAddress=$scope.myContractInstance.getDPAddress($scope.dataname,{from:$scope.from});
		$scope.DPAddress1=$scope.myContractInstance.DPAddress.call();
		$scope.DRAddress=$scope.myContractInstance.getDRAddress($scope.dataname,{from:$scope.from});
		$scope.Provider=$scope.myContractInstance.getProvider($scope.dataname,{from:$scope.from});
		// console.log($scope.DPAddress);
		// console.log($scope.DRAddress);
		// console.log($scope.Provider);
		console.log($scope.DPAddress1);
	}
	$scope.createData=function(){
		web3.personal.unlockAccount($scope.from,'123456');
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at('0x7ba0849cd978b4c8ae89d7089c3d11ed67141f6f');
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
