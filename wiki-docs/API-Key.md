## What is an API key?
The API key is used by Bungie to measure who and what is using the API.

## How do I get one?
Visit the [developer portal](https://www.bungie.net/en/User/API) on bungie.net.

## How do I use it?
In a HTTP request, include the following header:

```
X-API-Key: your-api-key-here
```

## Is the key mandatory?
Yes, although as of May, 2015, it is not being enforced. However, you should include one now to avoid your application breaking in the future.