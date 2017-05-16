var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('datarequestlist',[]);

app.controller('dataRequestlist' ,function($scope){
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	$scope.reqabi=[{"constant":true,"inputs":[],"name":"dataLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"index","type":"uint256"}],"name":"changeStatus","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"requestStatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"data","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"request","type":"address"},{"name":"name","type":"bytes32"},{"name":"drec","type":"address"}],"payable":false,"type":"constructor"}];
	$scope.MyContract = web3.eth.contract($scope.abi);
	$scope.reqContract = web3.eth.contract($scope.reqabi);

	$scope.Search=function(){
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.req_reqAddr=$scope.myContractInstance.req_reqAddr.call($scope.reqAccount);
		console.log($scope.req_reqAddr);
		$scope.reqContractInstance = $scope.reqContract.at($scope.req_reqAddr);
		$scope.dataLength = $scope.reqContractInstance.dataLength.call();
		console.log($scope.dataLength.toNumber());
		$scope.Data=[];
		for(var i=0;i<$scope.dataLength;i++) {
			$scope.Data.push(web3.toAscii($scope.reqContractInstance.data.call(i)));
		}  
		console.log($scope.Data);

	};
	




});