'use strict';

/**
 * @ngdoc function
 * @name week6AngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the week6AngApp
 */
angular.module('week6AngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
