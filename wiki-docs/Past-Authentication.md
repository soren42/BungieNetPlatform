## Introduction
While some endpoints can be freely accessed, referred to as public endpoints, others require you to have authenticated with bungie.net, referred to as private endpoints. In order to access these, your client, which may be a web browser, desktop application, or web site, needs to sign in to a bungie.net account using a supported login provider.

## Supported Login Providers
The following login providers can be used to create and sign in to a bungie.net account:
* PlayStation Network (PSN)
* Microsoft Account (Xbox)

## Overview
In a high-level, broad overview, there are two steps to follow in order to be authorised.

### Authenticate with login provider
In this step, your client providers their login details to their respective provider.
1. Request the provider's login form
2. Insert login details into the form (i.e., email address and password)
3. Send the form back to the provider along with any other expected values
4. Store cookies

### Authenticate with bungie.net
1. Send a request to the sign in link on bungie.net which corresponds to the provider (these can be found under the Sign In dropdown on bungie.net)
2. Allow any redirects to occur and provide the appropriate cookies for the login provider when required
3. Continue to allow redirection
4. Store bungie.net cookies

When both steps are complete, you will be able to make requests to private endpoints by including additional information in your requests.

## Fair Warning
Officially, Bungie is not providing support for private endpoints nor authentication. Additionally, your application should not be requesting users to provide their login details if these are to be transmitted to a third-party, such as your own website or database. The only location they should be transmitted to is their respective login provider.

## Authentication Scripts
Below is a list of scripts, excerpts, and programs provided by community members to automate the authentication flow. Use at your own risk.

### BASH
#### "Simple" authentication using PSN - by abl[1]
```bash
#!/bin/bash
# Enable "strict" mode (see http://redsymbol.net/articles/unofficial-bash-strict-mode/)
set -euo pipefail
IFS=$'\n\t'
 
# If you want to see what's going on in detail, uncomment this line.
# NOTE THAT DOING SO WILL CAUSE YOUR PASSWORD TO BE WRITTEN TO THE SCREEN
# set -x
 
# If you need EVEN MORE detail, add the "-v" argument to every curl call.
# NOTE THAT DOING SO WILL CAUSE YOUR PASSWORD TO BE WRITTEN TO THE SCREEN
 
PSN_OAUTH_BASE="https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize"
PSN_OAUTH_RESPONSE_TYPE="code"
PSN_OAUTH_CLIENT_ID="78420c74-1fdf-4575-b43f-eb94c7d770bf"
PSN_OAUTH_REDIRECT_URI="https://www.bungie.net/en/User/SignIn/Psnid"
PSN_OAUTH_SCOPE="psn:s2s"
PSN_REQUEST_LOCALE="en"
 
# cURL produces a line like...
#HttpOnly_auth.api.sonyentertainmentnetwork.com FALSE / TRUE  0 JSESSIONID  00000000000000000000000000000000.lvp-p1-npversat12-4709
#-s for silent so it doesn't show a progress bar
#"--cookie-jar -" causes cookies to be written to output so awk can see them.
#awk is then used to pull the value of JSESSIONID out.
LOGIN_SESSION_COOKIE="JSESSIONID="$(
  curl -G -s --cookie-jar - ${PSN_OAUTH_BASE} \
       --data-urlencode "response_type=${PSN_OAUTH_RESPONSE_TYPE}" \
       --data-urlencode "client_id=${PSN_OAUTH_CLIENT_ID}" \
       --data-urlencode "redirect_uri=${PSN_OAUTH_REDIRECT_URI}" \
       --data-urlencode "scope=${PSN_OAUTH_SCOPE}" \
       --data-urlencode "locale=${PSN_REQUEST_LOCALE}" \
  | awk '{ if ($6 ~ /^JSESSIONID$/) print $7 }')";"
 
# Read the PSN username
read -p "PSN Username: " PSN_USERNAME
 
# Read the PSN password, but don't print it out
stty -echo
read -p "PSN Password: " PSN_PASSWORD; echo
stty echo
 
PSN_LOGIN_URI="https://auth.api.sonyentertainmentnetwork.com/login.do"
 
# POSTing the username+password, combined with the cookie from the first call,
# yields a new cookie value.
LOGIN_COMPLETE_COOKIE="JSESSIONID="$(
  curl -s --cookie-jar - ${PSN_LOGIN_URI} \
       -H "Cookie: ${LOGIN_SESSION_COOKIE}" \
       --data-urlencode "j_username=${PSN_USERNAME}" \
       --data-urlencode "j_password=${PSN_PASSWORD}" \
  | awk '{ if ($6 ~ /^JSESSIONID$/) print $7 }')";"
 
# Giving that new cookie value to the original OAuth URI redirects to...
# https://www.bungie.net/en/User/SignIn/Psnid?code=000000
# Redirects are handled in the Location header, so use -D to dump headers.
# Headers contain "\r\n" so we have to trim the last character.
BUNGIE_LOGIN_URI=$(
  curl -G -s -D - ${PSN_OAUTH_BASE} \
     -H "Cookie: ${LOGIN_COMPLETE_COOKIE}" \
     --data-urlencode "response_type=${PSN_OAUTH_RESPONSE_TYPE}" \
     --data-urlencode "client_id=${PSN_OAUTH_CLIENT_ID}" \
     --data-urlencode "redirect_uri=${PSN_OAUTH_REDIRECT_URI}" \
     --data-urlencode "scope=${PSN_OAUTH_SCOPE}" \
     --data-urlencode "locale=${PSN_REQUEST_LOCALE}" \
  | awk '{ if ($1 ~ /^Location:$/) print $2 }' \
  | rev | cut -c 2- | rev)
# This is the simplest, most portable, way to trim one character.
# (The ${x::-1} syntax requires relatively modern bash.)
 
# Making a request to signin yields a lot of cookies
curl -s --cookie-jar - ${BUNGIE_LOGIN_URI} \
  | awk '{ if ($6 ~ /^(bungled|bungleatk)$/) print $6, $7 }'
```

