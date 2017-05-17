var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('datasearch',[]);
app.controller('Datasearch' ,function($scope){
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	$scope.abidrc=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getDPAddress","outputs":[{"name":"dp","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dataNameArray","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getProvider","outputs":[{"name":"providerAddr","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"data_provide","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dnaLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getDRAddress","outputs":[{"name":"drec","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"provider","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"}];
	$scope.abidpAddress=[{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"updateIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"addIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"introductions","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"introName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"getIntroduction","outputs":[{"name":"introValue","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"deleteIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"constructor"}];
	$scope.searchDataProfile=function()
	{
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		// console.log($scope.MyContract);
		// console.log($scope.myContractInstance);
		$scope.drc=$scope.myContractInstance.drc.call();
		// console.log($scope.drc);
		$scope.drcContract = web3.eth.contract($scope.abidrc);
		$scope.drcContractInstance = $scope.drcContract.at($scope.drc);
		$scope.dnaLength=$scope.drcContractInstance.dnaLength.call().toNumber();
		// console.log($scope.dnaLength);
		console.log($scope.dnaLength)
		$scope.datanamearray = [];
		$scope.datanamearrayAdd = [];
		$scope.introname=[];
		$scope.introvalue=[];
		$scope.dataList=[];
		$scope.abidpContract=web3.eth.contract($scope.abidpAddress);
		for (var i = 0; i < $scope.dnaLength; i++) {
			$scope.datanamearray.push($scope.drcContractInstance.dataNameArray.call(i));
			$scope.datanamearrayAdd.push($scope.drcContractInstance.DPAddress.call($scope.datanamearray[i]));
		    $scope.abidpContractInstance = $scope.abidpContract.at($scope.datanamearrayAdd[i]);
		    $scope.introname.push($scope.abidpContractInstance.introName.call());
		    $scope.introvalue.push($scope.abidpContractInstance.introductions.call($scope.introname[i]));
			$scope.dataList.push({
				dataname: web3.toAscii($scope.datanamearray[i]),
				introname: web3.toAscii($scope.introname[i]) ,
				introvalue: $scope.introvalue[i],
			})
		}
		console.log($scope.dataList);
	};
});




