# Data Types, Variables and functions

## String concatenation

- Using the `+` symbol
- Using the back quote (`) symbol and adding a $ sign.

```JavaScript
let number = 0;
let newString = `The number is: ${number}`;
```

## Parse string to Int

```JavaScript
let newNum = ParseInt("2");

// Using the + symbol before would parse it as well.
Num1 + +num2;
newNum + +"2";
```

## Methods for string

- `split()` : separates a string into an array.
- `join()` : creates a string from an array.

## Defer

`Defer` keyword on the link for the script:  
It is used to improve the way in which the script and html files are downloaded and executed. See video <50. Importing Scripts Correctly with "defer" & "async">. It is related to hoisting.

## How to compare variables

- `==` compares values.
- `===` compares values and `typeof`

## Tenary Operator (video 93)

It is a conditional expression we can use it to assign values:

```JavaScript
let newVariable = (condition) ? (value if true) : (value if false);
let newVariable = 23 < 24 ? "Smaller" : "Bigger";
```

## Truthy, Falsy < video 81>

JavaScript will try to obtain a Boolean value even when it is not explicit. For example, an empty string will result on *Falsy* , an Int with the value of 0 will result on False.
We can have a description of all this comparison on the video.

## Tricks with Boolean operators (video 95)

1. Using `!!` - This will convert a Truthy/Falsy into a real True/False.

```JavaScript
const userInput = "";
const isValidInput = !!userInput;
```

2. Using `||` - for an expression. If the first value is false or falsy it will assign the second one.

```JavaScript
const userName = userInput || "Ernesto";
```
