# 28 Security

Useful links:

- [Security of JavaScript Applications](https://dhtmlx.medium.com/security-of-javascript-applications-1c95cd2ce533).

## Security Details in Code

JavaScript code will be download by the browser, therefore it can be read by everyone. Security details (such as: Database access credentials) should not be included inside this part of the code.

There are different type of mechanisms which help us to secure information that we might need to include in the script. For example Google uses API keys which can be included on the script to access certain services, however we can limit the ip addresses related to that key, that way only our Server IP address will be enabled to use an specific service.

## Cross-Site Scripting Attacks (XSS)

It is the most dangerous attack that we can expose in our client-side. 

Malicious code gets injected in our application and it will be executed by everyone who requests for the application.   
Injected code CAN do anything that my code could do as well.
Get users data, send request on behalf of the application, read the local browser of the user, etc.

The example showed is related to the use of `innerHTML` in this cases we can inject a `<script>` tag which includes some code, we can also include other methods to trigger some code to be executed. 

It is important to not use `innerHTML` because that can create a security bridge.

We can use packages as [sanitize-html](https://www.npmjs.com/package/sanitize-html).

Any dependency is actually downloading a script written by some programmer and running it on every person who access my website. When using third party libraries we need to make sure that they are also protected against being compromised.

Npm checks every third party and audits their vulnerabilities.

## Cross-Site REquest Forgery (CSRF)

Attackers trick the user to click on a link which they were not supposed to click and trigger something which was not supposed to happen.
- Attack that depends on injected content (e.g. image)
- Request to malicious servers are made with user's cookies.

It is a server side issue. Not really a JavaScript problem.

## Cross-Origin Resource Sharing (CORS)

It is a security concept, not an attack.
Request are only allowed from same origin (domain).
Controlled via server-side response headers.

