$(document).ready(function() {
	hljs.initHighlightingOnLoad();
	$('a').each(function() {
		var link = $(this).attr('href');
		if (link && (link.indexOf('//') == 0 || link.indexOf('http') == 0)) {
			$(this).attr('target', '_blank');
		}
		if (link && link.indexOf('#') == 0 && $(this).parents('#content').length > 0) {
			$(this).addClass('no-page');
		}
	});

	$('pre code').codeFolding();

	$('table').sortableTable();

	var pushHeader = function(toc, header, depth) {
		if (depth > 1 && toc.length > 0) {
			pushHeader(toc[toc.length-1].children, header, depth-1);
		} else {
			toc.push({selector: $(header), children: []});
		}
	};
	var appendHeader = function($parent, toc) {
		var $toc = $('<ol></ol>');
		for (var i=0; i<toc.length; i++) {
			var header = toc[i];
			var $header = $('<li></li>');
			if (header.children.length > 0) {
				appendHeader($header, header.children);
			}
			$header.prepend('<a href="#' + header.selector.prev().attr('name') + '">' + header.selector.text().trim() + '</a>');
			$toc.append($header);
		}
		$parent.prepend($toc);
	};

	var tableOfContents = [];
	$('#content .inner').first().find('h2, h3, h4, h5, h6').each(function() {
		$(this).before('<a name="'+$(this).text().trim().replace(/ /g, '-').replace(/[^a-z0-9\-]+/ig, '')+'"></a>');
		switch($(this).prop('tagName').toLowerCase()) {
			case 'h2': pushHeader(tableOfContents, this, 1); break;
			case 'h3': pushHeader(tableOfContents, this, 2); break;
			case 'h4': pushHeader(tableOfContents, this, 3); break;
			case 'h5': pushHeader(tableOfContents, this, 4); break;
			case 'h6': pushHeader(tableOfContents, this, 5); break;
		}
	});
	//console.log(tableOfContents);
	if (tableOfContents.length > 1) {
		var $toc = $('<div id="table-of-contents" class="collapse toc"></div>');
		appendHeader($toc, tableOfContents);
		$toc.append('<hr/>');

		var $inner = $('#content .inner');
		$inner.prepend($toc);
		$inner.prepend('<h2>Contents <a href="#table-of-contents" data-toggle="collapse" title="Show / Hide" class="toggle-collpase collapsed"><span class="hide">Toggle</span></h2>');
	}
});

$.fn.codeFolding = function() {
	return this.each(function() {
		var target = this;
		var $code = $(this).parent();
		if ($code.height() < 100) return;
		$code.addClass('collapse').addClass('collapsed');
		$code.append('<a href="#" class="expand-code">Expand <i class="fa fa-caret-down"></i></a>');
		$code.find('.expand-code').on('click', function(e) {
			e.preventDefault();
			$code.toggleClass('collapsed');
			$(this).html($code.is('.collapsed') ? 'Expand <i class="fa fa-caret-down"></i>' : 'Collapse <i class="fa fa-caret-up"></i>');
		});
	});
};

$.fn.sortableTable = function(options) {
	if (options == undefined) options = {};
	return this.each(function() {
		var target = $(this);
		target.data($.extend({format: 'string', sort: 'asc', ignoreCase: true}, options));

		target.find('thead tr').first().children().each(function(index) {
			var targetHead = $(this);
			targetHead.data($.extend(targetHead.data(), {sortable: true, index: index, format: target.data('format')}));
			if (targetHead.data('sortable')) {
				var sort = target.data('sort') == 'desc' ? 'up' : 'down';
				var html = '<a href="#" class="sort-option">'
					+targetHead.text().trim()
					+' <i class="fa fa-'+(targetHead.is('.active') ? 'cart-'+sort : 'sort')+'"></i>'
					+'</a>';
				targetHead.html(html).find('a').on('click', function(e) {
					e.preventDefault();
					target.find('thead .sort-option').each(function() {
						if ($(this).parent().is(targetHead)) {
							sort = $(this).find('i').hasClass('fa-caret-down');
							target.find('tbody').append(target.find('tbody tr').sort(function(a, b) {
								var cella = $(a).children().removeClass('active').eq(targetHead.data('index')).addClass('active');
								var cellb = $(b).children().removeClass('active').eq(targetHead.data('index')).addClass('active');
								var dir = sort ? -1 : 1;
								//console.log(targetHead.data('format')+'\n'+cella.text()+'\n'+cellb.text());
								var test = 0;
								var testvala = cella.data('value') !== undefined ? ''+cella.data('value') : cella.text();
								var testvalb = cellb.data('value') !== undefined ? ''+cellb.data('value') : cellb.text();
								//console.log(testvala+' | '+testvalb);
								switch(targetHead.data('format')) {
									case 'number': test = parseFloat(testvala) - parseFloat(testvalb); break;
									case 'date':
										var datea = new Date(testvala);
										var dateb = new Date(testvalb);
										//console.log(datea);
										//console.log(dateb);
										//console.log('==');
										test = datea.getTime() - dateb.getTime();
										break;
									case 'string':default: test = testvala.localeCompare(testvalb); break;
								}
								return dir * test;
							}));

							$(this).parent().addClass('active');
							$(this).find('i').attr('class', 'fa fa-caret-'+(sort ? 'up' : 'down'));
						} else {
							$(this).parent().removeClass('active');
							$(this).find('i').attr('class', 'fa fa-sort');
						}
					});
				});
			}
		});
	});
};

