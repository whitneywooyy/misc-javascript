var app = angular.module('cards');

app.controller('mainCtrl', function($scope, mainService){
	mainService.thing().then(function(response){
		$scope.searchResults = response;
	})	
});	// End app.controller