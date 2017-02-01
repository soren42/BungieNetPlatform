angular.module('api-test', [])
	.directive('apiTest', function() {
		return {
			templateUrl: '../templates/api-test.html'
		};
	})
	.directive('syntaxHighlight', function($compile, $timeout) {
		return {
			scope: {
				syntaxHighlight: '='
			},
			transclude: true,
			link: function(scope, elem, attrs) {
				scope.$watch('syntaxHighlight', function() {
					elem.empty();

					//console.log(scope.syntaxHighlight);

					if (scope.syntaxHighlight) {
						var code = JSON.stringify(scope.syntaxHighlight, null, 4);
						elem.append('<code class="'+attrs.language+'">'+code+'</code>');
						$compile(elem.contents())(scope);
						var codeElem = elem[0].querySelector('code');
						hljs.highlightBlock(codeElem);
						$timeout(function() {
							$(codeElem).codeFolding();
						}, 100);
					}
				}, true);
			}
		};
	})
	.filter('html', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.controller('ApiCtrl', function($scope, $http, $httpParamSerializer, $location, $interval, ApiData, ApiEnums) {
		var bnetBase = 'https://www.bungie.net/Platform';
		var apiKey = 'a0a87d8c3a72414bbb978bd8c175b1cb';

		$scope.authorizeUrl = 'https://www.bungie.net/en/Application/Authorize/11451';
		$scope.authCode = null;
		$scope.authWindow = false;

		var url = window.location.href.split('?');
		if (url.length > 1) {
			var params = url[1].split('&');
			angular.forEach(params, function(param) {
				param = param.split('=');
				var key = param[0];
				var value = param.length > 1 ? param[1] : '';
				console.log(key+'='+value);
				switch(key) {
					case 'code':
						$scope.authCode = value;
						break;
				}
			});
		}

		$scope.authorize = function() {
			var child = window.open($scope.authorizeUrl);
			var interval = setInterval(function() {
				if (child.closed) {
					console.log('Finished');
					clearInterval(interval);
					return;
				}
				child.postMessage({message: 'getResult'}, '*');
			}, 100);
		};

		$scope.getAccessTokensFromCode = function() {
			$scope.showAccessTokenRequest = true;
			return $http({
				method: 'POST',
				url: bnetBase+'/App/GetAccessTokensFromCode/',
				headers: {
					'X-API-Key': $scope.apiKey ? $scope.apiKey : apiKey,
					'Content-Type': 'application/json; charset=UTF-8;'
				},
				data: JSON.stringify({
					code: $scope.authCode
				}),
				transformRequest: false

			}).then(function(response) {
				var data = response.data;
				console.log('GetAccessTokensFromCode', data);

				$scope.accessTokensResponse = JSON.stringify(data, null, 4);

				if (data.ErrorCode == 1) {
					var time = new Date().getTime();
					tokens.accessToken = data.Response.accessToken.value;
					tokens.accessTokenReadyDate = time+data.Response.accessToken.readyin*1000;
					tokens.accessTokenExpiryDate = time+data.Response.accessToken.expires*1000;
					tokens.refreshToken = data.Response.refreshToken.value;
					tokens.refreshTokenReadyDate = time+data.Response.refreshToken.readyin*1000;
					tokens.refreshTokenExpiryDate = time+data.Response.refreshToken.expires*1000;
					tokens.scope = data.Response.scope;

					localStorage.setItem('tokens', JSON.stringify(tokens));

					//$scope.test();
				}
				return data.ErrorCode == 1;
			});
		};

		var tokens = {
			accessToken: null,
			accessTokenReadyDate: 0,
			accessTokenExpiryDate: 0,
			refreshToken: null,
			refreshTokenReadyDate: 0,
			refreshTokenExpiryDate: 0,
			scope: 0
		};

		var savedTokens = localStorage.getItem('tokens');
		if (savedTokens) tokens = JSON.parse(savedTokens);

		console.log('Tokens', tokens);

		window.addEventListener('message', function(e) {
			//console.log('Message', e);
			if (e.data.message === "getResult" && !$scope.authWindow && $scope.authCode !== null) {
				console.log('GetResult');
				$scope.authWindow = true;
				$scope.getAccessTokensFromCode().then(function() {
					window.opener.location.reload();
					window.close();
				});
			}
		});

		$scope.accessTokensResponse = null;

		$scope.tokens = tokens;

		function timeRemaining(time) {
			var now = new Date().getTime();
			var diff = time-now;
			var days = Math.floor(diff/24/60/60/1000);
			var hours = Math.floor((diff-(days*24*60*60*1000))/60/60/1000);
			var mins = Math.floor((diff-((days*24+hours)*60*60*1000))/60/1000);
			var secs = Math.floor((diff-(((days*24+hours)*60+mins)*60*1000))/1000);
			return  (days ? days+'d ' : '')+(days || hours ? hours+'h ' : '')+mins+'m '+secs+'s';
		}

		function isExpired(time) {
			var now = new Date().getTime();
			var diff = time-now;
			return diff < 0;
		}

		$scope.accessTokenTime = '';
		$scope.refreshTokenTime = '';

		function renderTime() {
			if (tokens.accessToken) {
				$scope.accessTokenTime = isExpired(tokens.accessTokenExpiryDate) ? 'is expired' : 'will expire in <strong>'+timeRemaining(tokens.accessTokenExpiryDate)+'</strong>';
				$scope.refreshTokenTime = isExpired(tokens.refreshTokenExpiryDate) ? 'is expired' : 'will expire in <strong>'+timeRemaining(tokens.refreshTokenExpiryDate)+'</strong>';
			}
		}

		$interval(renderTime, 500);
		renderTime();

		$scope.test = function() {
			$scope.testResponse = null;

			$scope.isRequesting = true;
			$http({
				method: 'GET',
				url: bnetBase+'/User/GetCurrentBungieNetUser/',
				headers: {
					'X-API-Key': $scope.apiKey ? $scope.apiKey : apiKey,
					'Authorization': 'Bearer '+tokens.accessToken
				}
			}).then(function(response) {
				$scope.isRequesting = false;
				var data = response.data;
				console.log('GetCurrentBungieNetUser', data);

				//$scope.test.response = response;//JSON.stringify(data, null, 4);

				if (data.ErrorCode == 1) {
					$scope.username = data.Response.displayName;
				} else {
					$scope.username = null;
				}
			});
		};

		if (tokens.accessToken && !isExpired(tokens.accessTokenExpiryDate)) $scope.test();

		$scope.getAccessTokensFromRefreshToken = function() {
			$scope.isRequestingToken = true;
			$http({
				method: 'POST',
				url: bnetBase+'/App/GetAccessTokensFromRefreshToken/',
				headers: {
					'X-API-Key': $scope.apiKey ? $scope.apiKey : apiKey
				},
				data: JSON.stringify({
					refreshToken: tokens.refreshToken
				}),
				transformRequest: false
			}).then(function(response) {
				$scope.isRequestingToken = false;
				var data = response.data;
				console.log('GetAccessTokensFromRefreshToken', data);

				$scope.test.response = response;//JSON.stringify(data, null, 4);

				if (data.ErrorCode == 1) {
					var time = new Date().getTime();
					tokens.accessToken = data.Response.accessToken.value;
					tokens.accessTokenReadyDate = time+data.Response.accessToken.readyin*1000;
					tokens.accessTokenExpiryDate = time+data.Response.accessToken.expires*1000;
					tokens.refreshToken = data.Response.refreshToken.value;
					tokens.refreshTokenReadyDate = time+data.Response.refreshToken.readyin*1000;
					tokens.refreshTokenExpiryDate = time+data.Response.refreshToken.expires*1000;
					tokens.scope = data.Response.scope;

					localStorage.setItem('tokens', JSON.stringify(tokens));
				}
			});
		};

		// ====================================================================================================
		// API Test Code

		$scope.params = {
			path: {},
			query: {},
			json: {}
		};

		$scope.endpoints = [];
		$scope.services = [];
		for (var serviceName in ApiData) {
			$scope.services.push(serviceName);
		}
		$scope.services.sort();

		var hasDefaults = false;
		$scope.loadShare = function (share) {
			if (!share) return;
			//console.log('Share', share);

			share = share.split('/').slice(1);

			for (var serviceName in ApiData) {
				var service = ApiData[serviceName];
				for (var i = 0; i < service.length; i++) {
					var endpoint = service[i];
					if (endpoint.name == share[0]) {
						$scope.service = serviceName;
						$scope.endpoint = endpoint;

						$scope.params.path = {};
						$scope.params.query = {};
						$scope.params.json = {};

						hasDefaults = share.length > 1;

						for (var j = 1; j < share.length; j++) {
							var type = share[j].slice(0, 1);
							var paramData = false;
							switch (type) {
								case 'p': paramData = $scope.params.path; break;
								case 'q': paramData = $scope.params.query; break;
								case 'j': paramData = $scope.params.json; break;
							}
							if (!paramData) return;

							var params = share[j].slice(2).split(',');
							for (var k = 0; k < params.length; k++) {
								var param = params[k].split('=');
								var paramKey = param[0];
								var paramValue = decodeURIComponent(param[1]);
								if (paramValue.replace(/[0-9]+/g, '') == '' && paramValue.length <= 8 && !isNaN(parseInt(paramValue))) {
									paramValue = parseInt(paramValue);
								}
								paramData[paramKey] = paramValue;
							}
						}
						//console.log('Share Params', $scope.params);
						break;
					}
				}
			}
		};

		$scope.$on('$locationChangeStart', function (event) {
			$scope.loadShare($location.url());
		});

		if (!$location.url()) $scope.loadShare('/GetDestinyManifest');

		$scope.$watch('apiKey', function (userApiKey) {
			$scope.buildRequest();
		});

		$scope.$watch('service', function (service) {
			//console.log('Changed Service', service);
			if (service == undefined) return;

			$scope.endpoints = [];
			for (var i = 0; i < ApiData[service].length; i++) {
				ApiData[service][i].service = service;
				$scope.endpoints.push(ApiData[service][i]);
			}
			if ($scope.endpoints.indexOf($scope.endpoint) == -1) {
				$scope.endpoint = $scope.endpoints[0];
			}
		});

		$scope.$watch('endpoint', function (endpoint) {
			//console.log('Changed Endpoint', endpoint);
			if (endpoint == undefined) return;

			if (!hasDefaults) {
				$scope.params.path = {};
				$scope.params.query = {};
				$scope.params.json = {};
			}
			hasDefaults = false;
			$scope.buildRequest();
		});

		$scope.$watchCollection('params.path', function () {
			//console.log('Path Parameters Changed', $scope.params.path);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.query', function () {
			//console.log('Query Parameters Changed', $scope.params.query);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.json', function () {
			//console.log('JSON POST Parameters Changed', $scope.params.json);
			$scope.buildRequest();
		});

		$scope.request = function () {
			var options = $scope.buildRequest();

			console.log('Request', options);

			$scope.isRequesting = true;
			$http(options).then(function (response) {
				response.status = response.headers('x-status');
				console.log('Response', {
					status: response.status,
					headers: response.headers(),
					data: response.data
				});
				$scope.isRequesting = false;
				$scope.test.response = response;
			});
		};

		$scope.fieldOptions = function (link) {
			var options = [];
			link = link.split('#');
			switch (link[0]) {
				case 'Enums':
					if (ApiEnums[link[1]]) {
						options = ApiEnums[link[1]];
					}
					break;
			}
			//console.log(link, options);
			return options;
		};

		$scope.hasParams = function (params) {
			if (params == null) return 0;
			return Object.keys(params).length;
		};

		$scope.buildRequest = function () {
			if ($scope.endpoint == undefined) return;

			//var requestUrl = $scope.proxy.url;
			var headers = {};
			headers['X-API-Key'] = $scope.apiKey ? $scope.apiKey : apiKey;
			if (tokens.accessToken) headers['Authorization'] = 'Bearer '+tokens.accessToken;

			/*$http({
				method: 'GET',
				url: bnetBase+'/User/GetCurrentBungieNetUser/',
				headers: {
					'X-API-Key': apiKey,
					'Authorization': 'Bearer '+tokens.accessToken
				}
			}).then(function(response) {
				var data = response.data;
				console.log('GetCurrentBungieNetUser', data);

				$scope.testResponse = JSON.stringify(data, null, 4);

				if (data.ErrorCode == 1) {
					$scope.username = data.Response.displayName;
				} else {
					$scope.username = null;
				}
			});*/

			var params = $scope.params;

			//console.log(params);

			var url = bnetBase/*'/Platform'*/ + $scope.endpoint.endpoint;
			for (var key in params.path) {
				url = url.replace('{' + key + '}', params.path[key]);
			}
			var filteredQuery = {};
			for (var key in params.query) {
				if (params.query[key] && params.query[key] != '') filteredQuery[key] = params.query[key];
			}
			var query = $httpParamSerializer(filteredQuery);
			if (query) url += '?' + query;

			var options = {
				method: $scope.endpoint.method,
				url: /*requestUrl + */url,
				path: url,
				withCredentials: true,
				headers: headers
			};

			if (Object.keys(params.json).length > 0) {
				options.data = {};
				for (var paramKey in params.json) {
					var paramKeyPath = paramKey.split('.');
					var dataObj = options.data;
					for (var i = 0; i < paramKeyPath.length; i++) {
						if (i + 1 < paramKeyPath.length) {
							dataObj[paramKeyPath[i]] = {};
							dataObj = dataObj[paramKeyPath[i]];
						} else {
							dataObj[paramKeyPath[i]] = params.json[paramKey];
						}
					}
				}
			}

			var shareLink = $location.absUrl().split('#')[0] + '#/' + $scope.endpoint.name;
			for (var key in params) {
				var paramsData = params[key];
				if (Object.keys(paramsData).length == 0) continue;
				switch (key) {
					case 'path':
						shareLink += '/p:';
						break;
					case 'query':
						shareLink += '/q:';
						break;
					case 'json':
						shareLink += '/j:';
						break;
				}
				var paramsShare = [];
				for (var paramKey in paramsData) {
					if (paramsData[paramKey] && paramsData[paramKey] != '') {
						paramsShare.push(paramKey + '=' + encodeURIComponent(paramsData[paramKey]));
					}
				}
				shareLink += paramsShare.join(',');
			}

			$scope.test = {
				share: shareLink,
				request: options,
				response: null
			};

			return options;
		};

	})
	.controller('ApiCtrlOld', function($scope, $http, $httpParamSerializer, $location, ApiData, ApiEnums) {
		//console.log('ApiCtrl');

		$scope.apiKey = '';
		$scope.params = {
			path: {},
			query: {},
			json: {}
		};

		$scope.isReauth = false;
		$scope.isRequesting = false;

		$scope.proxies = [
			{
				id: "bnetwikiProxy",
				name: "bnetwiki-proxy.herokuapp.com (Requires API Key)",
				url: "https://bnetwiki-proxy.herokuapp.com",
				apiKeyRequired: true
			}/*,
			{
				id: "bungieProxy",
				name: "bungie-proxy.herokuapp.com",
				url: "https://bungie-proxy.herokuapp.com",
				apiKeyRequired: false
			}*/
		];
		$scope.proxy = $scope.proxies[0];

		$scope.endpoints = [];
		$scope.services = [];
		for (var serviceName in ApiData) {
			$scope.services.push(serviceName);
		}
		$scope.services.sort();

		var hasDefaults = false;
		$scope.loadShare = function (share) {
			if (!share) return;
			//console.log('Share', share);

			share = share.split('/').slice(1);

			for (var serviceName in ApiData) {
				var service = ApiData[serviceName];
				for (var i = 0; i < service.length; i++) {
					var endpoint = service[i];
					if (endpoint.name == share[0]) {
						$scope.service = serviceName;
						$scope.endpoint = endpoint;

						$scope.params.path = {};
						$scope.params.query = {};
						$scope.params.json = {};

						hasDefaults = share.length > 1;

						for (var j = 1; j < share.length; j++) {
							var type = share[j].slice(0, 1);
							var paramData = false;
							switch (type) {
								case 'p':
									paramData = $scope.params.path;
									break;
								case 'q':
									paramData = $scope.params.query;
									break;
								case 'j':
									paramData = $scope.params.json;
									break;
							}
							if (!paramData) return;

							var params = share[j].slice(2).split(',');
							for (var k = 0; k < params.length; k++) {
								var param = params[k].split('=');
								var paramKey = param[0];
								var paramValue = decodeURIComponent(param[1]);
								if (paramValue.replace(/[0-9]+/g, '') == '' && paramValue.length <= 8 && !isNaN(parseInt(paramValue))) {
									paramValue = parseInt(paramValue);
								}
								paramData[paramKey] = paramValue;
							}
						}
						//console.log('Share Params', $scope.params);
						break;
					}
				}
			}
		};

		$scope.$on('$locationChangeStart', function (event) {
			$scope.loadShare($location.url());
		});

		if (!$location.url()) $scope.loadShare('/GetDestinyManifest');

		$scope.$watchGroup(['proxy', 'apiKey'], function (proxy) {
			$scope.buildRequest();
		});

		$scope.$watch('service', function (service) {
			//console.log('Changed Service', service);
			if (service == undefined) return;

			$scope.endpoints = [];
			for (var i = 0; i < ApiData[service].length; i++) {
				ApiData[service][i].service = service;
				$scope.endpoints.push(ApiData[service][i]);
			}
			if ($scope.endpoints.indexOf($scope.endpoint) == -1) {
				$scope.endpoint = $scope.endpoints[0];
			}
		});

		$scope.$watch('endpoint', function (endpoint) {
			//console.log('Changed Endpoint', endpoint);
			if (endpoint == undefined) return;

			if (!hasDefaults) {
				$scope.params.path = {};
				$scope.params.query = {};
				$scope.params.json = {};
			}
			hasDefaults = false;
			$scope.buildRequest();
		});

		$scope.$watchCollection('params.path', function () {
			//console.log('Path Parameters Changed', $scope.params.path);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.query', function () {
			//console.log('Query Parameters Changed', $scope.params.query);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.json', function () {
			//console.log('JSON POST Parameters Changed', $scope.params.json);
			$scope.buildRequest();
		});

		$scope.reauthPlatform = 'Psnid';

		$scope.reauthValid = {};
		for (var i = 0; i < $scope.proxies.length; i++) {
			var proxy = $scope.proxies[i];
			var apiAuth = localStorage.getItem(proxy.id);
			apiAuth = apiAuth ? parseInt(apiAuth) : 0;
			$scope.reauthValid[proxy.id] = new Date().getTime() < apiAuth;
		}

		$scope.reauth = function () {
			//console.log('Reauth', $scope.proxy);
			var proxyUrl = $scope.proxy.url;
			//proxyUrl = 'http://localhost:5000';
			$scope.isReauth = true;
			$http({
				method: 'GET',
				url: proxyUrl + '/Reauth/' + $scope.reauthPlatform + '/',
				withCredentials: true,
				headers: {
					'x-bungleatk': $scope.bungleatk
				}
			}).then(function (response) {
				//console.log(response, response.headers());
				$scope.isReauth = false;
				if (response.headers('x-status') == '200') {
					localStorage.setItem($scope.proxy.id, new Date().getTime() + (14 * 24 * 60 * 60 * 1000));
					$scope.reauthValid[$scope.proxy.id] = true;
				}
			});
		};

		$scope.request = function () {
			var options = $scope.buildRequest();

			console.log('Request', options);

			$scope.isRequesting = true;
			$http(options).then(function (response) {
				response.status = response.headers('x-status');
				console.log('Response', {
					status: response.status,
					headers: response.headers(),
					data: response.data
				});
				$scope.isRequesting = false;
				$scope.test.response = response;
			});
		};

		$scope.fieldOptions = function (link) {
			var options = [];
			link = link.split('#');
			switch (link[0]) {
				case 'Enums':
					if (ApiEnums[link[1]]) {
						options = ApiEnums[link[1]];
					}
					break;
			}
			//console.log(link, options);
			return options;
		};

		$scope.hasParams = function (params) {
			if (params == null) return 0;
			return Object.keys(params).length;
		};

		$scope.buildRequest = function () {
			if ($scope.endpoint == undefined) return;

			var proxyUrl = $scope.proxy.url;
			var headers = {};
			if ($scope.apiKey) headers['x-api-key'] = $scope.apiKey;

			var params = $scope.params;

			//console.log(params);

			var url = '/Platform' + $scope.endpoint.endpoint;
			for (var key in params.path) {
				url = url.replace('{' + key + '}', params.path[key]);
			}
			var filteredQuery = {};
			for (var key in params.query) {
				if (params.query[key] && params.query[key] != '') filteredQuery[key] = params.query[key];
			}
			var query = $httpParamSerializer(filteredQuery);
			if (query) url += '?' + query;

			var options = {
				method: $scope.endpoint.method,
				url: proxyUrl + url,
				path: url,
				withCredentials: true,
				headers: headers
			};

			if (Object.keys(params.json).length > 0) {
				options.data = {};
				for (var paramKey in params.json) {
					var paramKeyPath = paramKey.split('.');
					var dataObj = options.data;
					for (var i = 0; i < paramKeyPath.length; i++) {
						if (i + 1 < paramKeyPath.length) {
							dataObj[paramKeyPath[i]] = {};
							dataObj = dataObj[paramKeyPath[i]];
						} else {
							dataObj[paramKeyPath[i]] = params.json[paramKey];
						}
					}
				}
			}

			var shareLink = $location.absUrl().split('#')[0] + '#/' + $scope.endpoint.name;
			for (var key in params) {
				var paramsData = params[key];
				if (Object.keys(paramsData).length == 0) continue;
				switch (key) {
					case 'path':
						shareLink += '/p:';
						break;
					case 'query':
						shareLink += '/q:';
						break;
					case 'json':
						shareLink += '/j:';
						break;
				}
				var paramsShare = [];
				for (var paramKey in paramsData) {
					if (paramsData[paramKey] && paramsData[paramKey] != '') {
						paramsShare.push(paramKey + '=' + encodeURIComponent(paramsData[paramKey]));
					}
				}
				shareLink += paramsShare.join(',');
			}

			$scope.test = {
				share: shareLink,
				request: options,
				response: null
			};

			return options;
		};
	})
;

angular.element(document).ready(function() {
	angular.bootstrap().invoke(function($http) {
		var jsonDatas = [
			{url: '../data/api-data.json', name: 'ApiData'},
			{url: '../data/enums.json', name: 'ApiEnums'}
		];
		var loaded = 0;
		angular.forEach(jsonDatas, function (jsonData) {
			$http.get(jsonData.url).then(function (response) {
				//console.log('Loaded: ', jsonData.name, response.data);
				angular.module('api-test').value(jsonData.name, response.data);
				loaded++;
				if (loaded == jsonDatas.length) {
					angular.bootstrap(angular.element('#api-test'), ['api-test']);
				}
			});
		});
	});
});