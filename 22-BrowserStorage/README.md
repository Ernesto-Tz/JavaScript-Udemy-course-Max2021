# Browser Storage

Data from an application can be stored in different places depending on what we want to do with it. 

An online shop will use a DB to store products, users, brands, etc; this information is essential and persistent for the whole application. Additionally we can use the browser storage to save temporary/ "convenience" data, this data will be saved on each user's browser therefore it is only relevant for that user such as user's shopping cart (in case we are not running analytics on it), login credentials, etc.

## Browser Storage Option

- localStorage, sessionStorage: key-value store, JSON structure. Used for storing and manage user preferences or basic user-data. Reachable by using JavaScript and only JS. Easy to use and quite versatile but bad for complex data.
    
- Cookies: 

- IndexedDB: 