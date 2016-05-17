'use strict';

angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService) {

	$scope.addToDo = function(){
		var todo = { name: 'This is a new to do.' };
		$scope.todos.unshift(todo);
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
	$scope.saveTodos = function() {
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			}
		})
		dataService.saveTodos(filteredTodos);
	};
});