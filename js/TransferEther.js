var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('TransferEther',[]);

app.controller('Transferether' ,function($scope){
	$scope.value = web3.toWei(0.01);
	$scope.Unlock=function(){
		web3.personal.unlockAccount($scope.from,$scope.password);
		console.log(1);
	}
	$scope.sendTransaction=function(){
		// $scope.value = web3.toWei(0.01);
		web3.eth.sendTransaction({from: $scope.from, to: $scope.to, value: $scope.value},function(err,result){
			if(err){return err;}else {console.log(result);}
		});
			
	}

});