### Java
#### BungieLoginSingleton in Java - by Mikazar[2]
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.CookiePolicy;
import java.net.HttpCookie;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
import org.json.JSONObject;
 
/**
 * Singleton to use for Bungie login, cookiestore remains the same for the session with cookies stored
 * @author MilkazarDevs
 * 
 * 
 *
 */
public class BungieLoginSingleton {
 
	private final static String X_API_KEY = "YOUR API KEY HERE";
 
	private final static int TYPE_XBOX = 1;
	private final static int TYPE_PSN = 2;
 
	private final static String BURL = "https://www.bungie.net/en/User/SignIn/";
	private final static String BURL_NO_LOC = "/User/SignIn/";
 
	private final static String PSN = "Psnid";
	private final static String PSN_LOGIN_URL = "https://auth.api.sonyentertainmentnetwork.com/login.do";
 
	private final static String XBOX = "Xuid";
 
	private final static String USERAGENT = "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.125 Safari/537.36";
	private final static String BUNGLED_COOKIE_NAME = "bungled";
	private final static String BUNGLEME_COOKIE_NAME = "bungleme";
 
	private static BungieLoginSingleton mInstance;
	private int type;
 
	private boolean loggedIn = false;
	private HttpURLConnection urlConnection;
	private final CookieManager cookieManager;
	private String X_CSRF = null;
	private String ACCOUNT_ID = null;
 
	public BungieLoginSingleton(){
		cookieManager = new CookieManager(null, CookiePolicy.ACCEPT_ALL);
		CookieHandler.setDefault(cookieManager);
	}
 
	public static synchronized BungieLoginSingleton getInstance(){
		 if (mInstance == null) {
	            mInstance = new BungieLoginSingleton();
	        }
	        return mInstance;
	}
 
	public boolean checkLogin(String uname, String pword, int provider) throws IOException{
		this.type = provider;
		//check login
		checkLoginFlow(uname, pword, provider);
 
		if(loggedIn){
			//force cookiestore population
			urlConnection.getHeaderFields();
			//save header values
			readCookiesForHeaderValues();
			log("X_CSRF: "+X_CSRF);
			log("ACC_ID: "+ACCOUNT_ID);
		}
 
		printHeaders();
		printCookies();
 
		testLogin();
 
		return loggedIn;
	}
 
