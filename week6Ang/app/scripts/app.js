'use strict';

/**
 * @ngdoc overview
 * @name week6AngApp
 * @description
 * # week6AngApp
 *
 * Main module of the application.
 */
var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController',['$scope', function($scope) {
  $scope.submitForm = function(isValid) {
    if(isValid) {
      alert('everything is valid');
    }
  };
}]);
