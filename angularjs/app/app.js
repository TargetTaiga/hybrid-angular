'use strict';

angular
	.module('myApp', [
		'myApp.version',
		Angular6Components.Angular6ComponentsLibModuleId
	])
	.controller('myController', ['$scope', function ($scope) {
		$scope.handleClick = function () {
			$scope.clicks += 1;
		};
		/* Might be better solution (eg manual integration ngZone into AngularJS CD)  */
		$scope.handleComponentClick = () => $scope.$apply(() => $scope.clicks += 1);
		$scope.handleReset = function () {
			$scope.clicks = 0;
		};
		$scope.clicks = 0;
	}])
	.directive('angular6Logo', Angular6Components.Angular6LogoComponentDowngraded);
