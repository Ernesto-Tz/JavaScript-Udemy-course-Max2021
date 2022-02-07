# 5. Changes from ES5 to ES6

```JavaScript
let, const, var.
```

It is related to the concept of global and block scope.

## Hoisting

It is a functionality from the browser. It will go over the JS code before executing it, looking for variables and functions.  
This allow us to use functions declared on different parts of the file. In terms of variables the following would happen:

- With **ES5** we could use a variable before declaring it. The code bellow will run but it will print `undefined`

```JavaScript
console.log(userName);
var userName = "Ernesto";
```

- Now with **ES6** we can not use a variable before it is declared. The code bellow will show an error.

```JavaScript
console.log(userName);
let userName = "Ernesto";
//This force us to write better code.
```

## Strict Mode

We can activate this mode in order to force the compiler to avoid autocompletion or things like that.
>This features should be avoid, in some cases can represent unexpected behavior in our code.

To activate this mode we simply add the following at the beginning of the file `use strict`

## How code is Parsed and Compiled (video 116)

There is a key concepts to know about the compilation process of JS.
This process will differ from browser to browser since each one has a different compilation engine.

- Google has [V8](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef). Created on C++.TurboFan is the name of the compiler
- Mozilla has [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Internals).

**Just in Time compilation (JiT)**: The compiler starts compiling + executing the compiled code while the code is being read/executed.

**When does the browser starts the execution of the JS code?**  
It will start it once the browser sees the html tag importing the file.

**API** are features built-in inside the browser written in C++(depending on the browser). They can be thought as communication bridges.

## How code gets executed? (video 117)

There are 2 main concepts:

- **Heap**: It is the long term memory. Managed by the browser. Stores data in the user system memory and manages access to it. Functions are stored in the heap.
- **Stack**: Important for the execution. Sort of short term memory. Manages program flow (function calls and communication). It keeps track of the function executed at the time.

>The first function is anonymous since the file imported into the HTML can be understood as a gigantic function.  
>We can see the stack execution with the Chrome developer tools on the sources tab.  
>When the execution reaches the end of the file the `Anonymous` function will be popped off.

*JS is single-threaded*: Only one thing happens at a time.

- *Event Loop*: It keeps the script 'alive' even when the file has been executed completely but we still have event listeners registered to buttons, etc.  
This becomes very important with the concept of asynchronous code.
This loops is inside the browser, not in the JS engine.

## **Primitive vs Reference Values**

1. **Primitive**: They are typically stored in the stack. When you copy a variable(assign to a new one) it copies the actual value. They are 6:  

- String
- Numbers
- Boolean
- Null
- Undefined
- Symbol

```JavaScript
  let name = "Ernesto";
  let newName = name;
  console.log(newName);
  name = "Ivan"
  console.log(newName);
```

2. **Reference**: All other objects are reference type. Since they are usually heavier they are stored in the Heap.
The variable will store only the address. Copying a variable will only copy the address.

```JavaScript
let hobbies = ["Basketball"];
let otherHobbies = hobbies;
hobbies.push("Football");
console.log(otherHobbies);
//This would also happen when we modify the second element
let person = {age: 30};
let anotherPerson = person;
anotherPerson.age = 32;
console.log(person);
//This is the reason why we get false when comparing two objects because we are comparing their memory address value which for sure is not the same.
person === anotherPerson;

/*It is a good behaviour for performance but what can we do to avoid this when necessary?
We can use ... to indicate we want a real copy of that object*/
let person = {age: 30};
let anotherPerson = {...person};
anotherPerson.age = 32;
console.log(person);
//Array syntax
let otherHobbies = [...hobbies];
```

## Garbage Collection (video 120)

It refers to the heap memory management.  
Memory Leaks: Unused objects, where we still hold references to.
