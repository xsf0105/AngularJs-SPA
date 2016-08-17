define(function() {
	var server_host = 'http://api.igrow.cn/1.1b/support/auth';

	// var server_host = 'http://192.168.1.235:8081';
	// var server_host = 'http://192.168.1.239';
	return {
		//接口服务
		SERVER_HOST: server_host,
		//阿里云oss
		//ALIYUNOSS_HOST: 'http://cheerhi.oss-cn-hangzhou.aliyuncs.com/',

		// SOCKET_PUSH_SERVER_HOST: 'http://127.0.0.1:3000',
		// 登录页面
		 LOGIN_PAGE: '/login.html',

		//业务接口
		SERVICE: {
			// COMMON
			COMMON: {
				//SHOP_LIST: server_host + '/custweb/seller/getShopList.do',
				//PERMISSION_LIST: server_host + '/custweb/admin/getSellerAuthority.do',
				//SHOP_SWITCH: server_host + '/custweb/seller/shopChange.do',

				LOGOUT: server_host + '/logout'
			},
			// 设置
			SETTING: {
				//BOXSETTING: {
				//	BOXTYPE: {
				//		LIST: server_host + '/custweb/table/type/list.do',
				//		DETAIL: server_host + '/custweb/table/type/get.do',
				//	},
				//	BOXTHEME: {
				//		LIST: server_host + '/custweb/table/style/list.do',
				//	},
				//	BOXNUMBER: {
				//		LIST: server_host + '/custweb/table/list.do',
				//	},
				//	BASEBOXTYPELIST: server_host + '/custweb/table/local/list.do'
				//},
				//其他巴拉巴拉
				//ORDERSETTING: {
				//	LIST: server_host + '/sweb/table/mark/grid.do',
				//	SAVE: server_host + '/sweb/table/mark/editGrid.do'
				//},
			}
		},

		// 角色（等级）
		//ROLES: [{
		//	"sgId": 1,
		//	"sgName": "管理员",
		//	"sgLeval": 1
		//}, {
		//	"sgId": 2,
		//	"sgName": "经营商",
		//	"sgLeval": 2
		//}, {
		//	"sgId": 3,
		//	"sgName": "店长",
		//	"sgLeval": 3
		//}, {
		//	"sgId": 4,
		//	"sgName": "店员",
		//	"sgLeval": 4
		//}]
	}
});