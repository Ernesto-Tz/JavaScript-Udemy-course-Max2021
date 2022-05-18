# 4. Loops and Statements

## Switch-Case

It will always evaluate with `===`  
It uses fall trough: If we don't use the `break` keyword it will execute the following case automatically. It will not perform the comparisons.

```JavaScript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

## Loops

There is 4 different type of loops:

1. `for` (Normal for loop) We used let for the declaration of the variable.
2. `for-of` (used to check elements inside an Array, similar to foreach). We use constant inside the loop.
3. `for-in` (used to check elements inside any object, similar to foreach)
4. `while` (Normal while or do while).

```JavaScript
let cars = [{brand: 'BMW', year: 1999}, {brand: 'Audi', year: 2020}, {brand: 'Audi', year: 2004}, {brand: 'Mercedes', year: 1970}, {brand: 'Tesla', year: 2017}]

const car1= {brand: 'Toyota', year: 2019}

//1.
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//2.
for-of (const car of cars) {
    console.log(car);
}

//3.
for-in (const value in car1) {
    console.log(value);
}

//4.1
while (condition) {
  // code block to be executed
}

//4.2
do {
  // code block to be executed
}
while (condition);
```
## Break, Continue

- `Break` stops the loop in the moment in it is called. It will break the only the inner loop.
- `Continue` makes the execution to be skipped.

## Label Statement

We are able to label loops in order to use break on nested loops. For example if we want to break the outer loop from the most inner loop we can label them and use break accordingly.

```JavaScript
let i = 0;
outerWhile: do{
 console.log("Outer", i);
 innerFor: for(let j = 0; j < 5; j++){
  if(j=== 3){
   break outerWhile;
  }
  console.log("Inner",j);
 }
}while(i < 3);
```

## Custom Errors

we use the key word `throw`

```JavaScript
let input = "";
if( input===""){
 throw {message: "Invalid input"};
 }
```

## Try - Catch & Finally

> It is a very bad code strategy to wrap everything into a try-catch.  
> We only use this for errors that I am unable to control such as user input or wrong network connection to a server.

After catch sometimes `finally` is used. The code inside will always be executed (Even when the catch code was executed).  
It is sometimes useful because in some scenarios the error which was caught is thrown again to the analytics server.
This will help us to see the error on our own servers and still be able to execute some code.
