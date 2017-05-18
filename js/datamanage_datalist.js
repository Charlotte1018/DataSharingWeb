var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('datamanage_datalist',[]);

app.controller('Datamanage_datalist' ,function($scope){
	
	
	$scope.abidp= [{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"updateIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"addIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"introductions","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"introName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"getIntroduction","outputs":[{"name":"introValue","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"deleteIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"constructor"}];
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	$scope.abidrc=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getDPAddress","outputs":[{"name":"dp","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dataNameArray","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getProvider","outputs":[{"name":"providerAddr","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"data_provide","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dnaLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"getDRAddress","outputs":[{"name":"drec","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"provider","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"}];
	$scope.type1abi=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"type1","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"DDS","outputs":[{"name":"type2Name","type":"bytes32"},{"name":"type2Address","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"t1_t2","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"addType","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt2","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"}];	
	$scope.type2abi=[{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"DT2_Data","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"level2","type":"bytes32"},{"name":"dataName","type":"bytes32"}],"name":"addType2","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dataSet","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dataSetLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}];
	$scope.dataProfile = web3.eth.contract($scope.abidp);
	$scope.searchname=function()
	{

		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		$scope.drc=$scope.myContractInstance.drc.call();
		$scope.drcContract = web3.eth.contract($scope.abidrc);
		$scope.drcContractInstance = $scope.drcContract.at($scope.drc);
		$scope.Dataname=web3.fromAscii($scope.dataname);
		$scope.DPAddress = $scope.drcContractInstance.DPAddress.call($scope.Dataname)
		$scope.dataProfileInstance = $scope.dataProfile.at($scope.DPAddress);
		$scope.introName=$scope.dataProfileInstance.introName.call();
		$scope.introductions = $scope.dataProfileInstance.introductions.call($scope.introName);
		$scope.introductionName=web3.toAscii($scope.introName);
		$scope.IntroductionValue = $scope.introductions.toString();
		console.log($scope.introName);
		console.log($scope.introductionName);
		console.log($scope.introductions);
		console.log($scope.IntroductionValue);
	
	}
	$scope.searchtype=function(){
		$scope.MyContract = web3.eth.contract($scope.abi);
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		$scope.dt1=$scope.myContractInstance.dt1.call();
		console.log($scope.dt1);
		$scope.dt1Contract = web3.eth.contract($scope.type1abi);
		$scope.dt1ContractInstance = $scope.dt1Contract.at($scope.dt1);
		$scope.Type1=web3.fromAscii($scope.type1);
		console.log($scope.Type1);
		$scope.Type2=web3.fromAscii($scope.type2);
		$scope.type2Address = $scope.dt1ContractInstance.DDS.call($scope.Type1);
		$scope.tppe2name = $scope.type2Address[0];
		$scope.tppe2add = $scope.type2Address[1];
		console.log($scope.type2Address);
		console.log($scope.type2Address[0]);
		console.log($scope.type2Address[1]);
		console.log($scope.tppe2add);
		$scope.dt2Contract = web3.eth.contract($scope.type2abi);
		$scope.dt2ContractInstance = $scope.dt2Contract.at($scope.tppe2add);
		$scope.tp2catchname=[];
		$scope.list=[];
		$scope.dataSetLength=$scope.dt2ContractInstance.dataSetLength.call().toNumber();
		console.log($scope.dataSetLength);
		for(var i=0;i<$scope.dataSetLength;i++)
		{
			$scope.tp2catchname.push($scope.dt2ContractInstance.dataSet.call(i));
			$scope.list.push({
				dataname:web3.toAscii($scope.tp2catchname[i])
			});
		}
		console.log($scope.tp2catchname);
		console.log($scope.list);









	};
 	


});