	private void checkLoginFlow(String uname, String pword, int provider) throws IOException{
 
		log("***********checkloginFlow started");
		//form url based on provider
		String urlProvider = provider==TYPE_XBOX ? BURL+XBOX : BURL+PSN;
		//check cookie validity
		urlConnection = (HttpURLConnection) new URL(urlProvider).openConnection();
		urlConnection.setInstanceFollowRedirects(false);
		urlConnection.addRequestProperty("User-Agent", USERAGENT);
 
		String newLoc = urlConnection.getHeaderField("Location");
		log("Loc1: "+newLoc);
 
		//Bungie cookies still valid (also check if there's a locale redirect (/en/User/SignIn/ could become fr/User/SignIn, it/User/Signin etc)
		if(newLoc==null || newLoc.endsWith(BURL_NO_LOC+(provider==TYPE_XBOX ? XBOX : PSN))){
			loggedIn = true;
			return;
		}
 
		urlConnection = (HttpURLConnection) new URL(newLoc).openConnection();
		urlConnection.setInstanceFollowRedirects(false);
		urlConnection.addRequestProperty("User-Agent", USERAGENT);
 
		if(urlConnection.getResponseCode()==HttpURLConnection.HTTP_OK){
			//XBOX doesn't redirect, get current url
			newLoc = urlConnection.getURL().toString();
		}else{
			//psn redirects get redirection url
			newLoc = urlConnection.getHeaderField("Location");
		}
		log("Loc2: "+newLoc);
		//if it contains ?code, it's authenticated
		if(!newLoc.contains(urlProvider+"?code")){
			loggedIn = false;
			//no need to try login with uname or pword empty 
			if(uname.equals("") || pword.equals("")){
				return;
			}
 
			switch(provider){
			case TYPE_XBOX:
				//get xbox auth url, passing right params
				String xboxLoginUrl = "https://login.live.com/ppsecure/post.srf?" + newLoc.substring(newLoc.indexOf("?")+1);
				log("XboxLoginUrl: "+xboxLoginUrl);
				//read content, need to look for input value with id i0327 to pass as parameter 
				BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
				StringBuffer content = new StringBuffer();
				String inputLine;
				while((inputLine = in.readLine()) != null) 
				content.append(inputLine);
				in.close();
				//search ppftvalue
				Matcher matcher = Pattern.compile("id\\=\"i0327\" value\\=\"(.*?)\"\\/").matcher(content);
				log("Content: \n"+content.toString());
				if(matcher.find()){
			        String ppft = matcher.group(1);
			        log("Value ppft: "+ppft);
 
			        matcher = Pattern.compile("urlPost:'(.*?)'").matcher(content);
			        //something changed, it wasn't working no more, with this fix it works again
			        if(matcher.find()){
			        	xboxLoginUrl = matcher.group(1);
			        }
					//do request
			        Map<String, String> map = new HashMap<String, String>();
					map.put("PPFT", ppft); 
					map.put("login", uname);
					map.put("passwd", pword);
					map.put("KMSI","1");
					String qParams = createURLEncodedQueryString(map);
 
					urlConnection = (HttpURLConnection) new URL(xboxLoginUrl).openConnection();
					urlConnection.addRequestProperty("User-Agent", USERAGENT);
					urlConnection.setInstanceFollowRedirects(true);
					urlConnection.setRequestMethod("POST");
					//urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
					urlConnection.setDoOutput(true);
					urlConnection.setFixedLengthStreamingMode(qParams.getBytes().length);
					PrintWriter out = new PrintWriter(urlConnection.getOutputStream());
					out.print(qParams);
					out.close();
 
					//follow redirects seems not to always work here
					newLoc = urlConnection.getHeaderField("Location");
					if(newLoc==null){		
						newLoc = urlConnection.getURL().toString();
					}else{
						//do the redirect manually
						urlConnection = (HttpURLConnection) new URL(newLoc).openConnection();
						urlConnection.setInstanceFollowRedirects(true);
						urlConnection.addRequestProperty("User-Agent", USERAGENT);
 
						newLoc = urlConnection.getURL().toString();
					}
					log("XboxLoc: "+newLoc);
 
					if(newLoc.contains(urlProvider+"?code")){
						loggedIn = true;
			        	return;	
					}
 
					loggedIn = false;
		        	return;
 
		        }
	        	log("No match found. No login");
	        	loggedIn = false;
	        	return;
 
			case TYPE_PSN:
 
 
				Map<String, String> map = new HashMap<String, String>();
				map.put("params", "cmVxdWVzdF9sb2NhbGU9ZW5fVVMmcmVxdWVzdF90aGVtZT1saXF1aWQ="); 
				map.put("j_username", uname);
				map.put("j_password", pword);
				map.put("rememberSignIn","1");
				String qParams = createURLEncodedQueryString(map);
 
				urlConnection = (HttpURLConnection) new URL(PSN_LOGIN_URL).openConnection();
				urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
				urlConnection.setInstanceFollowRedirects(false);
				urlConnection.setDoOutput(true);
				urlConnection.setRequestMethod("POST");
				urlConnection.addRequestProperty("User-Agent", USERAGENT);
				urlConnection.setFixedLengthStreamingMode(qParams.getBytes().length);
				PrintWriter out = new PrintWriter(urlConnection.getOutputStream());
				out.print(qParams);
				out.close();
 
				newLoc = urlConnection.getHeaderField("Location");
				log("Loc3: "+newLoc);
				if(newLoc.contains("authentication_error")){
					log("Auth error psn");
					loggedIn = false;
					return;
				}
 
				urlConnection = (HttpURLConnection) new URL(newLoc).openConnection();
				urlConnection.setInstanceFollowRedirects(true);
				urlConnection.addRequestProperty("User-Agent", USERAGENT);
				urlConnection.setRequestMethod("GET");
 
				newLoc = urlConnection.getHeaderField("Location");
				log("Loc4: "+newLoc);
 
				break;
			}
 
			if(newLoc==null){
				newLoc = urlConnection.getURL().toString();
				log("Loc4.1: "+newLoc);
			}
 
			if(newLoc.toLowerCase().contains("register")){
				loggedIn = false;
				return;
			}
 
			loggedIn = newLoc.indexOf(urlProvider) == 0;
			return;
		}
 
		urlConnection = (HttpURLConnection) new URL(newLoc).openConnection();
		urlConnection.setInstanceFollowRedirects(false);
		urlConnection.addRequestProperty("User-Agent", USERAGENT);
 
		urlConnection.connect();
 
		loggedIn = true;
	}
 
