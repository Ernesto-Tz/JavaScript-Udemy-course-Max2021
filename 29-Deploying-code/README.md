# 29 Deploying JavaScript code

Useful links:

- [Html Webpack Plugin](https://webpack.js.org/plugins/html-webpack-plugin/) - [documentation](https://github.com/jantimon/html-webpack-plugin).
- [Firebase Docs](https://firebase.google.com/docs/hosting)

We have 3 type of applications/websites that we can deploy:

- **Static host** (Websites): It will only include HTML + CSS+ JS files, doesn't execute server-side code. The server will host assets (files, images, etc.). Some examples are: AWS S3, Firebase, etc.
- **Single-Page-Applications** (SPAs): Client-side JS code is used to re-render the page dynamically. There is only one HTML page being served.
- **Dynamic host** (Web Applications): Needs to host and execute files on the server-side. We need some knowledge about servers to deploy this applications.

More information [here](https://academind.com/learn/web-dev/dynamic-vs-static-vs-spa/).

## General Deployment Steps

1. Develop/ Write Code.
2. Test - Code free of bugs.
3. Optimize - Code suitable for all browsers.
4. Build for Production - Ship and deploy a small code as possible.
5. Deploy the Output.

This steps apply to code which needs to be on the frontend since it will be downloaded on every user; this will impact the performance of the code and how the user interacts with our application.

The server-side code will never be downloaded by the user. It doesn't have to be optimized since it will only run in our server, which normally is a powerful computer.