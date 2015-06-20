var app = angular.module('cards');

app.service('mainService', function($http, $q){
	this.thing = function() {
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
			}).then(function(res){				
				dfd.resolve(res.data.cards);
		})	// End .then
		return dfd.promise;
	};	// End this.thing
});	// End app.service