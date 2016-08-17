require.config({
	baseUrl: 'js/',
	paths: {
		'constant': 'common/constant'
	},
	shim: {}
});

require(['constant'], function(CONSTANT) {
	function keydown(e) {
		if (e.keyCode === 13) {
			login();
		}
	}

	function login() {
		var userName = document.getElementById('username').value;
		var passWord = document.getElementById('password').value;

		var xmlhttp;
		if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var response = eval('(' + xmlhttp.responseText + ')');
					console.log(response);
					if (response.code === 0) {
						sessionStorage.setItem('userInfo', JSON.stringify(response.data));
						var a = sessionStorage.getItem('userInfo');
						console.log(a);
						location.href = '/index.html';
					} else {
						alert(response.msg);
					}
				}
			}
		//xmlhttp.open('POST', CONSTANT.SERVER_HOST + '/back/seller/signin.do?userName=' + userName + '&passwd=' + passWord, true);
		xmlhttp.open('GET',CONSTANT.SERVER_HOST + '/login?username=' + userName +'&password=' + passWord, true);
		xmlhttp.send();
	}

	window.keydown = keydown;
	window.login = login;
});