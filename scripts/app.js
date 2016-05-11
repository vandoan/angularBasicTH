angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.angularChange = function() {
		console.log('A change occured.');
	};

	$scope.todos = [
		{ "name": "wash the window" },
		{ "name": "wash the dishes" },
		{ "name": "pay the bills" },
		{ "name": "clean the bathroom" },
		{ "name": "water the plants" },
		{ "name": "mop the floor" },
	]
})

.controller('coolCtrl', function($scope){
	$scope.whoAmI = function() {
		console.log('hello, cool world');
	};

	$scope.helloWorld = function() {
		console.log('not the original');
	};
})

.controller('siblingCtrl', function($scope){
		$scope.foobar = 1234
});