	private void readCookiesForHeaderValues() {
 
		Iterator<HttpCookie> cooks = cookieManager.getCookieStore().getCookies().iterator();
		while(cooks.hasNext()/* && X_CSRF==null && ACCOUNT_ID==null*/){
			HttpCookie cook = cooks.next();
			log(cook.toString());
			if(cook.getName().equals(BUNGLED_COOKIE_NAME)){
				X_CSRF = cook.getValue();
			}
			if(cook.getName().equals(BUNGLEME_COOKIE_NAME)){
				ACCOUNT_ID = cook.getValue();
			}
		}
	}
 
	//TODO remove, just for testing	
	private void log(String message){
		System.out.println(message);
	}		
	//TODO remove, just for testing
	private void printCookies(){
		System.out.println("******Cookies******* ");
		for(HttpCookie co : cookieManager.getCookieStore().getCookies()){			
			log("\t"+co.getName() 
			+ "\t"+co.getValue() 
			+ "\t"+co.getMaxAge());
		}
	}
	//TODO remove, just for testing
	private void printHeaders(){
		Set<Entry<String, List<String>>> entrySet = urlConnection.getHeaderFields().entrySet();
		System.out.println("******Headers******* ");
		for(Entry<String, List<String>> entry : entrySet){
			System.out.println("\t"+entry.getKey()+"\t"+entry.getValue().toString());
		}
	}
 
