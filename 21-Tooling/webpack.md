# Webpack

Webpack is a tool for modern JavaScript applications, it allows us to split code into Modules, webpack will internally create a dependency graph from every entry point (initial JavaScript file) and combine every module required in the project.  
Complete [documentation](https://webpack.js.org/concepts/).

## Core concepts

### Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). 

*It will be the initial JavaScript file where webpack will start from. Usually `index.js` or `script.js`*

### Output

The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

We can configure this part of the process by specifying an output field in the configuration.

*The path and name of the file which is created as result a classic configuration is:*

```JavaScript
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
```
### Loaders

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

*This part is used to configure other types of files which will be processed by the application, webpack can also compile CSS files*

### Plugins

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

*Used to include more functionalities or tasks provided by webpack*

### Mode

By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

### Browser Compatibility

Webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). Webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions.

## Project Setup

Version from [Traversy Media video](https://www.youtube.com/watch?v=IZGNcSuwBZs):

1. Inside the folder of the project create a "src" folder and "dist".
2. `npm init -y`
3. `npm i -D webpack webpack-cli`
4. Update the script inside the json file. Add `"build" : "webpack"`
5. Create webpack.config.js file entry and output:
```JavaScript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // Since entry is an object we can use multiple entry points.
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' //Entry is an object it can use the name given to that file in this case "bundle"
  },
};
```
### Style loaders

Add loaders **SASS**. 
1. Run `npm i -D sass style-loader sass-loader css-loader`
2. Implement those loaders on the webpack.config.js file:
```JavaScript
//Add the following after "output":
module: {
  rules: [
    {
      test:/\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
```
3. Import those styles by calling import inside the index.js file `import './styles/main.scss'`

### HTML plugin 

It creates automatically the html file with webpack

1. Create an entry html file inside the src folder
2. Run `npm i -D html-webpack-plugin`
3. Implement on config file:
```JavaScript
//Add it as a constant
const HtmlWebpackPlugin = require('html-webpack-plugin')
module: {
  rules: [
    {
      test:/\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    title: 'New App',//we can call this title dinamically point 4.
    filename: 'index.html',//filename of the output
    template: 'src/main.html'//entry point, template to start from
  }),
]
```
4. To use the title dinamically we need to add the following inside the main.html file title tag: `<%= htmlWebpackPlugin.options.title%>`

### Setting Developer server

1. Go to json file and add: `'dev': 'webpack serve'`
2. It will say we need to install webpack-dev-server. We can type `Y` or run `npm install -D webpack-dev-server`
3. Update the config file:

```JavaScript
devServer: {
  static: {
    directory: path.resolve(__dirname, 'dist'),
  },
  port: 3000,
  open: true,//to open the browser
  hot: true,// hot reloading
  compress: true, // enable json compression
  historyApiFallback: true // not sure.
}
```
4. Run the server on the port 8080 `npm run dev`

[GitHub repository](#)

