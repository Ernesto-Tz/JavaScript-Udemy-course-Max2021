# 17 Async JavaScript: Promises and Callbacks

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

We create a promise as an object, it takes 2 functions as arguments `resolve` and `reject`.

```JavaScript
const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (success) => {
        resolve(success);
        },
        (error) => {
        reject(error);
        },
    );
});
```

After creation we can call the promise by declaring `then` and `catch`.
> Catch will be executed in case the promise resolution failed. All `then` executions previous to `catch` will be skipped but if there is a `then` after the `catch` they will be executed. Location of the `catch` is important.

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
We can define multiple `catch`.

## Async - await

We can only in functions. We add the keyword `async` right before the declaration of the function.
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

- [Promises](https://web.dev/promises/)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)