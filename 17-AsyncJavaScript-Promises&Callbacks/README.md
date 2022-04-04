# 17 Async JavaScript: Promises and Callbacks

JavaScript is an single thread language. The code in Vanilla JS will be executed from top to bottom.

The way in which this is solved to have async code is:
- The browser engine can have multiple threads. APIs are executed there (http request, navigator geolocation, setTimeout, etc.)
- The JS engine will send those executions to the browser engine and then continue with the ones define on the JS file.
- Once the function execution inside the browser is done it will need a callback function to go back to the JS engine.
- The callback function is stored on the Message Queue, it will be pushed back to the JS engine by the Event Loop whenever possible.
- Any code on the JS file which is not async will be executed first simply because it does not have to go through all the process (JS engine > Browser API > Message Queue > Event loop).

## Synchronous code

Code that is performed in a single thread order. Tasks are stack on a queue. Only when a task is done the following one can be started, this blocks operations and results on slow applications. 

## Asynchronous code

Code that is performed on the background while the rest of the code is running. Once the async code is done the application will pick up the result.
We often need Async code for HTTP requests, or large functions.

## Callback function

When an async code is done the code will come back on that specific callback function.

## Event loop

It is built into the browser. It is part of the host environment. It basically runs all the time to know if stack is empty or there is any event happening which should be taken care. If there is any operation to performed it will push it into the JavaScript Stack.

## Promises

Allow us to write readable code with multiple callbacks.

Promise is an **object**. The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

We create a promise as an object, it takes 1 argument => an anonymous function which will be the needed execution; this inner function takes 2 arguments which are callback functions => `resolve` and `reject`, they will be executed depending on the state of the promise.

```JavaScript
const a = 4;
const b = 4;

const promise = new Promise(function(resolve, reject) {
    // do thing, then…
    console.log("working now...");
    if (a === b) {
    resolve("See, it worked!");
    }
    else {
    reject(Error("It broke"));
    }
});

promise.then((result) => {
    console.log(result);
});
```

> After creating the promise we need to call it by executing `then()` and `catch()`. If the promise failed it is possible we get that result even without executing `then()`, however we won't be able to see the successful result unless we execute `then()`. 

Inside the `then()` \ `catch()` an argument is needed which will be the value used to given back the result.

```JavaScript
const a = 4;
const b = 5;

const promise = new Promise(function(resolve, reject) {
    // do thing, then…
    console.log("working now...");
    if (a === b) {
    resolve("See, it worked!");
    }
    else {
    reject(Error("It broke"));
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });
```

For scope reasons we create promises inside functions and return the promise itself, in that way the promise only has access to the necessary data.

```JavaScript
function checkIfEqual(a,b){
  const promise = new Promise(function(resolve, reject) {
      // do thing, then…
      console.log("working now...");
      if (a === b) {
      resolve("See, it worked!");
      }
      else {
      reject(Error("It broke"));
      }
  });
  return promise;
}


checkIfEqual(5,6)
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });
```

`Catch()` will be executed in case the promise resolution failed. All `then()` executions previous to `catch` will be skipped but if there is any `then` after the `catch` they will be executed.   
Location of the `catch` is important. We can define multiple `catch`.

```JavaScript
getPosition()
  .then((posData) => { // If promise succeeded
    positionData = posData;
    return setTimer(2000);
  })
  .catch((err) => { //If promise failed
    console.log(err);
    return 'on we go...';
  })
  .then((data) => { //This will be executed no matter what
    console.log(data, positionData);
  });
setTimer(1000).then(() => { // Nested Callback
  console.log('Timer done!');
});
console.log('Getting position...'); // Executed normally
```

## Async - await

We can only use it in functions. We add the keyword `async` right before the declaration of the function.
When we declare `async` on a function, JavaScript wraps everything inside that functions and creates a promise with it. It will in fact return a promise by default.  
It still uses promises; behind the scenes it transforms our code into `then` statements. It is a normal promise with a new syntax which will be transform. 
It does not change the way JS works, it just changes how it looks. One of the fallbacks is that we lost the `catch` block which allowed us to have error handling, we will do it with a normal `try - catch` block

```JavaScript
async function trackUserHandler() {
  // let positionData;
  const posDate = await getPosition();
  const timerData = await setTimer(2000);
  console.log(posData,TimerData);
}
```

It is great for writing shorter code. 

## Promise.race()

It gets an array of Promises and returns the result of the fastest Promise executed.

## Useful links

- [Promises by freeCodeCamp](https://www.freecodecamp.org/news/javascript-promises-explained/#:~:text=What%20is%20a%20promise%20in,operation%2C%20and%20its%20resulting%20value.)
- [Promises by Web.dev](https://web.dev/promises/)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)