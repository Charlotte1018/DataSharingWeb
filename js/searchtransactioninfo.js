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
	$scope.from=web3.eth.accounts[0];
	$scope.abi=[{"constant":true,"inputs":[],"name":"req","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requester","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"}],"name":"requestData","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Recharge","outputs":[{"name":"flag","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"changeAccess","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DRAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dt1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"drc","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"DPAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"req_reqAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"requesterAddress","type":"address"}],"name":"addNewRequester","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introductionName","type":"bytes32"},{"name":"introductionValue","type":"string"},{"name":"level1","type":"bytes32"},{"name":"level2","type":"bytes32"}],"name":"dataRegister","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dataName","type":"bytes32"},{"name":"introName","type":"bytes32"},{"name":"introValue","type":"string"}],"name":"modifyIntroduction","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
	web3.personal.unlockAccount($scope.from,'123456');
	$scope.MyContract = web3.eth.contract($scope.abi);
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
			
	};
	$scope.searchInfo=function()
	{
		$scope.myContractInstance = $scope.MyContract.at($scope.ContractAddress);
		console.log($scope.MyContract);
		console.log($scope.myContractInstance);
		$scope.drc=$scope.myContractInstance.drc.call();
		$scope.req=$scope.myContractInstance.req.call();
		$scope.DRAddress=$scope.myContractInstance.DRAddress.call();
		$scope.DPAddress=$scope.myContractInstance.DPAddress.call();
		$scope.requester=$scope.myContractInstance.requester.call();
		$scope.contractinfo=[
		{name:'drc',value:$scope.drc},
		{name:'req',value:$scope.req},
		{name:'DRAddress',value:$scope.DRAddress},
		{name:'DPAddress',value:$scope.DPAddress}];
		console.log('drc',$scope.drc);
		console.log('req',$scope.req);
		console.log('DRAddress',$scope.DRAddress);
		console.log('DPAddress',$scope.DPAddress);
		console.log('requester',$scope.requester);
	};

});