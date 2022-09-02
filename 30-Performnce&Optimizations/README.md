# 30 Performance & Optimizations

## Startup time:

- Size of the script: It will take more bundle for the user to download the script if bigger.
- Number of Http Roundtrips: If the code is non-bundled it will require more http request to get all third party libraries. We need to use webpack to solve this issue.

## Runtime Performance

- Optimize Code Execution: DOM Access, avoid unnecessary code execution, specially unnecessary DOM operations.
- Memory Leaks
- Code Alternatives: Better performance. For example loop through an array can be done in different ways but not all of them are efficient.
- Micro-optimizations: Optimizing very specific use-case (data structures access/changes)

## Measuring Performance

- Check how many roundtrips the application is executing.
- What is the script size.
- Set an specific bundle size.
- Explore best practices and patterns/ benchmarks.
- Measure in the production code.

Tools:
- We can add `performance.now()`
- Browser DevTools
- jsperf.com (not working)
- [webpagetest.com](https://www.webpagetest.org/)
- [Google devTools documentation](https://developer.chrome.com/docs/devtools/)

## Lazy loading

It is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. [More here](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

We can separate our code into different parts, once the user loads our web app we only send the necessary files. This makes displaying our application faster at first. If the user requires more functionalities we will send those parts of the application. E.g. An application with a list of books, we will send all the information to be displayed, if the user wants to add a new book we will send that pice of code; but only until they select that option.

## Micro-Optimizations

It is important to understand tha not every time the fastest code is best. It might not be a big difference and the slower code is clearer or more suitable for our application then we should use that option.

## Memory leaks

It can happen that we delete an element but it is not actually deleted on the DOM. This would mean we have a memory leak, we don't know where is that element, or it can happen that we deleted it on the DOM but not on the script and its reference is still kept by the browser.