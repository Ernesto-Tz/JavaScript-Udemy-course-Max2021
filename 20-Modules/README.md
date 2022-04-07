# Modules

It is the idea of separating the code in objects which are related to an specific functionality.

In Java Script it is important the way in which we import JS files into the HTML file, if the order is not strict to how the application uses every function, the app will break.

For this reason it is a usual practice to create a single file which calls every file needed and import that single file into the HTML file.

Additionally when a file has a dependency on another, it is easier to see that dependency on top of the file. This is possible thanks to Modules.

Module also "locks down" files. Even if we separate files into smaller objects but we do not use modules everything will be included into the global scope. By using Modules we allow objects to only have access to the necessary information (local scope).

In order to make an object reachable by other objects we need to use the `export` keyword and `import` it somewhere.

```JavaScript
export class NewComponent {
    adder(a,b) {
        return a + b;
    }
}
```
```JavaScript
import { NewComponent } from './NewComponent.js'

class ParentComponent {
//.....
}
```

We also need to set up `type` attribute on the HTML file to `module`:

```HTML
<script src="assets/scripts/app/NewComponent.js" defer type="module"></script>
```

## CORS origin policy

Modules are seen by the browser engine as a dependency on an external file. In case those files are created by us we know they are not malicious, however the engine does not know that; it can be a dependency pointing to a external library which might include code trying to create a security breach. [More info here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).

This is solved by running our application on a server.

There is an easy way to run a server by using npm. [Documentation here](https://www.npmjs.com/package/serve).

## Export syntax

We can export many different things:

- Objects
- Arrays
- Functions

Imports don't work file-wise, we have to specify what we are importing.   
We can export and import more than one thing:

```JavaScript
import { NewComponentAddFunction, NewComponentDeleteFunction } from './NewComponent.js'

class ParentComponent {
    /*.....*/
}


// ----- We could also gather all the export from a file and give a new custom name.
// ----- For that we need to use '* as ________'

import * as NewNamedComponent from './NewComponent.js'

export class ParentComponent {
    /*.....*/
}
```

We can use `import` and `export` on the same file.

## default export

In this way we can omit the name of the object, function, etc. This also changes the way how we import the object:

```JavaScript
export default class {
    adder(a,b) {
        return a + b;
    }
}
```
```JavaScript
import NewComponent from './NewComponent.js'

export class ParentComponent {
//.....
}
```

The file in which I am exporting from can still have multiple exports but by using this syntax the default will be the one specified. On the other imports I will have to use the syntax with the curly brackets.

One of the fallbacks from using this is that naming will depend on the person working with the object. We could determine specific naming conventions or only used "named" exports (not using default).

## Network and Modules

One of the problems with Modules is that a different http request is created for each Module. This adds up "dead" time (when the browser creates and waits for the request). We will solve this problem by using tooling. However another solution is **lazy loading** which is loading only those files which are necessary for starting the app then we will download additional Modules for other operations. 

Previously we used "static" import syntax, we also have a "dynamic" syntax which only loads the necessary modules. Dynamic syntax should be used on code which is not always needed.

How to use dynamic Modules:

1. Export module
2. Import module by using the `import()` method.
3. Specify the module file location inside the `import()` method (use `.js` at the end)
4. The returned object is a Promise, for that reason we need to use `.then()` to have access to the data.
5. Inside `.then()` get the `module` and create the necessary logic.

```JavaScript
export class NewComponent{
    adder(a,b) {
        return a + b;
    }
}
```
```JavaScript
class ParentComponent {
    import('./NewComponent.js'.then( module => {
        const newComp = module.NewComponent ();
        newComp.adder(2,3);
    }));
}
```

## When is Module code executed?

Code will be executed once the Module is loaded. However, it will be only executed on the first time even if that file is required multiple times.

> I think it makes sense because only the first time is when the file was actually requested.

