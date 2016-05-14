angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

	$scope.addToDo = function(){
		var todo = { name: 'This is a new to do.' };
		$scope.todos.push(todo);
	};
	$scope.angularChange = function() {
		console.log('A change occured.');
	};

	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo, $index) {
		dataService.deleteTodo(todo);
		$scope.todos.splice($index,1);
	};
	$scope.saveTodo = function(todo) {
		dataService.saveTodo(todo);

	};
})

.service('dataService', function($http) {
	this.helloConsole = function() {
		console.log('This is the hello console service.');

	};
	this.getTodos = function(callback) { 
		$http.get('mock/todos.json')
		.then(callback)
	}
	this.deleteTodo = function(todo) {
		console.log("The " + todo.name + "has been deleted.")
	};
	this.saveTodo = function(todo) {
		console.log("The " + todo.name + "has been saved.")
	};
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