var Web3=require('web3');
var web3=new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var app=angular.module('myApp',[]);
app.controller('namereg',function($scope){
	$scope.accountAdd='0x6708f89d5a84b8018453f7ca4282158f3d7ec49a';
	$scope.registerowner=function(){

	};
	$scope.changeAddress=function(){
		// web3.eth.namereg.setAddress($scope.name,$scope.address,true);
		$scope.name= web3.eth.namereg.name($scope.address);
		console.log($scope.name);
	};





});