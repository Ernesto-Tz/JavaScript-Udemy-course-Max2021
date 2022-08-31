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