	private static final char PARAMETER_DELIMITER = '&';
	private static final char PARAMETER_EQUALS_CHAR = '=';
	/**
	 * 
	 * @param parameters a Map containing Key,Value pairs
	 * @return a String representing the url encoded querystring
	 * @throws UnsupportedEncodingException
	 */
	public static String createURLEncodedQueryString(Map<String, String> parameters) throws UnsupportedEncodingException {
	    StringBuilder parametersAsQueryString = new StringBuilder();
	    if (parameters != null) {
	        boolean firstParameter = true;
 
	        for (String parameterName : parameters.keySet()) {
	            if (!firstParameter) {
	                parametersAsQueryString.append(PARAMETER_DELIMITER);
	            }	             
	            parametersAsQueryString.append(parameterName)
	                .append(PARAMETER_EQUALS_CHAR)
	                .append(URLEncoder.encode(
	                    parameters.get(parameterName), "UTF-8"));
 
	            firstParameter = false;
	        }
	    }
	    return parametersAsQueryString.toString();
	}
 
	private void testLogin() throws IOException{
		String url = "https://www.bungie.net/Platform/Destiny/"+type+"/MyAccount/Vault/";
 
		log(url);
 
		urlConnection = (HttpURLConnection) new URL(url).openConnection();
		urlConnection.setRequestMethod("GET");
		urlConnection.addRequestProperty("User-Agent", USERAGENT);
        urlConnection.addRequestProperty("X-API-Key", X_API_KEY);
        urlConnection.addRequestProperty("X-CSRF", X_CSRF);
 
        BufferedReader in = new BufferedReader(
        	new InputStreamReader(urlConnection.getInputStream())
        );
 
        String inputLine;
        StringBuffer sbTmp = new StringBuffer();
        while ((inputLine = in.readLine()) != null)
            sbTmp.append(inputLine);
        in.close();
 
        JSONObject json = new JSONObject(sbTmp.toString()); // convert it to JSON object
        log(json.toString(4));
	}
}
```

### PHP
#### Destiny PHP cURL Authentication - by lowlines[3][4]
```php
function do_webauth($method, $username, $password) {
	global $cookie_file; // a valid file path to where the cookies will be stored (ie cookie.txt)
	$user_agent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1";
 
	$methods = array(
		'psn' => 'Psnid',
		'xbox' => 'Xuid'//'Wlid'
	);
	$dest = 'Wlid'; if (isset($methods[$method])) $dest = $methods[$method];
	$url = BUNGIE_URL.'/en/User/SignIn/'.$dest;
 
	$default_options = array(
		CURLOPT_USERAGENT => $user_agent,
		CURLOPT_COOKIEJAR => $cookie_file,
		CURLOPT_COOKIEFILE => $cookie_file,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_SSL_VERIFYHOST => 2,
	);
 
	// Get Third Party Authorization URL
	$ch = curl_init();
	curl_setopt_array($ch, $default_options);
	curl_setopt_array($ch, array(
		CURLOPT_URL => $url,
	));
	curl_exec($ch);
	$redirect_url = curl_getinfo($ch)['redirect_url'];
	curl_close($ch);
 
	// Bungie Cookies are still valid
	if (!$redirect_url) return true;
 
	// Try to authenticate with Third Party
	$ch = curl_init();
	curl_setopt_array($ch, $default_options);
	curl_setopt_array($ch, array(
		CURLOPT_URL => $redirect_url,
	));
	$auth_result = curl_exec($ch);
	$auth_info = curl_getinfo($ch);
	$auth_url = $auth_info['redirect_url'];
 
	// Normally authentication will produce a 302 Redirect, but Xbox is special...
	if ($auth_info['http_code'] == 200) $auth_url = $auth_info['url'];
 
	curl_close($ch);
 
	// No valid cookies
	if (strpos($auth_url, $url.'?code') !== 0) {
		$result = false;
		switch($method) {
			case 'psn':
				$login_url = 'https://auth.api.sonyentertainmentnetwork.com/login.do';
 
				// Login to PSN
				$ch = curl_init();
				curl_setopt_array($ch, $default_options);
				curl_setopt_array($ch, array(
					CURLOPT_URL => $login_url,
					CURLOPT_POST => 3,
					CURLOPT_POSTFIELDS => http_build_query(array(
						'params' => 'cmVxdWVzdF9sb2NhbGU9ZW5fVVMmcmVxdWVzdF90aGVtZT1saXF1aWQ=', // without empty server result 
						'j_username' => $username,
						'j_password' => $password,
						'rememberSignIn' => 1 // Remember signin
					)),
				));
				curl_exec($ch);
				$redirect_url = curl_getinfo($ch)['redirect_url'];
				curl_close($ch);
 
				if (strpos($redirect_url, 'authentication_error') !== false) return false;
 
				// Authenticate with Bungie
				$ch = curl_init();
				curl_setopt_array($ch, $default_options);
				curl_setopt_array($ch, array(
					CURLOPT_URL => $redirect_url,
					CURLOPT_FOLLOWLOCATION => true
				));
				curl_exec($ch);
				$result = curl_getinfo($ch);
				curl_close($ch);
				break;
			case 'xbox':
				$login_url = 'https://login.live.com/ppsecure/post.srf?'.substr($redirect_url, strpos($redirect_url, '?')+1);
				preg_match('/id\="i0327" value\="(.*?)"\//', $auth_result, $ppft);
 
				if (count($ppft) == 2) {
					$ch = curl_init();
					curl_setopt_array($ch, $default_options);
					curl_setopt_array($ch, array(
						CURLOPT_URL => $login_url,
						CURLOPT_POST => 3,
						CURLOPT_POSTFIELDS => http_build_query(array(
							'login' => $username,
							'passwd' => $password,
							'KMSI' => 1, // Stay signed in
							'PPFT' => $ppft[1]
						)),
						CURLOPT_FOLLOWLOCATION => true
					));
					$auth_result = curl_exec($ch);
					$auth_url = curl_getinfo($ch)['url'];
					curl_close($ch);
 
					if (strpos($auth_url, $url.'?code') === 0) {
						return true;
					}
				}
				return false;
				break;
		}
		$result_url = $result['url'];
		if ($result['http_code'] == 302) $result_url = $result['redirect_url'];
 
		// Account has not been registered with Bungie
		if (strpos($result_url, '/Register') !== false) return false;
 
		// Login successful, "bungleatk" should be set
		// Facebook/PSN should return with ?code=
		// Xbox should have ?wa=wsignin1.0
		return strpos($result_url, $url) === 0;
	}
	// Valid Third Party Cookies, re-authenticating Bungie Login
	$ch = curl_init();
	curl_setopt_array($ch, $default_options);
	curl_setopt_array($ch, array(
		CURLOPT_URL => $auth_url,
	));
	curl_exec($ch);
	curl_close($ch);
	return true;
}
```

### Python
#### Live Authentication - by Unblessedpants[5]
```python
import requests
import re
 