// Implement Wiki Search
angular.module('wiki-search', [])
	.directive('wikiSearch', function($location, RootPath) {
		return {
			templateUrl: RootPath+'/templates/wiki-search.html'
		};
	})
	.controller('SearchCtrl', function($scope, $http, $timeout, $document, SearchData, RootPath) {
		//console.log('SearchCtrl');
		$scope.searchResults = [];

		var searchCache = [];
		for (var i=0; i<SearchData.length; i++) {
			var searchEntry = SearchData[i];
			var path = searchEntry.path.replace('.html', '').replace('/index', '');
			//console.log(searchEntry);
			var url = RootPath+'/'+path;
			var title = url.slice(url.lastIndexOf('/')+1).replace('-', ' ');
			if (!title) title = 'Home';

			var tags = [];
			angular.forEach(path.replace('docs/', '').split('/'), function(value) {
				tags.push(value.replace('-', ' '));
			});
			tags.reverse();
			if (tags.length == 1) tags.push('Page');
			tags.push(searchEntry.headers.join(' ').replace(/'s/ig, 's').replace(/[^a-z0-9]/ig, ' ').replace(/\s+/g, ' '));

			searchCache.push({
				url: url,
				title: searchEntry.title ? searchEntry.title : title,
				tags: tags
			});
		}

		$scope.searchVisible = false;
		$scope.searchToggle = function(state) {
			if (!state) {
				$timeout(function() {
					$scope.searchVisible = state;
				}, 300);
			} else {
				$scope.searchVisible = state;
			}
		};

		$scope.searchFilter = function() {
			$scope.searchResults = [];

			var matches = [];
			var search = $scope.search.toLowerCase().replace(/'s/ig, 's').replace(/[^a-z0-9]/ig, ' ').replace(/\s+/ig, ' ');

			if (search.length < 2) return;

			for (var i=0; i<searchCache.length; i++) {
				for(var j=0; j<searchCache[i].tags.length; j++) {
					if (searchCache[i].tags[j].toLowerCase().indexOf(search) != -1) {
						//console.log('Match('+j+')', searchCache[i]);
						matches.push({
							title: searchCache[i].title,
							url: searchCache[i].url,
							priority: j,
							tags: searchCache[i].tags
						});
						break;
					}
				}
			}

			matches.sort(function(a, b) {
				var result = a.priority-b.priority;
				if (result == 0) {
					result = a.tags[a.priority].toLowerCase().indexOf(search) - b.tags[b.priority].toLowerCase().indexOf(search);
				}
				if (result == 0) {
					result = a.title.localeCompare(b.title);
				}
				return result;
			});
			$scope.searchResults = matches;
		};

		$document.bind('keydown keypress', function(event) {
			if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;
			//console.log(event);
			var input = angular.element('#wiki-search input');
			if ($scope.searchVisible || !angular.element($document[0].activeElement).is('body')) return;
			input.focus();
		});
	})
;

// Implement Wiki App Search
angular.module('wiki-apps', [])
	.controller('AppSearchCtrl', function($scope, $http, $location) {
		console.log('AppSearchCtrl');

		var rootPath = $location.absUrl().split('/docs')[0].replace(/\/+$/, '');

		$scope.apps = [];

		function shuffleArray(array) {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		}

		$http.get(rootPath+'/data/apps.json?'+new Date().getTime()).then(function(response) {
			//console.log(response.data);
			var apps = [];
			for (var i=0; i<response.data.length; i++) {
				var app = response.data[i];
				if (app.hide) continue;
				apps.push(app);
			}
			$scope.apps = shuffleArray(apps);
			//$scope.apps = [response.data[0], response.data[0], response.data[0], response.data[0]];
		});


	})
	.directive('appEntry', function() {
		return {
			scope: {
				app: '=appEntry'
			},
			link: function(scope, elem) {
				var app = scope.app;
				console.log(app, elem);

				var links = [];

				function cleanUrl(url, domain) {
					if (domain !== undefined && url.indexOf(domain) == -1) url = domain+'/'+url;
					if (url.indexOf('http') == -1) url = 'http://'+url;
					return url;
				}

				if (app.website) links.push('<a href="'+cleanUrl(app.website)+'" target="_blank"><span class="fa fa-globe"></span></a>');
				if (app.twitter) links.push('<a href="'+cleanUrl(app.twitter, 'twitter.com')+'" target="_blank"><span class="fa fa-twitter"></span></a>');

				elem.html(
					'<div class="app-banner"'+(app.banner ? 'style="background-image: url('+rootPath+'/images/'+app.banner+');"' : '')+'></div>'
					+'<div class="app-tile-name">'+app.name+'</div>'
					+'<div class="app-links">'+links.join('', links)+'</div>'
				);
			}
		};
	})
;

angular.bootstrap().invoke(function($http, $location) {
	var rootPath = $location.absUrl().split('/docs')[0].replace(/\/+$/, '');
	var jsonDatas = [
		{url: rootPath+'/data/search.json', name: 'SearchData'}
	];

	angular.module('wiki-search').value('RootPath', rootPath);

	var loaded = 0;
	angular.forEach(jsonDatas, function (jsonData) {
		$http.get(jsonData.url).then(function (response) {
			//console.log('Loaded: ', jsonData.name, response.data);
			angular.module('wiki-search').value(jsonData.name, response.data);
			loaded++;
			if (loaded == jsonDatas.length) {
				angular.bootstrap(angular.element('#wiki-search'), ['wiki-search']);
			}
		});
	});

	angular.bootstrap(angular.element('#wiki-apps'), ['wiki-apps']);
});