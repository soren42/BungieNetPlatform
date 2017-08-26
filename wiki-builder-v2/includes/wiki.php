<?php

define('WIKIPATH', BASEPATH.'/wiki');
define('LN', "\n");

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
		$schemaString = buildSchemaString($schemaObject->schema, $versionPrefix);
		$markdown .= buildTableRow(array(
			isset($schemaObject->name) ? $schemaObject->name : $key,
			$schemaString,
			isset($schemaObject->required) && $schemaObject->required ? 'Yes' : 'No',
			$schemaObject->description
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

function buildSchema($schema, $openapi, $versionPrefix, $comments=false, $depth=0) {
	global $schemaCache;

	$result = null;
	//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;

	// Check for missing "type" property
	checkSchemaType($schema);

	if (isset($schema->{'$ref'})) {
		$ref = $schema->{'$ref'};
		$refPath = explode('/', $ref);
		if (!$openapi->{$refPath[1]} || !isset($openapi->{$refPath[1]}->{$refPath[2]}) || !isset($openapi->{$refPath[1]}->{$refPath[2]}->{$refPath[3]})) {
			echo 'MissingReference: '.$ref.LN;
		} else if (isset($schemaCache[$ref])) {
			$result = $schemaCache[$ref];
		} else {
			$component = $openapi->{$refPath[1]}->{$refPath[2]}->{$refPath[3]};
			//echo $indent.'[$ref:'.$ref.']: '.json_encode($component, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
			$result = buildSchema($component, $openapi, $versionPrefix, false, $depth+1);
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
					$result = buildSchema($content->schema, $openapi, $versionPrefix, $comments, $depth+1);
					$resultComments = array();
					buildSchemaComments($resultComments, $content->schema, $openapi, $versionPrefix);
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
						$propertyResult = buildSchema($property, $openapi, $versionPrefix, $comments, $depth+1);
						buildSchemaComments($result, $property, $openapi, $versionPrefix);
						$result->{$propertyName} = $propertyResult;
					}
				}
				if (isset($schema->additionalProperties)) {
					//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				}
				if (isset($schema->{'x-dictionary-key'})) {
					$dictionaryKey = buildSchema($schema->{'x-dictionary-key'}, $openapi, $versionPrefix, $comments, $depth+1);
					$dictionaryValue = buildSchema($schema->additionalProperties, $openapi, $versionPrefix, $comments, $depth+1);

					if ($dictionaryKey === '') $dictionaryKey = '{string}';

					//echo 'DictionaryKey['.$dictionaryKey.']: '.json_encode($schema->{'x-dictionary-key'}, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					//echo 'DictionaryKey: '.$dictionaryKey.LN;//.': '.json_encode($dictionaryValue, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					//buildSchemaComments($result, $schema->{'x-dictionary-key'}, $openapi, $versionPrefix);
					//buildSchemaComments($result, $schema->additionalProperties, $openapi, $versionPrefix);
					if (!isset($schema->additionalProperties)) {
						//echo 'MissingAdditionalProperties: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
					}
					$result->{$dictionaryKey} = $dictionaryValue;
				}
				break;
			case 'array':
				$result = array();
				buildSchemaComments($result, $schema->items, $openapi, $versionPrefix);
				$result[] = buildSchema($schema->items, $openapi, $versionPrefix, $comments, $depth+1);
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
			$result = buildSchema($of, $openapi, $versionPrefix, $comments, $depth+1);
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

function buildSchemaComments(&$result, $schema, $openapi, $versionPrefix) {
	$schemaStrings = array(
		'// Type: '.buildSchemaString($schema, $versionPrefix)
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
			echo 'UnknownResultType: '.$resultType.LN;
			break;
	}

	//$result[] = $schemaString;
	//$result = array_merge(array('//'.buildSchemaString($schema, $versionPrefix)), $result);
}

function buildSchemaString($schema, $versionPrefix) {
	global $openapi;

	$result = '';

	// Check for missing "type" property
	checkSchemaType($schema);

	if (isset($schema->content)) {
		foreach($schema->content as $contentType => $content) {
			switch($contentType) {
				case 'application/json':
					$result = buildSchemaString($content->schema, $versionPrefix);
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
		$shortName = $refName;
		if (strpos($shortName, '<') === false) {
			//$shortName = @end(explode('.', $shortName));
		} else {
			//$shortName = preg_replace('/(<[^,]+,)[^>]+\.([^>]+>)/', '$1$2', $shortName); // Dictionary<int32,Object.Object.Object>
			//$shortName = preg_replace('/(<)[^>,]+\.([^>\,]+>)/', '$1$2', $shortName); // List<User.Models.UserAlias>
		}
		if ($refPath[2] != 'schemas' && isset($openapi->components->schemas->{$refName})) {
			//echo 'SchemaResponseConflict: '.$ref.LN;
			$refName .= 'Response';
		}
		$refFilepath = preg_replace('/[\<\>\.,\[\]]/', '-', $refName);
		$result = '[['.str_replace('[]', '&#91;&#93;', htmlspecialchars($shortName)).'|'.$refFilepath.']]';
		//$result = '['.$ref.']';

		if (isset($openapi->{$refPath[1]}) && isset($openapi->{$refPath[1]}->{$refPath[2]}) && isset($openapi->{$refPath[1]}->{$refPath[2]}->{$refPath[3]})) {
			$schemaRef = $openapi->{$refPath[1]}->{$refPath[2]}->{$refPath[3]};
			if (isset($schemaRef->enum)) $result .= ':Enum';
			//echo json_encode($schemaRef, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		}
	}
	else if (isset($schema->allOf)) {
		$result = array();
		foreach($schema->allOf as $of) {
			$result[] = buildSchemaString($of, $versionPrefix);
		}
		$result = implode(', ', $result);
	}
	else if (isset($schema->type)) {
		switch($schema->type) {
			case 'object':
				$result = $schema->type;
				if (isset($schema->{'x-dictionary-key'})) {
					$dictionaryKey = buildSchemaString($schema->{'x-dictionary-key'}, $versionPrefix);
					if (isset($schema->{'x-mapped-definition'})) {
						$mappedDefinition = buildSchemaString($schema->{'x-mapped-definition'}, $versionPrefix);
						$dictionaryKey = $mappedDefinition.':'.$dictionaryKey;
					}
					$result = 'Dictionary&lt;'
						.$dictionaryKey.','
						.buildSchemaString($schema->additionalProperties, $versionPrefix).'&gt;'
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
				$result = buildSchemaString($schema->items, $versionPrefix).'[]';
				break;
			default:
				echo 'UnknownSchemaType: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
		}
		if ($schema->type != 'object' && isset($schema->{'x-mapped-definition'})) {
			$mappedDefinition = buildSchemaString($schema->{'x-mapped-definition'}, $versionPrefix);
			//echo json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
			//echo $mappedDefinition.LN;
			//echo $result.LN;
			$result = $mappedDefinition.':'.$result;
		}
	}
	else {
		echo 'UnknownSchemaString: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	}
	return $result;
}

function buildEndpoints($openapi, $version) {
	global $wikiBuilderInfo, $platformlibDesc;

	$serverUrl = $openapi->servers[0]->url;

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
				//$requestMarkdown .= 'Schema: '.buildSchemaString($endpointMethod->requestBody, $versionPrefix).LN;
				$requestMarkdown .= '```javascript'.LN;
				$requestMarkdown .= buildSchema($endpointMethod->requestBody, $openapi, $versionPrefix, true).LN;
				$requestMarkdown .= '```'.LN;
			}
			updateSection('### Request', $requestMarkdown, $endpointMarkdown);

			// Update Example Response
			$responseMarkdown = '';
			if (isset($endpointMethod->responses)) {
				foreach($endpointMethod->responses as $code => $response) {
					//$responseMarkdown .= 'Schema: '.buildSchemaString($response, $versionPrefix).LN;
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

function buildSchemaStringFromRef($ref, $verionPrefix) {
	$schema = (object)array(
		'$ref' => $ref
	);
	return buildSchemaString($schema, $verionPrefix);
}

function buildComponents($openapi, $version) {
	global $wikiBuilderInfo, $platformlibDesc;

	$versionPrefix = 'v'.$version;

	$componentsPath = WIKIPATH.'/'.$versionPrefix.'/Components.md';
	$componentsMarkdown = '';

	// Schema Components
	$componentsMarkdown .= '## <a name="Schemas"></a>Schemas'.LN;
//	$componentsMarkdown .= buildTableHeader(array(
//		'Name',
//		//'Type',
//		'Description'
//	));

	$groups = array();

	foreach($openapi->components->schemas as $schemaId => $schema) {
		if (strpos($schemaId, '<') !== false) {
			echo $schemaId.LN;
		}
		else if (strpos($schemaId, '+') !== false) {
			echo $schemaId.LN;
		}
		else if (strpos($schemaId, '[') !== false) {
			echo $schemaId.LN;
		}
		else {
			preg_match_all('/[^<\.\+>]+/', $schemaId, $matches);
			$matches = $matches[0];

			$schemaPath = implode('.', array_slice($matches, 0, count($matches)-1));
			$schemaName = end($matches);

			//echo $schemaId.LN;
			//echo json_encode($matches, JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT).LN;
			//echo $schemaPath.' | '.$schemaName.LN;
			if (!isset($groups[$schemaPath])) $groups[$schemaPath] = array();
			$groups[$schemaPath][] = array('id' => $schemaId, 'name' => $schemaName);
		}
	}

	ksort($groups);

	foreach($groups as $groupId => $group) {
		if ($groupId) $componentsMarkdown .= '### '.$groupId.LN;
		$componentsMarkdown .= buildTableHeader(array(
			'Name',
			//'Type',
			'Description'
		));
//		foreach($group as $component) {
//			$schema = $openapi->components->schemas->{$component['id']};
//			$schemaName = buildSchemaStringFromRef('#/components/schemas/'.$component['id'], $versionPrefix);
//			$componentsMarkdown .= buildTableRow(array(
//				$schemaName,
//				isset($schema->description) ? str_replace("\r\n", '<br/>', $schema->description) : ''
//			));
//		}
		$componentsMarkdown .= LN;
	}

	echo json_encode($groups, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;

//	foreach($openapi->components->schemas as $schemaId => $schema) {
//		$schemaName = buildSchemaStringFromRef('#/components/schemas/'.$schemaId, $versionPrefix);
//		$componentsMarkdown .= buildTableRow(array(
//			//'[#/components/schemas/'.$schemaId.']',
//			$schemaName,
//			//'[['.str_replace('[]', '&#91;&#93;', htmlspecialchars($schemaId)).'|'.preg_replace('/[\<\>\.,\[\]]/', '-', $schemaId).']]',
//			//buildSchemaString($schema,$versionPrefix),
//			isset($schema->description) ? explode("\r\n", $schema->description)[0].(strpos($schema->description, "\r\n") !== false ? ' (truncated)' : '') : ''
//		));
//
//		buildComponentSchemaPage('#/components/schemas/'.$schemaId, $openapi, $versionPrefix);
//	}
//	$componentsMarkdown .= LN;

	// Response Components
//	$componentsMarkdown .= '## <a name="Responses"></a>Responses'.LN;
//	$componentsMarkdown .= buildTableHeader(array('Name', 'Response Type', 'Type', 'Description'));
//	foreach($openapi->components->responses as $responseId => $response) {
//		$schemaName = buildSchemaStringFromRef('#/components/responses/'.$responseId, $versionPrefix);
//		$componentsMarkdown .= buildTableRow(array(
//			//'[#/components/responses/'.$responseId.']',
//			$schemaName,
//			//'[['.str_replace('[]', '&#91;&#93;', htmlspecialchars($responseId)).'|'.preg_replace('/[\<\>\.,\[\]]/', '-', $responseId).']]',
//			implode(', ', array_keys((array)$response->content)),
//			buildSchemaString($response,$versionPrefix),
//			isset($response->description) ? explode("\r\n", $response->description)[0].(strpos($response->description, "\r\n") !== false ? ' (truncated)' : '') : ''
//		));
//
//		buildComponentSchemaPage('#/components/responses/'.$responseId, $openapi, $versionPrefix);
//	}
//	$componentsMarkdown .= LN;

	// Header Components
	$componentsMarkdown .= '## <a name="Headers"></a>Headers'.LN;
	$componentsMarkdown .= buildParameterTable($openapi->components->headers, $openapi, $versionPrefix);
	$componentsMarkdown .= LN;

	// Security Schema Components
	$componentsMarkdown .= '## <a name="SecuritySchemas"></a>Security Schemas'.LN;
	$componentsMarkdown .= buildTableHeader(array('Name', 'Type', 'Description'));

	$securitySchemasPath = WIKIPATH.'/'.$versionPrefix.'/SecuritySchemas.md';
	$securitySchemasMarkdown = '';
	foreach($openapi->components->securitySchemes as $schemaKey => $schema) {
		$componentsMarkdown .= buildTableRow(array($schemaKey, $schema->type, $schema->description));

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
					$securitySchemasMarkdown .= '### <a name="'.$schemaKey.'-'.$flowId.'"></a>'.LN;
					$securitySchemasMarkdown .= '* **Authorization URL:** '.$flow->authorizationUrl.LN;
					$securitySchemasMarkdown .= '* **Token URL:** '.$flow->tokenUrl.LN;
					$securitySchemasMarkdown .= '* **Refresh URL:** '.$flow->refreshUrl.LN;
					$securitySchemasMarkdown .= '* **Scopes:**'.LN;
					$securitySchemasMarkdown .= buildTableHeader(array('Name', 'Description'));
					foreach($flow->scopes as $scopeName => $scopeDescription) {
						$securitySchemasMarkdown .= buildTableRow(array($scopeName, str_replace("\r\n", '', $scopeDescription)));
					}
				}
				break;
			default:
				echo 'UnknownSecuritySchema: '.json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
				break;
		}
		$securitySchemasMarkdown .= LN;
	}
	updateWikiPage($securitySchemasPath, $securitySchemasMarkdown);
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

	$schemaPath = WIKIPATH.'/'.$versionPrefix.'/'.$refPath[2].'/'.preg_replace('/[\<\>\.,\[\]]/', '-', $refName).'.md';

	$schemaMarkdown = '';

	$schemaMarkdown .= '## Info'.LN;
	if (isset($schema->description)) $schemaMarkdown .= $schema->description.LN;
	$schemaMarkdown .= LN;

	$schemaMarkdown .= '## Schema'.LN;

	checkSchemaType($schema);
	if (isset($schema->type)) $schemaMarkdown .= '* **Type:** '.$schema->type.LN;
	if (isset($schema->format)) $schemaMarkdown .= '* **Format:** '.$schema->format.LN;
	if (isset($schema->items)) {
		$schemaMarkdown .= '* **Array Contents:** '.buildSchemaString($schema->items, $versionPrefix).LN;
	}
	if (isset($schema->{'x-mapped-definition'})) $schemaMarkdown .= '* **Mapped Definition:** '.buildSchemaString($schema->{'x-mapped-definition'}, $versionPrefix).LN;
	//$schemaMarkdown .= json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	$schemaMarkdown .= LN;

	checkSchemaType($schema);

	if (isset($schema->properties)) {
		$schemaMarkdown .= '## Properties'.LN;
		$schemaMarkdown .= buildTableHeader(array('Name', 'Type', 'Description'));
		foreach($schema->properties as $propertyId => $property) {
			$schemaMarkdown .= buildTableRow(array(
				$propertyId,
				buildSchemaString($property, $versionPrefix),
				isset($property->description) ? str_replace("\r\n", '<br/>', $property->description) : ''
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
			$schemaMarkdown .= buildTableRow(array($enum->identifier, $enum->numericValue, isset($enum->description) ? $enum->description : ''));
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
	$refName = 'schema_'.preg_replace('/[\<\>\.,]/', '-', $schemaId);
	$refs = array(
		'https://bungie-net.github.io/multi/'.$refName.'.html#'.$refName
	);
	foreach ($refs as $refIndex => $ref) {
		$schemaMarkdown .= ($refIndex + 1) . '. ' . $ref . LN;
	}

	updateWikiPage($schemaPath, $schemaMarkdown);
}

$openapi = json_decode(file_get_contents(CACHEPATH.'/api-master/openapi.json'));

// Build Endpoints
buildEndpoints($openapi, BUNGIE_API_VERSION);

// Build Components
buildComponents($openapi, BUNGIE_API_VERSION);