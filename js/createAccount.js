var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('createAccounts',[]);
app.controller('Register' ,function($scope){

	$scope.register=function(err,address){
		if(!err)
		{
			$scope.newaccount=web3.personal.newAccount("$scope.Password");
			$scope.account_index=web3.eth.accounts.length;
			// $scope.Username=web3.eth.accounts[$scope.Sum];

			
		}
	}


});