## What is X-CSRF?
X-CSRF is a HTTP header you must provide to make use of private endpoints. It is a security measure to prevent [Cross Site Request Forgeries](https://en.wikipedia.org/wiki/Cross-site_request_forgery) (CSRF attacks).

## What value do I put in it?
The exact value of the bungled cookie.
```
X-CSRF: bungled-cookie-value
```

## ErrorCode 99
If you try to make use of a private endpoint without including a valid X-CSRF header and token, you will receive a "Please sign-in to continue." response.
```javascript
{
   "ErrorCode":99,
   "ThrottleSeconds":0,
   "ErrorStatus":"WebAuthRequired",
   "Message":"Please sign-in to continue.",
   "MessageData":{
 
   }
}
```