var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController',['$scope', function($scope) {
	$scope.submitForm = function(isValid) {
		if(isValid) {
			alert('everything is valid');
		}
	}
}]);