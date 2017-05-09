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
	},
	{
	dataname:'jiit/accelerometer',
	introname:'Accelerometer samples collected through Android phones when driven on different vehicles.',
	introvalue:'This dataset consists of accelerometer samples collected through Android phones when driven on different vehicles. The dataset consists of 678 Km of drive data, which involved 22 different drivers, 5 different types of vehicles (bus, auto rickshaw, cycle rickshaw, motorcycle, and car) and 4 smartphones.'
	},
	{
	dataname:'ctu/personal',
	introname:'Mobile phone records of Czech Ph.D. student Michal Ficek.',
	introvalue:'This dataset contains 142 days of mobile phone records (aka Call Data Records) and ground-truth movement description of Czech Ph.D. student Michal Ficek, stored by his own mobile terminal in 2010-2011.'
	},
	{
	dataname:'jiit/accelerometer',
	introname:'Accelerometer samples collected through Android phones when driven on different vehicles.',
	introvalue:'This dataset consists of accelerometer samples collected through Android phones when driven on different vehicles. The dataset consists of 678 Km of drive data, which involved 22 different drivers, 5 different types of vehicles (bus, auto rickshaw, cycle rickshaw, motorcycle, and car) and 4 smartphones.'
	},
	{
	dataname:'ctu/personal',
	introname:'Mobile phone records of Czech Ph.D. student Michal Ficek.',
	introvalue:'This dataset contains 142 days of mobile phone records (aka Call Data Records) and ground-truth movement description of Czech Ph.D. student Michal Ficek, stored by his own mobile terminal in 2010-2011.'
	},
	{
	dataname:'kth/rss',
	introname:'Radio Signal Strength data from a mobile robot along with odometer in indoor and outdoor environments',
	introvalue:'This dataset contains the RSS (Radio Signal Strength) data collected with a mobile robot in two environments: indoor (KTH) and outdoor (Dortmund). RSSI metric was used to collect the RSS data in terms of dBm. The mobile robot location was recorded using its odometry (dead reckoning).'
	}
	];



});