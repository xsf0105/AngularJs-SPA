define(['angularAMD', '../common/utilities.js'
], function(angularAMD, UTILITIES, io) {
	'use strict';
	angularAMD.controller('navMenuController', ['$scope', '$state', '$mdSidenav',function($scope, $state,$mdSidenav) {

		$scope.isTabActive = function(tabName) {
			// Check if there is sub-states
			var stateName = $state.current.name,
				subStatePos = stateName.indexOf('.');
			if (subStatePos > -1) {
				stateName = stateName.substring(0, subStatePos);
			}
			if (tabName === stateName) {
				return 'active';
			}
		};

		/* 点击选项卡跳转到路由页面 */
		$scope.switchRootMenu = function(tabName) {
			var stateName = $state.current.name,
				subStatePos = stateName.indexOf('.');
			if (subStatePos > -1) {
				stateName = stateName.substring(0, subStatePos);
			}
			if (stateName !== tabName) {
				$state.transitionTo(tabName);
			}
		}
		//权限
		 //$scope.pageAuth = UTILITIES.sessionUtilities().getUserInfo().pageAuth.menus;
		//console.log($scope.pageAuth);
		console.log("view_service");
	}]);

	angularAMD.controller('headerController', ['$scope','$state', '$http', 'CONSTANT', function($scope, $state, $http, CONSTANT) {
		//从session中获取用户信息
		$scope.userInfo = UTILITIES.sessionUtilities().getUserInfo();

		// 点击头像退出账号
		//$scope.$watch('rightMenuFlag', function(a, b) {
		//	if (a === 'logout') {
		//		// 登出
		//		$http.post(CONSTANT.SERVICE.COMMON.LOGOUT).success(function(data) {
		//			if (data.isSuccess) {
		//				UTILITIES.sessionUtilities().clearUserInfo();
		//				location.href = CONSTANT.LOGIN_PAGE;
		//			}
		//		});
		//	} else if (a === 'test') {
		//		$state.transitionTo('order.foodConfirm');
		//	}
		//});

		/* material demo */
		$scope.users = [
			{ id: 1, name: 'Bob' },
			{ id: 2, name: 'Alice' },
			{ id: 3, name: 'Steve' }
		];
		$scope.selectedUser = { id: 1, name: 'Bob' };
	}]);

	angularAMD.directive('navMenu', function() {
		return {
			restrict: 'A',
			controller: 'navMenuController',
			templateUrl: 'views/common/nav.html'
		};
	});

	angularAMD.directive('headerView', function() {
		return {
			restrict: 'A',
			controller: 'headerController',
			templateUrl: 'views/common/header.html'
		};
	});

});