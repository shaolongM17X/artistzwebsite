var app = angular.module('main', [
	'ngRoute'
]);

app.controller('sideBarController', ['$scope', function($scope) {
	$scope.lists = ["Whole kit & kaboodle", "kitpix", "kittexts", "kitography", "kitlix", "kitflix", "kit blogs", "kitometrix", "kitcontact"];
}]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/Whole%20kit%20&%20kaboodle',{
				templateUrl:'componentPages/mainPage.html',

			}).
			when('/kitpix', {
				templateUrl:'componentPages/kitpix.html'
			}).
			otherwise({
				redirectTo: '/Whole%20kit%20&%20kaboodle'
			});
}]);