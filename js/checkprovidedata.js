var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var app=angular.module('checkprovidedata',[]);
app.controller('checkProvidedata',function($scope){
	$scope.from=web3.eth.accounts[0];
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	web3.personal.unlockAccount($scope.from,'123456');
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at('0xB384e6240c8A3F8cfA27D1224a10F00795948340');
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.drc=$scope.myContractInstance.drc.call();
		$scope.req=$scope.myContractInstance.req.call();
		$scope.DRAddress=$scope.myContractInstance.DRAddress.call();
		$scope.DPAddress=$scope.myContractInstance.DPAddress.call();
		$scope.requester=$scope.myContractInstance.requester.call();
		console.log('drc',$scope.drc);
		console.log('req',$scope.req);
		console.log('DRAddress',$scope.DRAddress);
		console.log('DPAddress',$scope.DPAddress);
		console.log('requester',$scope.requester);
	$scope.checkprovidedata=function()
	{
		$scope.Abi=[{"constant":true,"inputs":[],"name":"dataName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"providerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"dataRequester","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"requester","type":"address"}],"name":"addRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"requester","type":"address"},{"name":"index","type":"uint256"}],"name":"setAuthority","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"constructor"}];

		// web3.personal.unlockAccount($scope.from,'123456');
		$scope.datarequester = web3.eth.contract($scope.abi);
		$scope.datarequesterInstance = $scope.datarequester.at('0x5fd2bf8f26cc04915e1b3b1e9bc1136b455d0c1c');
		console.log($scope.datarequester);
		console.log($scope.datarequesterInstance);
		$scope.dataRequester=$scope.datarequesterInstance.dataRequester.call();
		console.log('dataRequester',$scope.dataRequester);
	};
});












