<?php

require_once('parsedown-master/Parsedown.php');

$wikiBuilderInfo = '<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>'.LN.LN;

function updateWikiPage($path, $markdown) {
	global $wikiBuilderInfo;
	if (strpos($markdown, 'wiki-builder') === false) $markdown = $wikiBuilderInfo.$markdown;
	if (!file_exists($path) || file_get_contents($path) != $markdown) {
		echo 'Updated: '.$path.LN;
		if (!file_exists(dirname($path))) mkdir(dirname($path), 0777, true);
		file_put_contents($path, $markdown);
	}
}

function updateSection($header, $new, &$markdown) {
	$pathStart = strpos($markdown, $header);
	$pathEnd = strpos($markdown, LN.LN.'##', $pathStart);
	$pathEnd = $pathEnd === false ? strlen($markdown) : $pathEnd+1;
	$old = substr($markdown, $pathStart, $pathEnd-$pathStart);

	$markdown = str_replace($old, $header.LN.$new, $markdown);
}

function buildTableHeader($columns) {
	foreach($columns as $index => $column) {
		$columns[$index] = str_replace(' ', '_', $column);
	}
	$markdown = implode(' | ', $columns);
	$markdown .= LN.preg_replace('/[^\s\|\-]/', '-', $markdown).LN;
	$markdown = str_replace('_', ' ', $markdown);
	return $markdown;
}

function buildTableRow($columns) {
	return implode(' | ', $columns).LN;
}

function buildParameterTable($schema, $openapi, $versionPrefix) {
	$markdown = buildTableHeader(array('Name', 'Schema', 'Required', 'Description'));
	foreach($schema as $key => $schemaObject) {
		$schemaString = buildSchemaString($schemaObject->schema);
		$markdown .= buildTableRow(array(
			isset($schemaObject->name) ? $schemaObject->name : $key,
			$schemaString,
			isset($schemaObject->required) && $schemaObject->required ? 'Yes' : 'No',
			isset($schemaObject->description) ? $schemaObject->description : ''
		));
	}
	return $markdown;
}

