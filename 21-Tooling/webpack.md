# Webpack

Webpack is a tool for modern JavaScript applications, it allows us to split code into Modules, webpack will internally create a dependency graph from every entry point (initial JavaScript file) and combine every module required in the project.  
Complete [documentation](https://webpack.js.org/concepts/).

## Core concepts

### Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). 

### Output

The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

We can configure this part of the process by specifying an output field in the configuration.

### Loaders

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.