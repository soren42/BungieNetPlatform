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
	.directive('paramField', function($compile, OpenApi) {
		return {
			scope: {
				paramField: '=paramField',
				paramModel: '=paramModel',
				paramModelId: '=paramModelId'
			},
			link: function(scope, elem, attrs) {

				scope.updateValue = function(value, isUndefined) {
					if (isUndefined == undefined) isUndefined = false;

					var paramField = scope.paramField;
					console.log('UpdateValue', value, paramField);
					if (scope.paramModel !== undefined) {
						if (isUndefined && scope.paramModel[scope.paramModelId] != undefined) return;
						scope.paramModel[scope.paramModelId] = value;

					} else if (paramField.in && paramField.name) {
						if (isUndefined && scope.$parent.params[paramField.in][paramField.name] != undefined) return;
						scope.$parent.params[paramField.in][paramField.name] = value;
					}
				};

				scope.getValue = function(defaultValue) {
					var paramField = scope.paramField;

					var value = defaultValue;

					if (scope.paramModel !== undefined) {
						value = scope.paramModel[scope.paramModelId];
					} else if (paramField.in && paramField.name) {
						value = scope.$parent.params[paramField.in][paramField.name];
					}

					console.log('GetValue', value, defaultValue);

					if (paramField.schema && paramField.schema.type == 'array') {
						if (value == undefined) value = [value];
						if (typeof value == 'string') value = value.split(',');
					}
					return value;
				};

				scope.$watch('paramField', function(paramField) {
					//console.log('ParamField', paramField);

					var paramFieldModel = '$parent.params.'+paramField.in+'.'+paramField.name;

					if (scope.paramModel !== undefined) {
						//console.log('ParamFieldModel', attrs.paramModel, scope.paramModel);
						paramFieldModel = 'paramModel['+scope.paramModelId+']';
					}

					var html = '<input type="text" ng-model="'+paramFieldModel+'" placeholder="" class="form-control"'+(paramField.required ? ' required' : '')+' />';

					if (paramField.schema) {
						var schema = paramField.schema;
						//console.log('ParamFieldSchema', schema);
						if (schema.$ref) {
							var ref = schema.$ref.split('/');
							var schemaRef = OpenApi.components.schemas[ref[ref.length-1]];
							//console.log('ParamFieldSchemaRef', schemaRef);
							schema = schemaRef;
						}

						var typeName = schema.type.slice(0, 1).toUpperCase()+schema.type.slice(1)+(schema.format ? ' / '+schema.format : '');

						switch(schema.type) {
							case 'integer':
								if (schema.enum != undefined) {
									var defaultValue = '0';

									html = '<select ng-model="'+paramFieldModel+'"'+(paramField.required ? ' required' : '')+' class="form-control">';
									for (var i=0; i<schema['x-enum-values'].length; i++) {
										var enumInfo = schema['x-enum-values'][i];
										html += '<option value="'+enumInfo.numericValue+'">'+enumInfo.identifier+' ['+enumInfo.numericValue+']</option>';
										//if (enumInfo.numericValue == '-1') defaultValue = '-1';
									}
									html += '</select>';
									typeName = 'Enum / '+typeName;

									scope.updateValue(defaultValue, true);
								} else {
									html = '<input type="text" ng-model="'+paramFieldModel+'" placeholder="" class="form-control"'+(paramField.required ? ' required' : '')+' />';
								}
								break;
							case 'boolean':
								html = '<select ng-model="'+paramFieldModel+'"'+(paramField.required ? ' required' : '')+' ng-options="item in [false, true]" class="form-control"></select>';
								break;
							case 'array':
								html = '<div class="param-field-rows">'
									+'<div class="param-field-row" ng-repeat="arrayRow in array track by $index">'
										+'<a class="btn btn-danger" ng-click="removeRow(arrayRow)">Remove</a>'
										+'<div param-field="arrayField" param-model="array" param-model-id="$index"></div>'
									+'</div>'
								+'</div>';

								//var ref = schema.$ref.split('/');
								//var schemaRef = OpenApi.components.schemas[ref[ref.length-1]];
								//console.log('ParamFieldSchemaRef', schemaRef);

								scope.arrayField = {schema: schema.items};
								scope.array = scope.getValue([undefined]);
								scope.addRow = function() {
									scope.array.push(undefined);
								};
								scope.removeRow = function(row) {
									scope.array.splice(scope.array.indexOf(row), 1);
								};

								scope.$watch('array', function(array) {
									//console.log('ParamFieldArrayChanged', array);
									scope.updateValue(array.join(','));
								}, true);

								html += '<a class="btn btn-default" ng-click="addRow()">Add</a>';
								break;
						}

						if (typeName) html += '<span class="param-field-type">Type: '+typeName+'</span>';
					}

					elem.html(html);
					$compile(elem.contents())(scope);
				});
			}
		}
	})
	.controller('ApiCtrl', function($scope, $http, $httpParamSerializer, $location, $interval, ApiData, ApiEnums, OpenApi) {
		var bnetBase = 'https://www.bungie.net/Platform';
		var apiKey = 'a0a87d8c3a72414bbb978bd8c175b1cb';
		var authId = '11451';

		if (window.location.href.indexOf('bnet.io') != -1) {
			apiKey = 'f25edf65e0bd4414a87743a9af2c643f';
			authId = '21128';
		}

		$scope.authorizeUrl = 'https://www.bungie.net/en/Application/Authorize/'+authId;
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

		console.log('OpenApi', OpenApi);
		for (var path in OpenApi.paths) {
			var pathInfo = OpenApi.paths[path];
			var serviceName = pathInfo.summary.split('.')[0];
			pathInfo.name = pathInfo.summary.split('.')[1];
			pathInfo.service = serviceName;
			pathInfo.endpoint = path;
			pathInfo.method = pathInfo.get ? 'GET' : 'POST';

			pathInfo.path = [];
			pathInfo.query = [];

			var method = pathInfo.get ? pathInfo.get : pathInfo.post;
			for (var i=0; i<method.parameters.length; i++) {
				var param = method.parameters[i];
				switch(param.in) {
					case 'path':
						pathInfo.path.push(param);
						break;
					case 'query':
						pathInfo.query.push(param);
						break;
				}
				//pathInfo.params.push(param.name);
			}
			if ($scope.services.indexOf(serviceName) == -1) $scope.services.push(serviceName);
		}

		// Legacy Support
		for (var serviceName in ApiData) {
			//if ($scope.services.indexOf(serviceName) == -1) $scope.services.push(serviceName);
		}
		$scope.services.sort();

		var hasDefaults = false;
		$scope.loadShareDefaults = function(share) {
			$scope.params.path = {};
			$scope.params.query = {};
			$scope.params.json = {};

			//console.log('ShareDefaults', share);

			hasDefaults = share.length > 2;

			if (!hasDefaults) return;

			for (var j = 2; j < share.length; j++) {
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
					//if (paramValue.replace(/[0-9]+/g, '') == '' && paramValue.length <= 8 && !isNaN(parseInt(paramValue))) {
					//	paramValue = parseInt(paramValue);
					//}
					//console.log('Param['+paramKey+']', paramValue);
					paramData[paramKey] = paramValue;
				}
			}

			console.log('ShareDefaults', JSON.stringify($scope.params));
		};
		$scope.loadShare = function (share) {
			if (!share) return;
			console.log('Share', share);

			share = share.split('/').slice(1);

			var matched = false;
			for (var path in OpenApi.paths) {
				var pathInfo = OpenApi.paths[path];
				if (share[0]+'.'+share[1] == pathInfo.summary) {
					console.log(path);
					$scope.service = share[0];

					$scope.endpoint = pathInfo;

					$scope.loadShareDefaults(share);
					matched = true;
					break;
				}
			}

			if (matched) return;

			// Legacy Code
			for (var serviceName in ApiData) {
				var service = ApiData[serviceName];
				for (var i = 0; i < service.length; i++) {
					var endpoint = service[i];
					if (endpoint.name == share[0]) {
						$scope.service = serviceName;
						$scope.endpoint = endpoint;

						$scope.loadShareDefaults(share);
						break;
					}
				}
			}
		};

		$scope.$on('$locationChangeStart', function (event) {
			$scope.loadShare($location.url());
		});

		if (!$location.url()) $scope.loadShare('/Destiny2/GetDestinyManifest');

		$scope.$watch('apiKey', function (userApiKey) {
			$scope.buildRequest();
		});

		$scope.$watch('service', function (service) {
			if (service == undefined) return;

			console.log('Changed Service', service);

			$scope.endpoints = [];

			for (var path in OpenApi.paths) {
				var pathInfo = OpenApi.paths[path];
				var serviceName = pathInfo.summary.split('.')[0];
				if (serviceName != service) continue;
				$scope.endpoints.push(pathInfo);
			}

			// Legacy
			if (ApiData[service] != undefined) {
				for (var i = 0; i < ApiData[service].length; i++) {
					ApiData[service][i].service = service;
					$scope.endpoints.push(ApiData[service][i]);
				}
			}

			if ($scope.endpoints.indexOf($scope.endpoint) == -1) {
				$scope.endpoint = $scope.endpoints[0];
			}
		});

		$scope.$watch('endpoint', function (endpoint) {
			if (endpoint == undefined) return;

			console.log('Changed Endpoint', endpoint);

			if (endpoint.summary && endpoint.name == undefined) {
				endpoint.name = endpoint.summary.split('.')[1];
			}

			if (!hasDefaults) {
				$scope.params.path = {};
				$scope.params.query = {};
				$scope.params.json = {};
			}
			hasDefaults = false;
			$scope.buildRequest();
		});

		$scope.$watchCollection('params.path', function () {
			console.log('Path Parameters Changed', $scope.params.path);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.query', function () {
			console.log('Query Parameters Changed', $scope.params.query);
			$scope.buildRequest();
		});
		$scope.$watchCollection('params.json', function () {
			console.log('JSON POST Parameters Changed', $scope.params.json);
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
			console.log('FieldOptions', link);
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

			var params = $scope.params;

			//console.log('BuildRequest', params);

			var url = bnetBase/*'/Platform'*/ + $scope.endpoint.endpoint;

			// Legacy code
			for (var key in params.path) {
				url = url.replace('{' + key + '}', params.path[key]);
			}
			var filteredQuery = {};

			// Legacy code
			if (params.query != undefined) {
				for (var key in params.query) {
					if (params.query[key] && params.query[key] != '') filteredQuery[key] = params.query[key];
				}
			}
			var query = $httpParamSerializer(filteredQuery);
			if (query) url += '?' + query;

			var options = {
				method: $scope.endpoint.method,
				url: url,
				path: url,
				withCredentials: true,
				headers: headers
			};

			//console.log('BuildOptions', options);

			// Legacy code
			if (params.json != undefined && Object.keys(params.json).length > 0) {
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

			var shareLink = $location.absUrl().split('#')[0] + '#/' + $scope.service+'/'+$scope.endpoint.name;
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
			{url: '../data/openapi.json', name: 'OpenApi'},
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