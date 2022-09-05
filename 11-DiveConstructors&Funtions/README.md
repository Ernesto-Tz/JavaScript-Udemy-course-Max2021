# Section 11: Deep dive into Constructor Functions & Prototypes

## Constructor Functions

Classes we declared as functions in the past:

```JavaScript
function Person {
    this.age = 30;
    this.name = "Ernesto";
    this.greet = function(){
        console.log(`My name is${this.name}, I am ${this.age}`);
    }
}

//To instantiate this we need to call it as if it was an object.

const person = new Person();
person.greet();
//Here the important part is the "new" keyword. Without it would return an error. 
```
## Prototypes

JavaScript is a prototype based language.
Constructor Functions and prototypes power JavaScript Objects.

**Prototypes** are objects themselves. There is a chain of prototype objects which JavaScript will access in case properties or methods are not defined on the first layer object definition. E.g. We have a person object, then a prototype "person" object, then a prototype object, and so on.

Every time we create an object, an additional prototype is created as well, this is like a "fallback object"

> Functions are objects!!

- `__proto__` is a "backup" object which will be included on anything inside our code (properties, functions, classes, methods, etc.)

- `prototype` only exists on function objects.

```JavaScript
function Person(){
    this.age = 30;
    this.name = 'Ernesto';
    this.greet = function (){
        console.log('Hi there!');
    }
}

console.dir(Person);

const p = new Person();

console.log(p.__proto__ === Person.prototype);
// This will return true

```

The concept of `prototype` was created to optimize object creations. At the end, if we create an object with the same arguments the JavaScript engine will use the prototype of that object which points to the same memory allocation.   
E.g. we define an object with the `greet()` method, this method will be define on the `prototype` object and this way, we can reuse that code and not create a `greet()` method for every object instantiated.

## Useful links:

- [Constructor functions MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function)
- [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)