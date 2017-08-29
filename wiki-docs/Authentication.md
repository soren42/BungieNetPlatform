## Introduction
With the introduction of User Authentication, third party apps can now make calls to endpoints that were previously private access using the new "sanctioned" OAuth implementation. It does however require that your web server has a valid SSL certificate and can operate over https.

## OAuth 2.0 (Beta)
Support for OAuth 2.0 (RFC 6749) was added on May 31, 2017. This is a more standardized implementation of user authentication and will likely replace the old method in the future. The Bungie Developers have advised to treat it as being still in Beta for the time being. See the [Official Help Article](https://www.bungie.net/en/Clan/Post/39966/227773391/0/0) for more information.

### Demo
To make it easier for developers who are unfamiliar with OAuth, lowlines has set up a test page on his website that goes through the steps involved with getting a user to Authorize your App and then refreshing your Access Tokens periodically.

https://lowlidev.com.au/destiny/authentication-2

### Code Examples
Currently no code examples are available for this implementation.

## Authentication 1.0
The first iteration of User Authentication was a partial implementation the OAuth specification. It will likely be replaced by the new OAuth 2.0 in the future. See the [Official Help Article](https://www.bungie.net/en/Help/Article/45481) for more information.

### Demo
To make it easier for developers who are unfamiliar with OAuth, lowlines has set up a test page on his website that goes through the steps involved with getting a user to Authorize your App and then refreshing your Access Tokens periodically.

https://lowlidev.com.au/destiny/authentication

### Code Examples
Below is a working list of implementations for various languages provided by members of the community.

#### PHP Authentication (by [projectxmatt](https://www.bungie.net/en/User/Profile/5434199))
```php
<?php

$apikey = 'YOUR-API-KEY-HERE';

$code = htmlspecialchars($_GET['code']);

// Exchange code for Token
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,'https://www.bungie.net/Platform/App/GetAccessTokensFromCode/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-KEY: '.$apikey));
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array('code' => $code)));

$response = curl_exec($ch);
$response = json_decode($response);
curl_close($ch);

// Using access token to get user's bungie account
$accesstoken = $response->Response->accessToken->value;
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,'https://www.bungie.net/Platform/User/GetCurrentBungieAccount/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'X-API-KEY: '.$apikey,
        'Authorization: Bearer '.$accesstoken
));

$userinfo = curl_exec($ch);
$userinfo = json_decode($userinfo);

curl_close($ch);
```

## References
1. https://www.bungie.net/en/Help/Article/45481
2. https://www.bungie.net/en/Clan/Post/39966/227773391/0/0