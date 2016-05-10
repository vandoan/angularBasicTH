angular.module('todoListApp')
.directive('helloWorld', function() {
	return { 
	template: "Hello, world."
	restrict: "E" // element only
	};
});