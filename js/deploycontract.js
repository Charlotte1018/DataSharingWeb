var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('deployContract',[]);

app.controller('deploycontract' ,function($scope){
	$scope.value = web3.toWei(0.01);
	// $scope.abi=[{"constant":false,"inputs":[{"name":"x","type":"uint256"},{"name":"y","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"}];
	// $scope.MyContract = web3.eth.contract($scope.abi);
	// $scope.myContractInstance = $scope.MyContract.at('0xbf859cad5dbbe37ff3b4355405512142f711b13d');

	$scope.Unlock=function(){
		web3.personal.unlockAccount($scope.from,$scope.password);
	}
	$scope.depoly=function(){
		web3.eth.sendTransaction({from:$scope.from,data:$scope.byteCode,gas:400000});
	}
	$scope.Depoly=function (){
		web3.eth.sendTransaction({
			from:$scope.from,
			data:$scope.byteCode,
			gas:40000000
		},function(err,hash){
			if(err){return err;}else {
				$scope.Hash=hash;$scope.$apply();
				console.log($scope.Hash);
				// $scope.Receipt=web3.eth.getTransactionReceipt($scope.Hash);
				// $scope.myContractAddress=$scope.Receipt.contractAddress;
				// console.log($scope.myContractAddress);
				// console.log($scope.Receipt);
			}});
		// $scope.Receipt=web3.eth.getTransactionReceipt($scope.Hash);
		// $scope.myContractAddress=$scope.Receipt.contractAddress;
		// console.log($scope.myContractAddress);
		// console.log($scope.Receipt);
	}
	
	// $scope.Receipt=function (){
	// 	$scope.Receipt=web3.eth.getTransactionReceipt($scope.Hash);
	// 	$scope.myContractAddress=$scope.Receipt.contractAddress;
	// 	console.log($scope.myContractAddress);
	// 	console.log($scope.Receipt);
	// };

});