var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('datamanage_datalist',[]);

app.controller('Datamanage_datalist' ,function($scope){
	$scope.datalist=[
	{
	dataname:'kth/rss',
	introname:'Radio Signal Strength data from a mobile robot along with odometer in indoor and outdoor environments',
	introvalue:'This dataset contains the RSS (Radio Signal Strength) data collected with a mobile robot in two environments: indoor (KTH) and outdoor (Dortmund). RSSI metric was used to collect the RSS data in terms of dBm. The mobile robot location was recorded using its odometry (dead reckoning).'
	}];
	
	$scope.Abi= [{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"updateIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"}],"name":"addIntroduction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"introductions","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"introName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"getIntroduction","outputs":[{"name":"introValue","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"introductionName","type":"bytes32"}],"name":"deleteIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"constructor"}];


	$scope.dataProfile = web3.eth.contract($scope.Abi);
	$scope.search=function()
	{
		$scope.dataProfileInstance = $scope.dataProfile.at($scope.DataProfileAddress);
		$scope.introductionName=web3.fromAscii($scope.IntroductionName);
		$scope.introductions = $scope.dataProfileInstance.introductions.call($scope.introductionName);
		$scope.IntroductionValue = $scope.introductions.toString();
		console.log($scope.introductions);
		console.log($scope.IntroductionValue);
	}
 	


});