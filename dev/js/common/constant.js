define(function() {
	var server_host = 'http://api.igrow.cn/1.1b/support/auth';
	// var server_host = 'http://localhost:8080';

	return {
		//接口服务
		SERVER_HOST: server_host,
		// 登录页面
		 LOGIN_PAGE: '/login.html',
		//业务接口
		SERVICE: {
			// COMMON
			COMMON: {
				LOGOUT: server_host + '/logout'
			},
		}
	}
});