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