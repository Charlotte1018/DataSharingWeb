var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('searchAccounts',[]);
app.controller('searchaccounts' ,function($scope){

	$scope.searchaccounts=function(err,address){
		if(!err)
		{
			$scope.balance=web3.eth.getBalance($scope.address);	
		}
	}


});