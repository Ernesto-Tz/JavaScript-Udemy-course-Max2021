let num: number = 3
let name1: string = 'Ernesto'
let displayed: boolean = true
let x: any = 453.3

// *** Arrays
let ids: number[] = [1,2,3,4,5,6]
let arr: any[] = [1,true,'five',6]

// *Tuple - We can specify the type we want to include in the array:

let tupleExm:[number, string, boolean] = [1, 'Andrew', true]

// *Tuple array:

let tupleExm2: [number, string][]
tupleExm2 = [
    [1,'Brenda'],
    [2,'Charles'],
    [3,'Dave']
]


// *** Union - We can have a variable to hold more than one type
let newID: string | number

// Enum - define a set of named constants

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

// *** Objects - We can define what type of parameters we want to use with that object.
                // Usually to define this we use "Type" or interfaces
const user1:  { id: number, name: string } = { id: 1, name: 'Ilse'}

// Using *type*
type User = { id: number, name:string }

const user2: User = {id:2, name: 'Ingrid'}


// *** Functions

function addNum(x:number, y:number): number {
    return x + y
}

addNum( 2, 1 )

// void will not return anything it will just perform the operation.

// *** Interfaces - Defines the structure of an object or function. Similar way to using "type"

interface UserInterface {
    id: number,
    name: string
} 

const user3: UserInterface = { id: 3, name: 'Jack'}

// *** Interfaces and functions

interface mathFunc { (x: number, y: number): number}

const add:mathFunc = (x: number, y: number): number => x+y
const sub:mathFunc = (x: number, y: number): number => x-y

// *** Classes

class Player {
    private id: number
    protected name: string
    public age: number
  
    constructor(id:number, name: string, age:number) {
        this.id = id
        this.name = name
        this.age = age
    }
}


// *** Classes and Interfaces

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


class Employee extends Person {
    position: string

    constructor (id:number, name: string, age:number, position: string) {
        super(id, name, age)
        this.position = position
    }
}

// Generics

// Problem with "any" for generics

function getArray (items:any[]): any[] {
    return new Array().concat(items)
}

let numArr = getArray([2,3,4,5,6])
let strArr = getArray(['Sam', 'Cole', 'Mike'])

numArr.push('hi') // we dont want to include string on an array with numbers

// Using Generics

function gettingArray<Type> (items:Type[]): Type[] {
    return new Array().concat(items)
}

let numArr1 = gettingArray<number>([2,3,4,5,6])
let strArr1 = gettingArray(['Sam', 'Cole', 'Mike'])

//numArr1.push('hello') /*This will throw an error */
numArr1.push(2)
