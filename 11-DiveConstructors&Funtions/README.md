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

**Prototypes** are objects themselves.

Every time we create an object, an additional prototype is created as well, this is like a "fallback object"

> Functions are objects!!