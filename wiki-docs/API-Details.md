## Endpoints
Each API endpoint is located under https://www.bungie.net/Platform. Some endpoints require you to be [[authorised|Authentication]] and cannot be used without additional parameters being passed to the platform. All endpoints return [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) [JSON](http://json.org/).

## Minimum Request Requirements
When making a request to the platform, you **must** include the following headers in addition to standard HTTP request headers (i.e. Host):

* [[X-API-Key|API-Key]]

Requests should be made using HTTPS.

## Minimum Private Endpoint Requirements
In addition to the minimum request requirements above, private endpoints requiring authentication must provide additional details when making requests to the platform. These include:

### Headers

* [[X-CSRF|X-CSRF]]
* Cookie (see below)

### Cookies
Bungie.net needs to identify which account is making a request, which is of course done using cookies. You will need to provide, at a minimum, the following cookies:

* bungleatk
* bungled
* bungles (no longer needed)

You should also provide the following cookies to aid in diagnostic tasks:

* [bungledid](https://www.bungie.net/en/Clan/Post/39966/85087279/0/0/1)

## Minimum Response Details
Each endpoint returns a single JSON-encoded object with at least the following properties:
```javascript
{
    "Response": 0,
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```