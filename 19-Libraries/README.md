# Third-Party Libraries

Libraries are used to solve general operations (subtract arrays, http requests, etc.), which can be used on different projects. Libraries make coding easier since we only have to understand how to call the library and use it; this allow us to focus on the business logic of our application.

## Adding libraries

We can add libraries in different ways. In reality a library only includes a javascript file with specific methods and operations. 

1. We can download the JavaScript file and include it inside our application. Most of the time there is a "minimize" (same features less naming/spaces) version which should be used since it is network-resources optimized. Include the library on the HTML file before our script.

    ```HTML
    <script src="lodash-library.js" defer></script>
    <script src="my-application.js" defer></script>
    ```

2. We can call the CDN version (we don't need to download the file since it is hosted somewhere). Include the library on the HTML file before our script.

    ```HTML
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" defer></script>
    <script src="my-application.js" defer></script>
    ```
    > Usually CDN servers are really fast which makes them a better option than download the file itself and including it in our server.

3. Include the library on the node packages.

## jQuery

It was a very popular library on the 2010 - 2012.   
It made querying HTML elements easier.

## Axios library

Library to send Http requests. Very efficient and smart.

## Things to keep in mind with Libraries

We probably only require a couple of functionalities from the application but we might end up downloading the whole library. Some libraries have the option of getting only parts of the library but it is included by using node packages.

We want to use libraries that are secured and verified. 