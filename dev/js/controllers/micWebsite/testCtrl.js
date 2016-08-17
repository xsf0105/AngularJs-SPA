define(['../../app', '../../common/utilities', 'moment'], function(app, UTILITIES, moment) {
    'use strict';
    return ['$scope', '$state', '$http', '$mdDialog', '$mdToast', 'CONSTANT', function($scope, $state, $http, $mdDialog, $mdToast, CONSTANT) {

        // session中取的用户信息
        $scope.userInfo = UTILITIES.sessionUtilities().getUserInfo();

        //if()

        //$scope.userInfo = UTILITIES.isLogin().getUserInfo();

        // radio默认第一个被选中
        $scope.initState = {
            code: 1
        };

        console.log("welcome to testCtrl!")



    }];
});