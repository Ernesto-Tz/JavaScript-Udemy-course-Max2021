# Browser Storage

Data from an application can be stored in different places depending on what we want to do with it. 

An online shop will use a DB to store products, users, brands, etc; this information is essential and persistent for the whole application. Additionally we can use the browser storage to save temporary/ "convenience" data, this data will be saved on each user's browser therefore it is only relevant for that user such as user's shopping cart (in case we are not running analytics on it), login credentials, etc.

## Browser Storage Option

- localStorage, sessionStorage: key-value store, JSON structure. Used for storing and manage user preferences or basic user-data. Reachable by using JavaScript and only JS. Easy to use and quite versatile but bad for complex data.
    
- Cookies: key-value store with some configuration options, manages simple user preferences and basic user-data. User can clear it with JS. It does not have a great API which makes it a bit harder to work with, versatile, the most important feature is that cookies are sent to the server without going http request, localStorage can't be read by the server but cookies can, they are attached to the header of the http request.

- IndexedDB: Relatively sophisticated, client-side db, we can use it with query language, we can access it with JS. Great for complex (non-critical) data, good for performance. It is mostly used for a desktop-type application which is running on the browser.

## `localStorage`, `sessionStorage`

This storage can be accessed by the window object, we need to use the `localStorage.setItem()` method:

```JavaScript
localStorage.setItem('uID','u1234');
```

We can pass a JSON object which will be "stringified".

Session storage lives as long as the tab is open, local storage will stayed until the user cleans up that data.

## Cookies

The server should be prepared to use cookies in order to used them properly.

We access them through `document.cookie`:

```JavaScript
// We need to create a key-value string:
const userId = 'u1234';
document.cookie = `uid=${userId}`;
// This adds a new value, it does not replace or deletes previous information
```

Unlike local and session storage cookies will only be displayed when we have a server running.

If we do not set an expiration date on cookies it will be determine by the browser or will be over when the session is over.

We can define the expiration date as follows:

```JavaScript
document.cookie = `uid=${userId}; max-age=360`;
document.cookie = `user=${JSON.stringify(user)}`;
```

When a new cookie is added, the system will make sure it does not exist already. If it does it will only be kept for longer. However, this behavior changes the index of stored cookies, if cookie number 5 is deleted and then added again it will no longer have the index 5 but the last one. For this reason pointing at cookies by index is not a good idea.

## IndexDB

We work with an "in-browser DB".
IDB.js is a great library to work with this storage option.