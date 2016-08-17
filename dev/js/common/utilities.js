define(['js/common/constant.js', 'socket.io'], function(CONSTANT, io) {
	return {
		getToastPosition: function() {
			var last = {
				bottom: false,
				top: true,
				left: false,
				right: true
			};
			var toastPosition = angular.extend({}, last);

			var current = toastPosition;
			if (current.bottom && last.top) current.top = false;
			if (current.top && last.bottom) current.bottom = false;
			if (current.right && last.left) current.left = false;
			if (current.left && last.right) current.right = false;
			last = angular.extend({}, current);

			return Object.keys(toastPosition)
				.filter(function(pos) {
					return toastPosition[pos];
				})
				.join(' ');
		},
		jsonToUrl: function(json) {
			return '?' + Object.keys(json).map(function(key) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
			}).join('&');
		},
		findElement: function(arr, propName, propValue) {
			for (var i = 0; i < arr.length; i++)
				if (arr[i][propName] == propValue)
					return arr[i];
		},
		//根据属性值获取当前对象在数组中的下标
		findIndex: function(list, propName, propVal) {
			return list.map(function(obj, index) {
				if (obj[propName] == propVal) {
					return index;
				}
			}).filter(isFinite)[0];
		},

		isLogin: function() {
			return {
				logined:function(){
					if(document.cookie.indexOf("igr_auth=") == -1){
						console.log(1);
						alert(1);
						location.href = 'http://auth.igrow.cn/auth/login?go=http://edu.igrow.cn/#/micWebsite/add1';
					}else{
						console.log(2);
					}
				},





				getCookies: function (cookiename){
					var value = document.cookie.match(new RegExp("(^| )" + cookiename + "=([^;]*)(;|$)"));
					return null != value ? decodeURIComponent(value[2]) : null;
				},
                //
				//setUserInfo: function(userInfo) {
				//	if (typeof(userInfo) === 'object')
				//		sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
				//	console.log(sessionStorage.setItem('userInfo', JSON.stringify(userInfo)))
				//},
				//getUserInfo: function() {
				//	var userInfoStr = sessionStorage.getItem('userInfo');
				//	if (userInfoStr === null) {
				//		alert(1);
				//		//location.href = 'login.html';
				//		location.href = 'http://auth.igrow.cn/auth/login?go=http://edu.igrow.cn';
				//	} else {
				//		return JSON.parse(userInfoStr);
				//	}
				//},
				//clearUserInfo: function() {
				//	sessionStorage.removeItem('userInfo');
				//},

				//setShopList: function(shopArr) {
				//	if (typeof(shopArr) === 'object')
				//		sessionStorage.setItem('shopList', JSON.stringify(shopArr));
				//},
				//
				//getShopList: function() {
				//	var shopListStr = sessionStorage.getItem('shopList');
				//	if (shopListStr !== null) {
				//		return JSON.parse(shopListStr);
				//	}
				//}
			}
		},

		sessionUtilities: function() {
			return {
				setUserInfo: function(userInfo) {
					if (typeof(userInfo) === 'object')
						sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
				},
				getUserInfo: function() {
					var userInfoStr = sessionStorage.getItem('userInfo');
					if (userInfoStr === null) {
						location.href = 'login.html';
					} else {
						return JSON.parse(userInfoStr);		/* JSON 字符串转换成对象*/
					}
				},
				clearUserInfo: function() {
					sessionStorage.removeItem('userInfo');
				},

				setShopList: function(shopArr) {
					if (typeof(shopArr) === 'object')
						sessionStorage.setItem('shopList', JSON.stringify(shopArr));
				},
				getShopList: function() {
					var shopListStr = sessionStorage.getItem('shopList');
					if (shopListStr !== null) {
						return JSON.parse(shopListStr);
					}
				}
			}
		}

	}
});