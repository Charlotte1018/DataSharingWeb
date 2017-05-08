var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var app = angular.module('searchtransactioninfo',[]);

app.controller('searchTransactionInfo' ,function($scope){
	// $scope.hash='0x53734451946492792edeb85629425da291509c9a4fc90b3c1a182c5ac0326ca7';
	// $scope.Transaction=web3.eth.getTransaction($scope.hash);
	// $scope.Receipt=web3.eth.getTransactionReceipt($scope.hash);
	// $scope.transaction=[
	// {name:'blockHash',value:$scope.Transaction.blockHash},
	// {name:'blockNumber',value:$scope.Transaction.blockNumber},
	// {name:'from',value:$scope.Transaction.from},
	// {name:'gas',value:$scope.Transaction.gas},
	// {name:'hash',value:$scope.Transaction.hash},
	// {name:'nonce',value:$scope.Transaction.nonce},
	// {name:'transactionIndex',value:$scope.Transaction.transactionIndex}
	// ];
	$scope.Receipt=[{},{},{}];
	$scope.Transaction=function(){
		$scope.Transaction=web3.eth.getTransaction($scope.hash);
		console.log($scope.Transaction);
		$scope.transaction=[
		{name:'blockHash',value:$scope.Transaction.blockHash},
		{name:'blockNumber',value:$scope.Transaction.blockNumber},
		{name:'from',value:$scope.Transaction.from},
		{name:'gas',value:$scope.Transaction.gas},
		{name:'hash',value:$scope.Transaction.hash},
		{name:'nonce',value:$scope.Transaction.nonce},
		{name:'transactionIndex',value:$scope.Transaction.transactionIndex}
		];
		}
	$scope.Receipt=function(){
		$scope.Receipt=web3.eth.getTransactionReceipt($scope.hash);
		$scope.receipt=[
		{name:'blockHash',value:$scope.Receipt.blockHash},
		{name:'blockNumber',value:$scope.Receipt.blockNumber},
		{name:'contractAddress',value:$scope.Receipt.contractAddress},
		{name:'cumulativeGasUsed',value:$scope.Receipt.cumulativeGasUsed},
		{name:'from',value:$scope.Receipt.from},
		{name:'gasUsed',value:$scope.Receipt.gasUsed},
		{name:'root',value:$scope.Receipt.root},
		{name:'transactionHash',value:$scope.Receipt.transactionHash},
		{name:'transactionIndex',value:$scope.Receipt.transactionIndex}
		];
		console.log($scope.Receipt);
			
	}

});