# Tooling and Workflows

Tooling helps to optimize our code. On the previous example we had different Modules which made several http requests; this can be solved by using some tools.

## Limitations of "Basic Projects"

- We would need to micro manage all imports or we would have a lot of unnecessary http requests.

- Not optimized code. It is not as small as it could be. Something we saw on optimized libraries files which we download.

- Browser support.

- Need for development server.

- Code quality check.

## Helpful tools

- Development server: [npm serve](https://www.npmjs.com/package/serve) or webpack dev server option.

- Bundling tool: analyses imports and exports; combines multiple files into a bundle code (less code). [Webpack](https://www.npmjs.com/package/webpack)

- Code Optimization Tool: Shorten function names, remove whitespace, etc. **WebPack** also contains plugins for optimizing.

- Code Compilation Tool - Write modern code and get "older" code as output. [Babel](https://www.npmjs.com/package/@babel/core)

- Code Quality Checker: [ESLint](https://www.npmjs.com/package/eslint)

## Workflow overview

We have 2 workflows:

**Development**:

1. Check code quality.
2. Bundling
3. Reload Dev Server when there are some changes.

**Production**

0. Check code quality (this should have been done before).
1. Bundling
2. Compiling new code into old code
3. Optimization
4. The output is a Production-ready code.

## How to make a project be managed by npm

In order to use these tools we need to install node and npm. They will allow us to download all dependencies from those tools.

1. On a terminal go to the projects path and run `npm init`.
2. Set up all configurations. 
3. When finished it will add a "package.json" which will include all necessary dependencies on our project, npm will look at this file and install them all.
4. Run `npm instal --save-dev NameOfPackage`. This lets npm know that we want that package as a development dependency of this project. Development dependency because it is code that I don't want to include in some server once the project is deployed.
5. We will see a new file "package-lock.json" which includes all dependencies from other dependencies. Also we will see the "node_modules" folder.

## ESLint 

To start ESLint check the [documentation](https://eslint.org/docs/user-guide/getting-started).   
Configuration ESLint [documentation](https://eslint.org/docs/user-guide/configuring/).

## Webpack

Check webpack [online documentation](https://webpack.js.org/), [internal documentation]('./webpack.md') or Udemy video 417.

### How to start a webpack project

1. Create a json package inside the project with `npm init`, all dependencies will be stored on this file.
2. Install webpack wit npm `npm i --save-dev webpack webpack-cli`.
3. The structure of the project really matters here, we will use a "src" folder (this is not a rule but a convention, here we can store all modules and utilities).
4. We need to create the entry point file, which is the first file webpack will look at, then it will go through all the modules/dependencies specified there. This usually is a single "index.js" file.
5. Create the "webpack.config.js" file on the root folder. Here we will give all instructions and needed plugins to webpack:

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js', // the entry file point 4
  output: { // The result of webpack
    filename: 'app.js', 
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  }
};
// This is an example of a very simple project
```

6. Add an npm script in the package.json to run webpack. Usually we use the "build" instruction:

```javascript
{
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
  "devDependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3"
  }
}
```

7. Run webpack with `npm run build`.
8. Add the script result to html `<script src="assets/scripts/app.js"></script>`

After this we can add loaders such as **Babel** or **Sass** and also plugins for images or css.

More information on plugins and loaders [here](https://dev.to/antonmelnyk/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5).

### Add webpack dev server

1. Run the command `npm install --save-dev webpack-dev-server`
2. On the webpack.config file we can specify where the root html can be found:
```JavaScript
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // define the index.html path
    },
    compress: true, // compresses the local host address
    port: 9000,
  },
```
3. On the package.json file we can specify the script `"build:dev": "webpack-dev-server"`
4. Run the server with the command `npm run build:dev`

More information on webpack server [here](https://webpack.js.org/configuration/dev-server/).