# TypeScript

## Set up

1. Install typescript globally with node. Run `npm i -g typescript`. (add `sudo` on Mac/ Linux)
2. Check it is install with `tsc -v`
3. Create a new project with the `dist` & `src` structure.
4. Create an `index.ts` file inside the src folder.
5. Open a terminal and run `tsc --init` on the root folder. This will create a `tsconfig.json` file.
6. Update the `tsconfig.json` on the following parts:
```JavaScript
{
  "compilerOptions": {
    "target": "es6",
    /* Modules */
    "rootDir": "./src",
    /* Emit */
    "outDir": "./dist",
  }
}
```

7. Run `tsc` on the root folder or run `tsc --watch` to compile with changes.

## Basics Types

```JavaScript
let num: number = 3
let name1: string = 'Ernesto'
let displayed: boolean = true
let x: any = 453.3
```

## Arrays

```JavaScript
let ids: number[] = [1,2,3,4,5,6]
let arr: any[] = [1,true,'five',6]
```

## Tuple

We can specify the type we want to include in the array:

```JavaScript
let tupleExm:[number, string, boolean] = [1, 'Andrew', true]

// *Tuple array:

let tupleExm2: [number, string][]
tupleExm2 = [
    [1,'Brenda'],
    [2,'Charles'],
    [3,'Dave']
]
```

## Union

We can have a variable to hold more than one type

```JavaScript
let newID: string | number
```

## Enum

Define a set of named constants

```JavaScript
enum Direction1 {
    up, // returns value 0
    down, // returns value 1 ...
    left,
    right
}

enum Direction2 {
    up = 'up', // returns value up
    down = 'down', // returns value down ...
    left = 'left',
    right = 'right'
}
```

## Functions

```JavaScript
function addNum(x:number, y:number): number {
    return x + y
}

addNum( 2, 1 )
```

`void` will not return anything, it will just perform the operation.

## Objects

We can define what type of parameters we want to use with that object.
Usually to define this we use `type` or `interfaces`

```JavaScript
const user1:  { id: number, name: string } = { id: 1, name: 'Ilse'}
  // We need to instantiate right away in this case

```

## type

```JavaScript
// -- Same object as before but using *type*
type User = { id: number, name:string }

const user2: User = {id:2, name: 'Ingrid'}
```

One of the advantages of `type` is that I can use unions to define variables but on Interfaces I can't. Also, primitives are not allowed on Interfaces.

## Interfaces

Defines the structure of an object or function.   
This structure is rigid, if I do not instantiate the object with all the variables stated here, I will get an error. Alternatively, I can make some of the variables optional by adding a `?` before.
I can also specified `readonly` variables. 

```JavaScript
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number // optional variable
} 

const user3: UserInterface = { id: 3, name: 'Jack'}
const user4: UserInterface = { id: 4, name: 'Bruce', 35}
```

Interfaces for functions is a similar concept, we only create the structure here.

```JavaScript
interface mathFunc { (x: number, y: number): number}

const add:mathFunc = (x: number, y: number): number => x+y
const sub:mathFunc = (x: number, y: number): number => x-y
```

## Classes

They function in the same way than before the only difference is that I need to declare what type of data I am including on the constructor parameters.

```JavaScript
class Person {
    id: number
    name: string
  
    constructor(id:number, name: string) {
        this.id = id
        this.name = name
    }
}
```

## Data Modifiers

It changes the scope of the variable. We have: 
- Public : accessible anywhere
- Private : accessible only within the class
- Protected : accessible only within the class and classes which extend that particular class

```JavaScript
class Person {
    private id: number
    protected name: string
    public age: number
  
    constructor(id:number, name: string, age:number) {
        this.id = id
        this.name = name
    }
}
```

If I do not declare anything those properties will be `public` by default

## Interfaces and classes

I need to use the keyword `implements` on the class to specify which Interface I am using.   
It is important to mention that I can not use **data modifiers** on interfaces, which means all properties defined on my class have to be `public`. If I want to make them `private` I will have to create getters and setters for them. (Check this solution [here](https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript))


```JavaScript
interface PersonInterface {
    id: number,
    name: string
    register(): string  
} 

class Person implements PersonInterface{
    id: number
    name: string
    age: number
  
    constructor(id:number, name: string, age:number) {
        this.id = id
        this.name = name
        this.age = age
    }

    register () {
        return `${this.name} is now register.`
    }
}
```

## Extending a class

Use the keyword `extends`.   
To use the parent class constructor I need to call th `super` function passing the necessary parameters

```JavaScript
class Person {
    id: number
    name: string
    age: number
  
    constructor(id:number, name: string, age:number) {
        this.id = id
        this.name = name
        this.age = age
    }

    register () {
        return `${this.name} is now register.`
    }
}

class Employee extends Person {
    position: string

    constructor (id:number, name: string, age:number, position: string) {
        super(id, name, age)
        this.position = position
    }
}
```

## Generics

We use it to create components which can be reusable but at the same time have a well-define structure.   
We can use `any` to have flexibility, but it will allow every type of data and we will lose the consistency we would like to keep.

**Example:** We can use the function and declare an array with anything inside, it is a reusable code.
The problem with this approach is that we can later on include other type of variables
We can add a string on a array full of numbers, etc.

```JavaScript
// Using "any" for generic purposes
function getArray (items:any[]): any[] {
    return new Array().concat(items)
}

let numArr = getArray([2,3,4,5,6])
let strArr = getArray(['Sam', 'Cole', 'Mike'])

numArr.push('hi') // This works but it is undesirable
```

To solve this issue we use Generics instead of `any`

```JavaScript
function gettingArray<Type> (items:Type[]): Type[] {
    return new Array().concat(items)
}

let numArr1 = gettingArray<number>([2,3,4,5,6])
let strArr1 = gettingArray<string>(['Sam', 'Cole', 'Mike'])

numArr1.push('hello') /*This will throw an error */
numArr1.push(2)
```

Instead of the `Type` keyword we can also use only `T` as an alternative

***This information was obtained from [this Traversy video](https://www.youtube.com/watch?v=BCg4U1FzODs&t=924s)***