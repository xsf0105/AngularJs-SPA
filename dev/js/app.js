define(['../js/common/common', '../js/common/constant', '../js/common/utilities', 'moment', 'socket.io'], function(angularAMD, CONSTANT, UTILITIES, moment, io) {
	'use strict';
	var app = angular.module('Edu', ['ui.router', 'ngResource', 'ngMaterial', 'ngFileUpload', 'angular-loading-bar', 'btford.socket-io', 'ngMessages', 'ngAnimate', 'ngSanitize']).constant('CONSTANT', CONSTANT);

	app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 'cfpLoadingBarProvider', '$mdDateLocaleProvider', function($httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, cfpLoadingBarProvider, $mdDateLocaleProvider) {

		// Material theme config
		// Other themes as following:
		// https://material.angularjs.org/latest/Theming/01_introduction
		$mdThemingProvider.theme('default').primaryPalette('light-blue');

		$stateProvider
			//微网站（父级）
			.state('micWebsite', angularAMD.route({
				url: '/micWebsite',
				templateUrl: 'views/micWebsite/mic-website.html',
				controllerUrl: '../js/controllers/micWebsite/mic-website'
			}))
			//子级
			.state('micWebsite.add1', angularAMD.route({
				url: '/add1',
				templateUrl: 'views/micWebsite/testView.html',
				controllerUrl: '../js/controllers/micWebsite/testCtrl'
			}))
			.state('micWebsite.add2', angularAMD.route({
				url: '/add2',
				templateUrl: 'views/micWebsite/testView2.html',
				controllerUrl: '../js/controllers/micWebsite/testCtrl2'
			}))
			//其他example
			.state('testManage', angularAMD.route({
				url: '/testManage',
				templateUrl: 'views/classManage/testView.html',
				controllerUrl: '../js/controllers/classManage/testCtrl'
			}))

		$urlRouterProvider.otherwise('/micWebsite');
	}]);

	return angularAMD.bootstrap(app);
});
