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
4. Run `npm instal --save-dev NameOfPackage`. This lets npm know that we want know that package as a development dependency of this project. Development dependency because it is not code that I don't want to include on some server.
5. We will now see a new file "package-lock.json" which includes all dependencies from other dependencies. Also we will see the "node_modules" folder.

## ESLint 



## Webpack