angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

	$scope.helloConsole = dataService.helloConsole
	$scope.angularChange = function() {
		console.log('A change occured.');
	};
	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});
})

.service('dataService', function($http) {
	this.helloConsole = function() {
		console.log('This is the hello console service.');

	};
	this.getTodos = function(callback){ 
		$http.get('mock/todos.json')
		.then(callback)
	}
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