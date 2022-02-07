# 8. Arrays and Iterables

## Array and Iterable

**Iterables**: Objects where we can use the for-of loop. 

**Array-like**: Objects that have a length property and uses indexes to access items.

## Fixed size array

```JAvaScript
const newArray = new Array (5);// the length of the array will be only be 5

// Array to Iterable
Array.from(<Iterable>); // It converts an array-like object into an Array

const another array = Array.from(someIterable);
```	
## push() , pop() , unshift() , shift(), Splice()

- `push (<element>)`: adds an element to an array at the end
- `unshift(<element>)`: adds an element to the array at the beginning. Slower in performance
- `pop()`: Removes the last element of the array. It returns the element removed if it is necessary to use.
- `shift()`: Moves all elements to the left. Removes the first element. This operation is slower in performance 
- `splice()`: Extremely useful but only used on real Arrays. 1st Argument = Index from, 2nd = objects to delete, 3rd = Element to insert
	> We can also give negative Index -1 will point to the last element on the Array.   
	It returns the deleted elements in case we need to work with them

```JavaScript
newArray.splice(1,0,"Ernesto"); //This will insert an element on the 2nd Index with out deleting anything 

newArray.splice(1,1,"Ernesto"); //This will insert an element on the 2nd Index and delete the element which was there before. we call remove more than 1 element. 
```

It is important to mention that in JS we can add an element into an index which is much higher than the array's length. The compiler will create empty spaces in between.

## splice, concat, IndexOf, LastIndexOf, Find

- `slice()`:Returns a brand new Array. Good way to copy arrays. 
	> 1st argument = Index to start, 2nd argument = Index where to stop. Returns that part of the array. 
	
- `concat()`: allows to add elements at the end of the array.
	
- `IndexOf()`: Returns the Index Of the first element given as argument. Does not work with references (objects)
- `LastIndexOf()`: Returns the Index Of the last element given as argument. Does not work with references (objects)
- `Find()`: Used on real arrays. Needs an anonymous function with three parameters (object, index, objectsArray). Returns the first object found. Returns the reference of the object.

```JavaScript
	const people = [{name : "Max"},{name : "Manuel"}];
	const Manuel = people.find((person, index, people) => {
		return person.name === "Manuel";
	});
```

## Includes, map, sort

- `includes()`: returns true or false if the element is inside of an array.
- `map()`: It is very useful to transform every element. Returns a brand new Array
- `sort()`: Sorts the array, but it transforms everything to strings. In case of numbers it can give wrong results.   
Better option for numbers:
```JavaScript
const sortedArray = numbers.sort((a,b) => {
		if (a>b) return 1;
		else if ( a === b) return 0;
		else {return -1;}
	)};
```

- `reverse()`: Reverses an array. 
- `filter()`: Reduces the number of elements on an Array based on a filter. It will return a brand new array. It takes a function as argument:
```JavaScript
	const filteredArray = prices.filter((price, index , prices) =>{
		return price > 6;
	}); 
	//This expression can be shortened with arrow functions:
	const filteredArray = prices.filter(price => price > 6);
```

- `reduce()`: It will reduce the Array determined by a function.
	1. Takes a function with the following arguments (previous value, current value, current index, initial array)  
	2. Takes an additional argument (optional) initial value to start the function. It uses recursion to change the previous and current value.

## Rest operator (...)

`Rest operator (...)` pulls out every element of the array and uses them into the new function. For example 
1. We can use it to create a brand new copy of the array.
> It is important to know that if we copy an array full of objects the array will be new but the objects are the old objects, this happens because we copied the reference of the objects. We can use the following method to create new objects: <video 202>

```JavaScript
const people = [{name : "Ernesto", age : 25}, {name : "Ilse", age 21}];
const copiedPeople = [people.map(person =>({name : person.name , age : person.age}))];
```

2. Some functions require elements instead of an array. Math.min(<elements separated by coma>). If we pass an array we will get NaN as a result. Here using the rest operator is the solution.

```JavaScript		
const numbers = [2,34,55,-34,43.2];
console.log(Math.min(...numbers));		
```

- Destructing an array into different variables:

```JavaScript
const data = ["Budapes","London"];
const [city1, city2] = data; // Values inside the array will now be stored inside a new variable
```

## Sets, Maps

**Sets**: Order is not guaranteed. It does not allow duplicates. No index-base access.  
**Maps**: Order is guaranteed. Duplicate keys are not allowed. Key-base access.
	
### Working with sets:

```JavaScript
// Creating:
const ids = new Set();
//- Iniciating:
const ids = new Set([1,2,3,4]);
// Going through the Set:
	// -entries() : returns an group of arrays which can be easily transform into maps.
	// -values() : returns an iterable that only yields the set values once.
for (const entry of ids.entries()){
	console.log(entry);
	//The output will be relations between entries.
	//[1,1] , [1,2] , 
}
```

If we add a value from the set which is already there we wont get an error simply nothing happens. Same if if we delete an element which is not on the set.
	
### Working with maps:

```JavaScript
	//- Creating:
	const typeOfDictionary = new Map ([[key1, value1],[key2,value2]]); 
	//Maps can be useful when we have a group of objects and we can create information related to that pbject using the object itself as its ID:
	const person1 = { name : "Ernesto"};
	const person2 = { name : "Arnold"};
	const peopleSales = new Map([[person1, [{date: '11-April-2021', amount: 100}]], [person2, [{date: '10-April-2021', amount: 70}]]]);
	
	//- Add a value:
	peopleSales.set(key3,value3);
	
	//Getting information from the Map:
	for (const [key, value] of peopleSales.entries()){
		console.log(key, value); 
	}	
	// We can also use peopleSales.keys() or peopleSales.values()
```

### Maps vs Objects: check the file for all info.

In generals map are better in performance. But objects are better for small operations.

**Weak Set**: Internally can only store objects.   
**Weak Map**: Objects used as a key or value.   

They allow the garbage collector to eliminate objects which hold a reference to the set/map but are not longer used anywhere else in the code.
One of the problems with them is that they have less methods, for example one of the missing methods is "entries" since JS can not guaranteed the existence of objects inside the set/map.