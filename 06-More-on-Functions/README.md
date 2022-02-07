# 6. More Functions

## Parameter vs Arguments

There is a technical difference between them:

- **Parameters** are variables which you specify between parentheses when defining a function.
- **Arguments** then are the concrete values you pass to a function when calling that function*/

```JavaScript
function sayHi(name) { ... } //Parameter
function sayHi("Ernesto") { ... } //Argument
```

## Methods

How to create methods for an object

```JavaScript
const person = {
  name : "Ernesto",
  greet: function greet(){
   console.log("Hola");
  }
 };
 person.greet();
```

## Functions are **objects**

Functions can also be used for declaration of variables
In this case we can omit the name next to the keyword "function" since we will only access the function with the name stablish on the left side of the declaration.

```JavaScript
 const star = function (){
  console.log("Game started");
 };
 star();
```

## Function declaration vs Function expression

- **Declaration**: (how it is usually used on C#): The function will be hoisted to top and can be used even if it was declared anywhere in the file.
- **Expression**: (Showed above). It will be hoisted but not initialized, this forces to use a function only after declaring it.

## **Arrow functions**: They have some advantages to make code simpler

1. We can omit the function keyword and the name because they are treated as anonymous.
	```JavaScript
	()=>{ ... }
	```

2. If we have exactly one argument we can omit the parenthesis
	```JavaScript
	arg => { ...}
	```

3. If we have exactly one expression we can omit the return keyword and curly braces, in this case the result of this function will be always a return.
	```JavaScript
	//It only works with single operations or one line scenarios
	(a, b) => a + b;
	```

4. When there is more than one operation we need curly braces and return if that is what we are tryin to do.
   ```JavaScript
	(a, b) => {
		a * 2;
		return a + b;
	}
	```

5. Function returns an object (with shortened syntax)
	```JavaScript
	const loadPerson = pName => ({name: pName });
	```

`Return` key word to stop execution.  
>If we only use return inside a statement we would stop the execution, it will return undefined.

## Different number of arguments

When passing a different number of arguments for calling a function the missing arguments will have a value of `undefined`  
We can use default values for the parameters.
When passing `undefined` values as parameters the default value will be taken instead.

```JavaScript
const startGame = (playerName, numberOfGames = 3) => {}
```

## Rest operator (...)

We can pass an undefined number of parameters in the following way:

```JavaScript
const sumUp ( a, b,...numbers)=>{ //The first 2 arguments are taken individually
  let sum = 0;
  for(const num of numbers){
   sum += num;
  }
  return sum;
 };

/*- We can create functions inside functions*/
 const sumUp ( a, b,...numbers)=>{
  const validateNumber = (number) => {
   return isNan(number) ? 0 : number;
 } //This function is only accessible inside this function.
  let sum = 0;
  for(const num of numbers){
   sum += validateNumber(num);
  }
  return sum;
 }
```

## Call-back Functions

It is called call-back because I create the pointer on the exact place I want, the function is defined by me but it is called by someone else.
> An example of this are the event listeners for clicks.  
> It also refers to a function which asks another function as a parameter.

`bind()` -It prepares the function -???????

`call(), apply()` -They are similar to bind() but they execute the function.
