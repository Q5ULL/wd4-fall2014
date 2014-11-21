'use strict';
var customerApp = angular.module('customerApp', []);

customerApp.controller('SouthParkController', function($scope) {
	$scope.southParkCharacters = [
		{
			name: 'kenny mccormick',
			quote: 'oh no!',
			imgUrl: 'images/kenny.jpeg'
		},
		{
			name: 'eric cartman',
			quote: 'mom! ben affleck is naked in my bed',
			imgUrl: 'images/cartman.jpeg'
		},
		{
			name: 'kyle broflowski',
			quote: 'you bastard!',
			imgUrl: 'images/kyle.jpeg'
		},
		{
			name: 'stan marsh',
			quote: 'cartman, you are retarted',
			imgUrl: 'images/stan.jpeg'
		},
		{
			name: 'chef',
			quote: 'i\'m gonna make love, even when i\'m dead',
			imgUrl: 'images/chef.jpeg'
		}

	];

	$scope.date = new Date();

	$scope.selectedText = "";
	// find this temporary storage, and you update the value in the html
	$scope.southParkClick = function(quote) {
		$scope.selectedText = quote;
		console.log(event);

	};
});