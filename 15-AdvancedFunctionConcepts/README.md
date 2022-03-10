# 15 Advanced Function Concepts

## Pure Functions

A function which receives some arguments and gives back some output. It will give always the same output if the arguments given are the same, additionally it does not have any side effects (it doesn't affect other parts of the program).

## Factory functions

A function that produces another function.
It is used when we need to create many times a function with slightly different information.

## Closures

It is important to notice that when we declare a variable on the global scope which is used inside a function the value of that variable will be the latest declared. It means that if we declare the variable before calling the function and then we changed the variable; the latest value will be used inside the function.

```JavaScript
let multiplier = 1.5;

function taxCalculator (tax){
    return tax * multiplier * 0.34;
}

multiplier = 1.8;

// In this case the value used inside the function will be 1.8
```

> Shadowing = The inner scope wins over the outer environment.

## Immediately Invoked Function Expression IIFE

```JavaScript
(function() {
    var age = 30;
    console.log(age); // 30
})()
 
console.log(age); // Error: "age is not defined"
```
  Before it was hard to control where variables were available - variables outside of function always were available globally. IIFEs solve that problem since the script (or parts of it) essentially are wrapped in a function => Function scope is used.   
  Nowadays, this is not really required anymore.  
  Now we used `let` and `const`

