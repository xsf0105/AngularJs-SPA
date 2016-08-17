define(['../../app', '../../common/utilities', 'moment'], function(app, UTILITIES, moment) {
    'use strict';
    return ['$scope', '$http', '$state', 'CONSTANT', function($scope, $http, $state, CONSTANT) {

        console.log('welcome to order(ParentCtrl)');

        //// 设置默认页面
        $state.transitionTo('micWebsite.add1');
        //
        //// 选项卡
        //$scope.isTabActive = function(tabName) {
        //    // Check if there is sub-states
        //    var stateName = $state.current.name,
        //        subStatePos = stateName.indexOf('.');
        //
        //    if (subStatePos > -1) {
        //        stateName = stateName.substring(subStatePos + 1, stateName.length + 1);
        //    }
        //
        //    if (tabName === stateName) {
        //        return 'active';
        //    }
        //};
        //
        //$scope.$watch('myDate', function(a, b) {
        //    // console.log(a);
        //    if ($scope.initChild !== undefined)
        //        $scope.initChild();
        //});

    }];
})