<?php
function getUrl($url, $options=array()) {
	$ch = curl_init($url);
	$curl = array(
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_RETURNTRANSFER => true
	);
	if (isset($options['curl'])) {
		$curl = array_merge($curl, $options['curl']);
	}
	if (isset($options['get'])) {
		$url .= (strpos($url, '?') === false ? '?' : '').http_build_query($options['get']);
	}
	if (isset($options['post'])) {
		$curl[CURLOPT_POST] = true;
		$curl[CURLOPT_POSTFIELDS] = $options['post'];
	}
	if (isset($options['headers'])) {
		$curl[CURLOPT_HTTPHEADER] = $options['headers'];
	}
	curl_setopt_array($ch, $curl);
	$response = curl_exec($ch);
	if (isset($options['info'])) {
		$response = curl_getinfo($ch);
	}
	curl_close($ch);
	return $response;
}

function getJson($url, $options=array()) {
	return json_decode(getUrl($url, $options));
}

function getUrlHeaders($url, $options=array()) {
	if (!isset($options['curl'])) $options['curl'] = array();
	$options['curl'][CURLOPT_FILETIME] = true;
	$options['curl'][CURLOPT_NOBODY] = true;
	return getUrl($url, $options);
}