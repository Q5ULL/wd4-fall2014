'use strict';

/**
 * @ngdoc function
 * @name week6AngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the week6AngApp
 */
angular.module('week6AngApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
 	var todosInStore = localStorageService.get('todos');
    
    $scope.todos = todosInStore || [];

    //whenever todo gets updated, it will add it to the array

    $scope.$watch('todos', function() {
    	localStorageService.set('todos', $scope.todos);
    }, true);
  	
    $scope.addTodo = function() {
    	
    	if($scope.todos.indexOf($scope.todo) === -1) {
    		$scope.todos.push($scope.todo);
    		$scope.todo = '';
    	} else {
    		alert('yo dawg, ' + $scope.todo + ' ALREADY EXISTS');
    	}

    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };
  });