exp_urlpost = r'urlPost:\'(https://.*?)\''
exp_ppft = r'<input type="hidden" name="PPFT" id=".*" value="(.*?)"/>'
 
url_signin = 'https://www.bungie.net/en/User/SignIn/Xuid?bru=%252f'
 
apikey = 'YOURAPIKEY'
liveuser = 'SELF@EXPLANATORY.ORG'
livepass = 'SELFEXPLANATORY'
 
s = requests.Session()
 
r = s.get(url_signin)
url_post = re.findall(exp_urlpost, r.content.decode())[0]
ppft = re.findall(exp_ppft, r.content.decode())[0]
payload = { 'login': liveuser, 'passwd': livepass, 'PPFT': ppft }
r = s.post(url_post, data = payload)
 
apiheaders = {'X-API-Key': apikey, 'x-csrf': s.cookies.get_dict()['bungled']}
 
r = s.get('https://www.bungie.net/Platform/Destiny/1/MyAccount/Vault/', headers=apiheaders)
```

#### PSN Auth with Python/Requests - by Quantum Ascend[6]
```python
import getpass
import logging
 
from base64 import b64encode
from urlparse import urlparse
 
import httplib
httplib.HTTPConnection.debuglevel = 0
 
import requests
# https://urllib3.readthedocs.org/en/latest/security.html#insecurerequestwarning
requests.packages.urllib3.disable_warnings()
 
 
API_KEY = None  # Use your own API Key
 
 
def login(username, password):
    logger = logging.getLogger(__name__)
 
    BUNGIE_SIGNIN_URI = "https://www.bungie.net/en/User/SignIn/Psnid"
    PSN_OAUTH_URI = "https://auth.api.sonyentertainmentnetwork.com/login.do"
 
    logger.info("Logging in...")
 
    # Get JSESSIONID cookie.
    # We follow the redirection just in case the URI ever changes.
    get_jessionid = requests.get(BUNGIE_SIGNIN_URI, allow_redirects=True)
    jsessionid0 = get_jessionid.history[1].cookies["JSESSIONID"]
    logger.debug("JSESSIONID: %s", jsessionid0)
 
    # The POST request will fail if the field `params` isn't present
    # in the body of the request.
    # The value is just the query string of the PSN login page
    # encoded in base64.
    params = urlparse(get_jessionid.url).query
    logger.debug("params: %s", params)
    params64 = b64encode(params)
    logger.debug("params64: %s", params64)
 
    # Post credentials and pass the JSESSIONID cookie.
    # We get a new JSESSIONID cookie.
    # Note: It doesn't appear to matter what the value of `params` is, but
    # we'll pass in the appropriate value just to be safe.
    post = requests.post(
        PSN_OAUTH_URI,
        data={"j_username": username, "j_password": password, "params": params64},
        cookies={"JSESSIONID": jsessionid0},
        allow_redirects=False
    )
    if "authentication_error" in post.headers["location"]:
        logger.warning("Invalid credentials")
    jsessionid1 = post.cookies["JSESSIONID"]
    logger.debug("JSESSIONID: %s", jsessionid1)
 
    # Follow the redirect from the previous request passing in the new
    # JSESSIONID cookie. This gets us the x-np-grant-code to complete
    # the sign-in with Bungie.
    get_grant_code = requests.get(
        post.headers["location"],
        allow_redirects=False,
        cookies={"JSESSIONID": jsessionid1}
    )
    grant_code = get_grant_code.headers["x-np-grant-code"]
    logger.debug("x-np-grant-code: %s", grant_code)
 
    # Finish our sign-in with Bungie using the grant code.
    auth_cookies = requests.get(BUNGIE_SIGNIN_URI,
                                params={"code": grant_code})
 
    # Create requests Session.
    session = requests.Session()
 
    # Save the cookies indicating we've signed in to our session
    session.headers["X-API-Key"] = API_KEY
    session.headers["x-csrf"] = auth_cookies.cookies["bungled"]
    session.cookies.update({
        "bungleatk": auth_cookies.cookies["bungleatk"],
        "bungled": auth_cookies.cookies["bungled"],
        "bungledid": auth_cookies.cookies["bungledid"]
    })
 
if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    ul3_logger = logging.getLogger("requests.packages.urllib3")
    ul3_logger.setLevel(logging.WARN)
 
    username = None
    password = None
 
    while not username:
        username = raw_input("Enter Username: ")
    while not password:
       password = getpass.getpass("Enter Password: ")
 
    login(username, password)
```

## References
1. https://www.bungie.net/en/Clan/Post/39966/106896643/0/0
2. https://www.bungie.net/en/Clan/Post/39966/132682213/0/0
3. https://www.bungie.net/en/Clan/Post/39966/107282722/0/0
4. https://www.bungie.net/en/Clan/Post/39966/119730323/0/0
5. https://www.bungie.net/en/Clan/Post/39966/122394884/0/0
6. https://www.bungie.net/en/Clan/Post/39966/112644874/0/0