angular.module("todoListApp", [])

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