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