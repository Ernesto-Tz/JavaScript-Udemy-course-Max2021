# Java Script Udemy Course - The complete Guide (Maximilian S.)

## 9. More on Objects
Objects are core data structures. It is used to reflect "real-world" entities. They allow us to apply real-world logic to coding. 

We can divided values into two categories:
- Primitive Values
    - String
    - Numbers 
    - Booleans
    - Null
    - Undefined 
    - Symbol
- Reference Values (Objects)
    - Arrays
    - { ... } object literal notation
    - Everything else


How to create an object in Java Script:
```JavaScript
let person = {
    name: 'Ernesto', 
    age: 25, 
    hobbies: ['Basketball', 'Football'],
    greet: function(){
        alert('Hi there!');
    }
};
```
We can create a new property in the following way even when it was not declared before:
```JavaScript
person.isAdmin = true;
``` 
We can delete a property with the delete keyword:
```JavaScript
delete person.age; // Sets the property to undefined.
```
>We could also set the property to `null`, this will mean that I want the property to still exist but right now I will not use it. Another option is to set it to `undefined`, this will mean I do not care about the property anymore (we usually do not set anything to `undefined` it is a default value used by Java Script).

### Dynamic Property Access
Properties from an object can be access with different notations. We can refer to them as strings and use the similar notation of an array:
```JavaScript
console.log(person['name']);
```
Using this syntax we can access a property dynamically:
```JavaScript
const dynamicProperty = 'name';
console.log(person[nameProperty]);
``` 
### How to add a property from which we do not know the name in advance

We store the information as a variable and we use the brackets notation:
```JavaScript
const extraName = document.getElementById('extra-name').value;
const extraValue = document.getElementById('extra-value').value;

const newMovie = {
    title : movieTitle,
    [extraName]: [extraValue],
    id: Math.random()
};
```
### 9.1 Same property and variable name

When creating an object, if the input variable will have the same name as the object property we can only use one name. Example:

```JavaScript
const title = document.getElementById('title').value;
const extraName = document.getElementById('extra-name').value;
const extraValue = document.getElementById('extra-value').value;

const newMovie = {
    title, //Property and input Variable have the same name.
    [extraName]: [extraValue],
    id: Math.random()
};
```

### Spread operator (...)

Objects are reference variables, when we try to copy an object into another JS will only copy the pointer but the memory address will be the same for both objects.

```JavaScript
const person1 = { name: 'Ernesto', age: 25};
const person2 = person1; // same memory address for both objects

person1.isStudent = true; //also affects person2
console.log(person2);// this will also show isStudent property.
```

If we want to copy every property from an object into another object we need to use the spread operator:

```JavaScript
const person1 = { name: 'Ernesto', age: 25, hobbies: ['Dance','Soccer']};
const person2 = {...person1}; // copy of each property.

person1.isStudent = true; // only affects person1
console.log(person2);

//However the array will be still hold only a reference, if we want it to be a real copy we use the following notation:
const person2 = {...person1, hobbies: [...person1.hobbies], age: 30}; //We can even assign a new value for any property (as in age).
```

Object Destructing (watch vide 227)

### Checking for property existence

For this we use the `in` keyword

```JavaScript
const person1 = { name: 'Ernesto', age: 25, hobbies: ['Dance','Soccer']};

if('age' in person1)
{
    console.log('There is an age');
}
// Alternatively we could use:
if(person1.age === undefined)
{
    console.log('The property does not exists');
}
```

### `this` keyword

Generally, `this` refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object
 
Who is responsible for calling this? The object calling that function will be to what `this` is referring to (watch video 231)

When using arrow functions `this` refers to the global object ( the window object) even when they are inside an object.

>It is important to understand that browser engines might bind the `this` object differently. It is important to debug it. 

>`this` refers to different things, depending on where it's used and how (if used in a function) a function is called.

### call() vs bind() for calling a method

- We can use `bind()` to prepare a function for being executed in the future. It returns a function object.

- `call()` will execute the function right away and it will allow us to override what is used as the "this" object on that function. It requires a parameter, the object to use as `this`.