function checkSchemaType(&$schema) {
	if (isset($schema->items)) {
		if (isset($schema->type) && $schema->type != 'array') {
			echo 'InvalidArraySchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		}
		$schema->type = 'array';
	}
	if (isset($schema->properties)) {
		if (isset($schema->type) && $schema->type != 'object') {
			echo 'InvalidObjectSchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		}
		$schema->type = 'object';
	}
	if (isset($schema->additionalProperties)) {
		if (isset($schema->type) && $schema->type != 'object') {
			echo 'InvalidObjectSchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		}
		$schema->type = 'object';
	}
	if (isset($schema->enum)) {
		if (isset($schema->type) && $schema->type != 'integer') {
			echo 'InvalidEnumSchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		}
		$schema->type = 'integer';
	}
}

$schemaCache = array();

function buildSchema($schema, $openapi, $versionPrefix, $comments=false, $depth=0, $ancestors=array()) {
	global $schemaCache;

	$result = null;
	//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;

	// Check for missing "type" property
	checkSchemaType($schema);

	if (isset($schema->{'$ref'})) {
		$ref = $schema->{'$ref'};
		$refPath = explode('/', $ref);

		if (in_array($ref, $ancestors)) {
			echo 'AncestorReference: '.$ref.LN;
			return '{}';
			//exit();
		}

		$ancestors[] = $ref;

		if (!isset($openapi->components->{$refPath[2]}->{$refPath[3]})) {
			echo 'MissingReference: '.$ref.LN;
		} else if (isset($schemaCache[$ref])) {
			$result = $schemaCache[$ref];
		} else {
			$component = $openapi->components->{$refPath[2]}->{$refPath[3]};
			//echo $indent.'[$ref:'.$ref.']: '.json_encode($component, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
			$result = buildSchema($component, $openapi, $versionPrefix, false, $depth+1, $ancestors);
			//buildSchemeComments($result, $component, $openapi, $versionPrefix);

			$schemaCache[$ref] = $result;
		}
	}
	else if (isset($schema->content)) {
		foreach($schema->content as $contentType => $content) {
			if ($result) {
				echo 'MultipleBodyContents: '.$contentType.' | '.json_encode($content, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
			}
			switch($contentType) {
				case 'application/json':
					//echo $indent.'[$content:'.$contentType.']: '.json_encode($content, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					$result = buildSchema($content->schema, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);
					$resultComments = array();
					buildSchemaComments($resultComments, $content->schema, $ancestors);
					$resultType = gettype($result);
					switch($resultType) {
						case 'object':
							$index = count(array_keys((array)$result));
							$result->{$index} = $resultComments[0];
							break;
						case 'array':
							$result[] = $resultComments[0];
							break;
						default:
							echo 'UnknownResultType: '.$resultType.LN;
							break;
					}
					break;
				default:
					echo 'UnknownContentType: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					break;
			}
		}
	}
	else if (isset($schema->type)) {
		//echo $indent.'[$type:'.$schema->type.']'.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		switch($schema->type) {
			case 'string':
				$result = '';
				break;
			case 'integer':
			case 'number':
				$result = 0;
				if (isset($schema->enum)) {
					//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				}
				break;
			case 'boolean':
				$result = false;
				break;
			case 'object':
				$result = (object)array();
				if (isset($schema->properties)) {
					foreach($schema->properties as $propertyName => $property) {
						//echo $indent.'[$property:'.$propertyName.']: '.json_encode($property, JSON_UNESCAPED_SLASHES).LN;
						$propertyResult = buildSchema($property, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);
						buildSchemaComments($result, $property, $ancestors);
						$result->{$propertyName} = $propertyResult;
					}
				}
				if (isset($schema->additionalProperties)) {
					//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				}
				if (isset($schema->{'x-dictionary-key'})) {
					$dictionaryKey = buildSchema($schema->{'x-dictionary-key'}, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);
					$dictionaryValue = buildSchema($schema->additionalProperties, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);

					if ($dictionaryKey === '') $dictionaryKey = '{string}';

					//echo 'DictionaryKey['.$dictionaryKey.']: '.json_encode($schema->{'x-dictionary-key'}, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					//echo 'DictionaryKey: '.$dictionaryKey.LN;//.': '.json_encode($dictionaryValue, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					//buildSchemaComments($result, $schema->{'x-dictionary-key'});
					//buildSchemaComments($result, $schema->additionalProperties);
					if (!isset($schema->additionalProperties)) {
						//echo 'MissingAdditionalProperties: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					}
					$result->{$dictionaryKey} = $dictionaryValue;
				}
				break;
			case 'array':
				$result = array();
				buildSchemaComments($result, $schema->items, $ancestors);
				$result[] = buildSchema($schema->items, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);
				break;
			default:
				echo 'UnknownSchemaType: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
		}
	}
	else if (isset($schema->allOf)) {
		//echo $indent.'[$allOf]: '.json_encode($schema->allOf, JSON_UNESCAPED_SLASHES).LN;
		$result = array();
		foreach($schema->allOf as $index => $of) {
			if ($index > 0) {
				echo 'MultipleAllOfs: '.json_encode($schema->allOf, JSON_UNESCAPED_SLASHES).LN;
				break;
			}
			$result = buildSchema($of, $openapi, $versionPrefix, $comments, $depth+1, $ancestors);
		}

	}
	else {
		echo 'UnknownSchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	}
	if ($depth == 0) {
		$result = json_encode($result, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		$result = preg_replace('/(\s*).+"(\/\/.+)",*/', '$1$2', $result);
		//echo $indent.$result;
	}
	return $result;
}

function buildSchemaComments(&$result, $schema, $ancestors) {
	$schemaStrings = array(
		'// Type: '.buildSchemaString($schema, 0, $ancestors)
	);
	if (isset($schema->description)) {
//		foreach(explode("\r\n", $schema->description) as $line) {
//			$schemaStrings[] = '// '.$line;
//		}
	}
	//echo $schemaString.LN;
	//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	//echo json_encode($result, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;

	$resultType = gettype($result);

	switch($resultType) {
		case 'object':
			foreach($schemaStrings as $schemaString) {
				$index = count(array_keys((array)$result));
				$result->{$index} = $schemaString;
			}
			break;
		case 'array':
			foreach($schemaStrings as $schemaString) {
				$result[] = $schemaString;
			}
			break;
		default:
			echo 'UnknownSchemaCommentType: '.$resultType.LN;
			break;
	}

	//$result[] = $schemaString;
	//$result = array_merge(array('//'.buildSchemaString($schema)), $result);
}

function buildSchemaString($schema, $depth=0, $ancestors=array()) {
	global $openapi;

	$result = '';

	// Check for missing "type" property
	checkSchemaType($schema);

	//echo '<pre>Schema: '.$depth.' | '.json_encode($schema).'</pre>';

//	if ($depth >= 3) {
//		echo '<pre>Too many levels: '.json_encode($schema, JSON_PRETTY_PRINT).'</pre>';
//		return $result;
//	}

	if (isset($schema->content)) {
		foreach($schema->content as $contentType => $content) {
			switch($contentType) {
				case 'application/json':
					$result = buildSchemaString($content->schema, $depth+1, $ancestors);
					break;
				default:
					echo 'UnknownContentType: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					break;
			}
		}
		return $result;
	}
	else if (isset($schema->{'$ref'})) {
		$ref = $schema->{'$ref'};
		$refPath = explode('/', $ref);
		$refName = @end($refPath);
		$shortName = getSchemaReferenceShortName($ref);
		$result = '['.$ref.']';

		if (isset($openapi->components->{$refPath[2]}->{$refName})) {
			$schema = $openapi->components->{$refPath[2]}->{$refName};
			$refFilepath = preg_replace(SCHEMA_URL_REGEX, '-', $refName);
			$refType = $refPath[2] == 'schemas' ? getSchemaReferenceType($ref) : 'Response';
			switch($refType) {
				case 'Definition':
					$result = '[['.$shortName.'|'.$refFilepath.']]:'.(isset($schema->{'x-mobile-manifest-name'}) ? 'Manifest' : '').'Definition';
					break;
				case 'Enum':
					$result = '[['.$shortName.'|'.$refFilepath.']]:Enum';
					break;
				case 'Class':
				default:
					$result = '[['.$shortName.'|'.$refFilepath.']]';
					break;
			}
		}
	}
	else if (isset($schema->allOf)) {
		$result = array();
		foreach($schema->allOf as $of) {
			$result[] = buildSchemaString($of, $depth+1, $ancestors);
		}
		$result = implode(', ', $result);
	}
	else if (isset($schema->type)) {
		switch($schema->type) {
			case 'object':
				$result = $schema->type;
				if (isset($schema->{'x-dictionary-key'})) {
					$dictionaryKey = buildSchemaString($schema->{'x-dictionary-key'}, $depth+1, $ancestors);
					if (isset($schema->{'x-mapped-definition'})) {
						$mappedDefinition = buildSchemaString($schema->{'x-mapped-definition'}, $depth+1, $ancestors);
						$dictionaryKey = $mappedDefinition.':'.$dictionaryKey;
					}
					$result = 'Dictionary&lt;'
						.$dictionaryKey.','
						.buildSchemaString($schema->additionalProperties, $depth+1, $ancestors).'&gt;'
					;
				}
				break;
			case 'integer':
			case 'string':
			case 'boolean':
			case 'number':
				$result = $schema->type.(isset($schema->format) ? ':'.$schema->format : '');
				if (isset($schema->nullable)) $result .= ':nullable';
				break;
			case 'array':
				$result = buildSchemaString($schema->items, $depth+1, $ancestors).'[]';
				break;
			default:
				echo 'UnknownSchemaType: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
		}
		if ($schema->type != 'object' && isset($schema->{'x-mapped-definition'})) {
			$mappedDefinition = buildSchemaString($schema->{'x-mapped-definition'}, $depth+1, $ancestors);
			//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
			//echo $mappedDefinition.LN;
			//echo $result.LN;
			$result = $mappedDefinition.':'.$result;
		}
	}
	else if (json_encode($schema) != '{}') {
		echo 'UnknownSchemaString: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	}
	return $result;
}

function buildSchemaStringFromRef($ref, $depth=0) {
	$schema = (object)array(
		'$ref' => $ref
	);
	return buildSchemaString($schema, $depth+1, array($ref));
}

function buildEndpoints($openapi, $version) {
	global $wikiBuilderInfo, $platformlibDesc;

	//$serverUrl = $openapi->servers[0]->url;

	$versionPrefix = 'v'.$version;

	//$platformlibDesc = 'This listing is based on [platform library](https://www.bungie.net/sharedbundle/platformlib) file used by [Bungie.net](https://www.bungie.net).';

	$endpointsPath = WIKIPATH.'/'.$versionPrefix.'/Endpoints.md';
	$endpointsMarkdown = '';
	//$endpointsMarkdown = $platformlibDesc.LN.LN;

	foreach($openapi->tags as $tag) {
		$serviceName = $tag->name;
		$serviceCount = 0;

		$endpointsMarkdownList = '';

		foreach($openapi->paths as $path => $endpoint) {
			$method = isset($endpoint->get) ? 'get' : 'post';
			$endpointMethod = $endpoint->{$method};

			if (!in_array($tag->name, $endpointMethod->tags)) continue;

			// Add to the list of Endpoints for this Service
			$paths[$path] = $endpoint;
			$serviceCount++;

			$endpointName = $endpoint->summary;
			$endpointShortName = @end(explode('.', $endpointName));
			$endpointDesc = $endpoint->description;

			$endpointPath = preg_replace('/[\<\>\.,\[\]]/', '-', $endpointName);

			$endpointsMarkdownList .= buildTableRow(array(
				strtoupper($method),
				'[['.$endpointShortName.'|'.$endpointPath.']]',
				$path
			));;

			$serverUrl = isset($endpoint->servers) && count($endpoint->servers) > 0 ? $endpoint->servers[0]->url : $openapi->servers[0]->url;

			// Build Endpoint page
			$endpointPath = WIKIPATH.'/'.$versionPrefix.'/services/'.$serviceName.'/'.$endpointPath.'.md';
			$endpointMarkdown = '';//file_exists($endpointPath) ? file_get_contents($endpointPath) : '';
			if (!$endpointMarkdown) $endpointMarkdown = file_get_contents(BUILDERPATH.'/templates/endpoint.md');
			if (strpos($endpointMarkdown, $wikiBuilderInfo) === false) $endpointMarkdown = $wikiBuilderInfo.$endpointMarkdown;

			$endpointMarkdown = preg_replace('/(\* \*\*URI:\*\*).*/m', '$1 [['.$path.'|'.$serverUrl.$path.']]', $endpointMarkdown);
			$endpointMarkdown = preg_replace('/(\* \*\*Basepath:\*\*).*/m', '$1 '.$serverUrl, $endpointMarkdown);
			$endpointMarkdown = preg_replace('/(\* \*\*Method:\*\*).*/m', '$1 '.strtoupper($method), $endpointMarkdown);
			$endpointMarkdown = preg_replace('/(\* \*\*Service:\*\*).*/m', '$1 [['.$serviceName.'|Endpoints#'.$serviceName.']]', $endpointMarkdown);
			$endpointMarkdown = preg_replace('/(\* \*\*Officially Supported:\*\*).*/m', '$1 '.(!in_array('Unofficial', $endpointMethod->tags) ? 'Yes' : 'No'), $endpointMarkdown);

			$permissions = '';
			if (isset($endpointMethod->security)) {
				foreach($endpointMethod->security as $security) {
					if ($permissions) {
						echo $endpoint->summary.':MultipleSecurityTypes: '.json_encode($security, JSON_PRETTY_PRINT).LN;
					}
					else if (isset($security->oauth2)) {
						$permissions = implode(', ', $security->oauth2);
					}
					else {
						echo $endpoint->summary.':UnknownSecurityType: '.json_encode($security, JSON_PRETTY_PRINT).LN;
					}
				}
			} else {
				$permissions = 'None';
			}
			$endpointMarkdown = preg_replace('/(\* \*\*Permissions:\*\*).*/m', '$1 '.$permissions, $endpointMarkdown);

			$endpointMarkdown = preg_replace('/(## Info\n).*\n+/m', '$1'.$endpointDesc.LN.LN, $endpointMarkdown);

			$pathParams = array();
			$queryParams = array();
			$postParams = array();

			foreach($endpointMethod->parameters as $param) {
				if (!isset($param->in)) {
					echo '<pre>No ParamIn['.$endpointName.']: '.json_encode($param, JSON_PRETTY_PRINT).'</pre>';
					continue;
				}
				switch($param->in) {
					case 'path':
						$pathParams[] = $param;
						break;
					case 'query':
						$queryParams[] = $param;
						break;
				}
			}

			$paramsMarkdown = 'None'.LN;
			if (count($pathParams) > 0) {
				$paramsMarkdown = buildParameterTable($pathParams, $openapi, $versionPrefix);
			}
			updateSection('### Path Parameters', $paramsMarkdown, $endpointMarkdown);

			$paramsMarkdown = 'None'.LN;
			if (count($queryParams) > 0) {
				$paramsMarkdown = buildParameterTable($queryParams, $openapi, $versionPrefix);
			}
			updateSection('### Query String Parameters', $paramsMarkdown, $endpointMarkdown);

			// Update Example Request
			$requestMarkdown = strtoupper($method).' '.$serverUrl.$path;
			$requestMarkdown .= LN;
			if (isset($endpointMethod->requestBody)) {
				//$requestMarkdown .= 'Schema: '.buildSchemaString($endpointMethod->requestBody).LN;
				$requestMarkdown .= '```javascript'.LN;
				$requestMarkdown .= buildSchema($endpointMethod->requestBody, $openapi, $versionPrefix, true).LN;
				$requestMarkdown .= '```'.LN;
			}
			updateSection('### Request', $requestMarkdown, $endpointMarkdown);

			// Update Example Response
			$responseMarkdown = '';
			if (isset($endpointMethod->responses)) {
				foreach($endpointMethod->responses as $code => $response) {
					//$responseMarkdown .= 'Schema: '.buildSchemaString($response).LN;
					$responseMarkdown .= 'PlatformErrorCode: '.$code.LN;
					$responseMarkdown .= '```javascript'.LN;
					$responseMarkdown .= buildSchema($response, $openapi, $versionPrefix, true).LN;
					$responseMarkdown .= '```'.LN;
				}
			}
			updateSection('### Response', $responseMarkdown, $endpointMarkdown);

			// Replace References Section
			$refs = array();
			if (!in_array('Unofficial', $endpointMethod->tags)) {
				$refName = 'operation_'.$method.'_'.str_replace('.', '-', $endpoint->summary);
				$refs[] = 'https://bungie-net.github.io/multi/'.$refName.'.html#'.$refName;
			}

			$refMarkdown = '';
			foreach ($refs as $refIndex => $ref) {
				$refMarkdown .= ($refIndex + 1) . '. ' . $ref . LN;
			}
			updateSection('## References', $refMarkdown, $endpointMarkdown);

			updateWikiPage($endpointPath, $endpointMarkdown);
			//break;
		}

		$endpointsMarkdown .= '## <a name="'.$serviceName.'"></a>'.$serviceName.' ('.$serviceCount.' Endpoint'.($serviceCount != 1 ? 's' : '').')'.LN;
		$endpointsMarkdown .= buildTableHeader(array('Method', 'Name', 'Endpoint'));
		$endpointsMarkdown .= $endpointsMarkdownList.LN;

		$endpointsMarkdown .= LN;
		//break;
	}

	updateWikiPage($endpointsPath, $endpointsMarkdown);
}

function buildComponents($openapi, $version) {
	global $wikiBuilderInfo, $platformlibDesc;

	$versionPrefix = 'v'.$version;

	$componentsPath = WIKIPATH.'/'.$versionPrefix.'/Components.md';
	$componentsMarkdown = '';

	// Header Components
	$componentsMarkdown .= '## <a name="Headers"></a>Headers'.LN;
	$componentsMarkdown .= buildParameterTable($openapi->components->headers, $openapi, $versionPrefix);
	$componentsMarkdown .= LN;

	// Security Schema Components
	$componentsMarkdown .= '## <a name="Security"></a>Security ('.count(array_keys((array)$openapi->components->securitySchemes)).')'.LN;
	$componentsMarkdown .= buildTableHeader(array('Name', 'Type', 'Description'));

	$securitySchemasPath = WIKIPATH.'/'.$versionPrefix.'/SecuritySchemas.md';
	$securitySchemasMarkdown = '';
	foreach($openapi->components->securitySchemes as $schemaKey => $schema) {
		$componentsMarkdown .= buildTableRow(array('[['.$schemaKey.'|SecuritySchemas#'.$schemaKey.']]', $schema->type, $schema->description));

		$securitySchemasMarkdown .= '## <a name="'.$schemaKey.'"></a>'.$schemaKey.LN;
		$securitySchemasMarkdown .= $schema->description.LN.LN;
		$securitySchemasMarkdown .= '* **Type:** '.$schema->type.LN;
		switch($schema->type) {
			case 'apiKey':
				$securitySchemasMarkdown .= '* **Name:** '.$schema->name.LN;
				$securitySchemasMarkdown .= '* **Location:** '.$schema->in.LN;
				break;
			case 'oauth2':
				$securitySchemasMarkdown .= LN;
				foreach($schema->flows as $flowId => $flow) {
					$securitySchemasMarkdown .= '### <a name="'.$schemaKey.'-'.$flowId.'"></a>'.$flowId.LN;
					$securitySchemasMarkdown .= '> * **Authorization URL:** '.$flow->authorizationUrl.LN;
					$securitySchemasMarkdown .= '> * **Token URL:** '.$flow->tokenUrl.LN;
					$securitySchemasMarkdown .= '> * **Refresh URL:** '.$flow->refreshUrl.LN;
					$securitySchemasMarkdown .= '> * **Scopes:**'.LN.LN;
					$securitySchemasMarkdown .= '> '.buildTableHeader(array('Name', 'Description'));
					foreach($flow->scopes as $scopeName => $scopeDescription) {
						$securitySchemasMarkdown .= '> '.buildTableRow(array($scopeName, str_replace("\r\n", '', $scopeDescription)));
					}
					$securitySchemasMarkdown .= LN;
				}
				break;
			default:
				echo 'UnknownSecuritySchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
		}
		$securitySchemasMarkdown .= LN;
	}
	updateWikiPage($securitySchemasPath, $securitySchemasMarkdown);

	// Schema Components

	// Sort Schemas by ID
	$schemaIds = array_keys((array)$openapi->components->schemas);
	sort($schemaIds);

	$componentsMarkdown .= '## <a name="Schemas"></a>Schemas ('.count($schemaIds).')'.LN;

	$groups = array(
		'ManifestDefinition' => array(),
		'Definition' => array(),
		'Enum' => array(),
		'Class' => array(),
		'Array' => array(),
		'GenericClass' => array()
	);

	// Sort them into groups
	foreach($schemaIds as $schemaId) {
		$refType = getSchemaReferenceType($schemaId);
		if (!isset($groups[$refType])) $groups[$refType] = array();
		$groups[$refType][] = $schemaId;
	}

	foreach($groups as $groupId => $components) {
		$componentsMarkdown .= '## <a name="Schemas-'.$groupId.'"></a>'.preg_replace('/(.)([A-Z])/', '$1 $2', $groupId).' Schemas'.LN;

		usort($components, function($a, $b) {
			return strcasecmp(getSchemaReferenceShortName('#/components/schemas/'.$a), getSchemaReferenceShortName('#/components/schemas/'.$b));
		});

		switch($groupId) {
			case 'Definition':

				$definitionsPath = WIKIPATH.'/'.$versionPrefix.'/Definitions.md';
				$definitionsMarkdown = '';

				$definitionsMarkdown .= buildTableHeader(array(
					'Name',
					'Manifest',
					'Description'
				));

				foreach($components as $schemaId) {
					$ref = '#/components/schemas/'.$schemaId;
					$schema = $openapi->components->schemas->{$schemaId};
					$schemaDescription = isset($schema->description) ? $schema->description : '';

					$definitionsMarkdown .= buildTableRow(array(
						explode(':', buildSchemaStringFromRef($ref))[0],
						isset($schema->{'x-mobile-manifest-name'}) ? $schema->{'x-mobile-manifest-name'} : '',
						'Scope: <i>'.getSchemaReferenceScope($ref).'</i>'.BR.truncateDescription($schemaDescription)
					));

					buildComponentSchemaPage('#/components/schemas/'.$schemaId, $openapi, $versionPrefix);
				}

				$componentsMarkdown .= $definitionsMarkdown;

				updateWikiPage($definitionsPath, $definitionsMarkdown);
				break;
			default:
				$componentsMarkdown .= buildTableHeader(array(
					'Name',
					'Description'
				));
				foreach($components as $schemaId) {
					$ref = '#/components/schemas/'.$schemaId;
					$schema = $openapi->components->schemas->{$schemaId};
					$schemaDescription = isset($schema->description) ? $schema->description : '';

					$componentsMarkdown .= buildTableRow(array(
						explode(':', buildSchemaStringFromRef('#/components/schemas/'.$schemaId))[0],
						'Scope: <i>'.getSchemaReferenceScope($ref).'</i>'.BR//.truncateDescription($schemaDescription)
					));

					buildComponentSchemaPage('#/components/schemas/'.$schemaId, $openapi, $versionPrefix);
				}
				break;
		}
		$componentsMarkdown .= LN;
	}

	//echo json_encode($groups, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;

	// Response Components
	//$componentsMarkdown .= '## <a name="Responses"></a>Responses'.LN;
	//$componentsMarkdown .= buildTableHeader(array('Name', 'Response Type', 'Type', 'Description'));
	//foreach($openapi->components->responses as $responseId => $response) {
	//	$schemaName = buildSchemaStringFromRef('#/components/responses/'.$responseId);
	//	$componentsMarkdown .= buildTableRow(array(
	//		//'[#/components/responses/'.$responseId.']',
	//		$schemaName,
	//		//'[['.str_replace('[]', '&#91;&#93;', htmlspecialchars($responseId)).'|'.preg_replace('/[\<\>\.,\[\]]/', '-', $responseId).']]',
	//		implode(', ', array_keys((array)$response->content)),
	//		buildSchemaString($response),
	//		isset($response->description) ? explode("\r\n", $response->description)[0].(strpos($response->description, "\r\n") !== false ? ' (truncated)' : '') : ''
	//	));
	//
	//	buildComponentSchemaPage('#/components/responses/'.$responseId, $openapi, $versionPrefix);
	//}
	//$componentsMarkdown .= LN;

	updateWikiPage($componentsPath, $componentsMarkdown);
}

function buildComponentSchemaPage($ref, $openapi, $versionPrefix) {
	$refPath = explode('/', $ref);
	$schemaId = end($refPath);
	$schema = $openapi->{$refPath[1]}->{$refPath[2]}->{$schemaId};

	$refName = @end($refPath);
	if ($refPath[2] != 'schemas' && isset($openapi->components->schemas->{$refName})) {
		//echo 'SchemaResponseConflict: '.$ref.LN;
		$refName .= 'Response';
	}

	$schemaPath = WIKIPATH.'/'.$versionPrefix.'/'.$refPath[2].'/'.preg_replace(SCHEMA_URL_REGEX, '-', $refName).'.md';

	$schemaMarkdown = '';

	$schemaMarkdown .= '## Info'.LN;
	if (isset($schema->description)) $schemaMarkdown .= cleanDescription($schema->description).LN;
	$schemaMarkdown .= LN;

	$schemaMarkdown .= '## Schema'.LN;

	$schemaType = getSchemaReferenceType($ref);

	$schemaMarkdown .= '* **Schema Type:** '.preg_replace('/(.)([A-Z])/', '$1 $2', $schemaType).LN;
	if (isset($schema->type)) $schemaMarkdown .= '* **Type:** '.$schema->type.LN;
	if (isset($schema->format)) $schemaMarkdown .= '* **Format:** '.$schema->format.LN;
	if (isset($schema->{'x-mobile-manifest-name'})) $schemaMarkdown .= '* **Mobile Manifest:** '.$schema->{'x-mobile-manifest-name'}.LN;
	if (isset($schema->items)) {
		$schemaMarkdown .= '* **Array Contents:** '.buildSchemaString($schema->items).LN;
	}
	if (isset($schema->{'x-mapped-definition'})) $schemaMarkdown .= '* **Mapped Definition:** '.buildSchemaString($schema->{'x-mapped-definition'}).LN;
	if (isset($schema->{'x-destiny-component-type-dependency'})) $schemaMarkdown .= '* **Component Type Dependency:** '.$schema->{'x-destiny-component-type-dependency'}.LN;
	//$schemaMarkdown .= json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	$schemaMarkdown .= LN;

	checkSchemaType($schema);

	if (isset($schema->properties)) {
		$schemaMarkdown .= '## Properties'.LN;
		$schemaMarkdown .= buildTableHeader(array('Name', 'Type', 'Description'));
		foreach($schema->properties as $propertyId => $property) {
			$schemaMarkdown .= buildTableRow(array(
				$propertyId,
				buildSchemaString($property),
				isset($property->description) ? cleanDescription($property->description) : ''
			));
		}
		$schemaMarkdown .= LN;
	}

	if (isset($schema->additionProperties)) {
		echo json_encode($schema->additionProperties, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	}

	if (isset($schema->enum)) {
		$schemaMarkdown .= '## Enum Values'.LN;
		$schemaMarkdown .= buildTableHeader(array('Identifier', 'Value', 'Description'));
		foreach($schema->{'x-enum-values'} as $enum) {
			$schemaMarkdown .= buildTableRow(array(
				$enum->identifier,
				$enum->numericValue,
				isset($enum->description) ? cleanDescription($enum->description) : '')
			);
		}
		$schemaMarkdown .= LN;
	}

	if ((isset($schema->type) && $schema->type == 'object') || isset($schema->content)) {
		$schemaMarkdown .= '## Example'.LN;
		$schemaMarkdown .= '```javascript'.LN;
		$schemaMarkdown .= buildSchema($schema, $openapi, $versionPrefix, true).LN;
		$schemaMarkdown .= '```'.LN;
		$schemaMarkdown .= LN;
	}
	if (isset($schema->type) && $schema->type == 'array') {
		$schemaMarkdown .= '## Example'.LN;
		$schemaMarkdown .= '```javascript'.LN;
		$schemaMarkdown .= buildSchema($schema, $openapi, $versionPrefix, true).LN;
		$schemaMarkdown .= '```'.LN;
		$schemaMarkdown .= LN;
	}

	$schemaMarkdown .= '## References'.LN;
	$refName = 'schema_'.preg_replace(SCHEMA_URL_REGEX_API, '-', $schemaId);
	$refs = array(
		'https://bungie-net.github.io/multi/'.$refName.'.html#'.$refName
	);
	foreach ($refs as $refIndex => $ref) {
		$schemaMarkdown .= ($refIndex + 1) . '. ' . $ref . LN;
	}

	updateWikiPage($schemaPath, $schemaMarkdown);
}

$openapi = loadOpenApi();

$tags = array();
foreach($openapi->tags as $tag) {
	$tags[] = $tag->name;
}

echo 'Tags: '.json_encode($tags, JSON_PRETTY_PRINT).LN;

//echo '<pre>'.json_encode($openapi->components, JSON_PRETTY_PRINT).'</pre>';

// Build Endpoints
buildEndpoints($openapi, BUNGIE_API_VERSION);

// Build Components
buildComponents($openapi, BUNGIE_API_VERSION);