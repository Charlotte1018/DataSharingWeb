var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('AccountsList',[]);

app.controller('accountsList' ,function($scope){
	$scope.accounts=web3.eth.accounts;
});