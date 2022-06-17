"use strict";
let num = 3;
let name1 = 'Ernesto';
let displayed = true;
let x = 453.3;
// *** Arrays
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'five', 6];
// *Tuple - We can specify the type we want to include in the array:
let tupleExm = [1, 'Andrew', true];
// *Tuple array:
let tupleExm2;
tupleExm2 = [
    [1, 'Brenda'],
    [2, 'Charles'],
    [3, 'Dave']
];
// *** Union - We can have a variable to hold more than one type
let newID;
// Enum - define a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
// *** Objects - We can define what type of parameters we want to use with that object.
// Usually to define this we use "Type" or interfaces
const user1 = { id: 1, name: 'Ilse' };
const user2 = { id: 2, name: 'Ingrid' };
// *** Functions
function addNum(x, y) {
    return x + y;
}
addNum(2, 1);
const user3 = { id: 3, name: 'Jack' };
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// *** Classes
class Player {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now register.`;
    }
}
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
// Generics
// Problem with "any" for generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([2, 3, 4, 5, 6]);
let strArr = getArray(['Sam', 'Cole', 'Mike']);
numArr.push('hi'); // we dont want to include string on an array with numbers
// Using Generics
function gettingArray(items) {
    return new Array().concat(items);
}
let numArr1 = gettingArray([2, 3, 4, 5, 6]);
let strArr1 = gettingArray(['Sam', 'Cole', 'Mike']);
//numArr1.push('hello') /*This will throw an error */
numArr1.push(2);
