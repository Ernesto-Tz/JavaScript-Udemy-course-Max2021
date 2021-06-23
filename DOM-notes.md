/************************ 7. Working with the DOM 	********************/
	
/*Window vs Document (DOM)
	- Window: The active Browser Window/ It actually only works with the current Tab. Gives access to window specific properties and methods. Top most object.
	- Document: Root DOM node. Provides access to element querying, DOM content. The DOM allows to interact with the rendered HTML code but it's not the same
		as the HTMl code os part of it.*/

/*- querySelectorAll(), getElementsByClassName()
	-They return an array-like object. It supports some of the methods of an array but not all of them.
	-QuerySelector() is the method used nowadays in order to select a group of HTML elements into JS
		The difference from getElementsByName() is that in this case I also need to include the CSS type (class or ID)*/
	document.querySelectorAll('#list-item');//Selects all elements with ID "list-element"
	document.querySelectorAll('.list-item');//Selects all elements with class "list-element"
	document.querySelector('ul li:first-of-type');// Valid selector for the first item inside a list. It requires extra performance.

/*- Nodes vs Elements
	-Nodes: All type of objects that make up the DOM. HTML tags are "element nodes" (or just elements). This include withe spaces, break points, etc.
	-Elements: Elements are type of nodes, they have special properties and methods to interact with, depending on the kind of element.
		Only "important" elements we do not consider a withe space node as an Element.*/

/*- Traversing the DOM
	-Select an element from the DOM and then go trough the DOM by that element (Child, Descendant, Parent, Ancestor)*/
	
/*- Difference between .childNodes and .children
	-.childNodes will get all Nodes from an Element. This includes text Nodes (Even withe spaces inside the HTML file).
		This help us to understand the difference between Nodes and Elements.*/

/*- closest() 
	-IT selects the closest ancerstor with the given HTML tag type*/
	ul.closest('body');
	
/*- .classList 
	-When accessing an Element and trying to change its style which is already defined on a CSS class, we can have access to a group of useful methods by using .classList
		We can Add, Remove, Contains, Replace, Toogle (exchange a class, if it is set it will remove it, if not it will add it).*/
	ul.classList.toggle('visible');

/*Insert content
	-innerHTML changes th e whole content of the tag, even the existing content which is still used is changed with new ones with the exact same content.
		This affects drastically the performance of the website and also represent a lisk for loosing inputs from the previous version.
	-We should check which method is supported by al browsers since some of them are not supported on all of them.
		insertAdjacentElement is very useful when trying to insert elements in the middle of a list of an existing list.
	insertAdjacentElement(<postition>, element);*/
	ul.insertAdjacentElement('afterend', newElement); // afterend, beforeend, etc. Check options at MDN
	
/*- cloneNode 
	-It can be useful when trying to create an element which is very similar to another one and we only need to change a couple of things.*/

/*- "live" vs Static 
	- querySelectorAll() returns a NodeList, this list only includes the initial elements from the HTML file. 
		If we add a new element the NodeList will not show this new element.
		*It might be better in some cases because the list does not need to be updated every time we change the list in other parts of the code.
			Once it is called, it will take a snapshoot of the selected elements an return them. Better for performance.
			The items included are references.
	- getElementsByClassName() return and HTMLCollection, this list will be updated every time we insert something.*/
/*- Remove() vs removeChild(<element>)
	-remove : it is called by the elemetn which has to be removed. Not supported on Internet Explorer
	-removeChild: called by the parent Element. Supported by all browser. */

/************************ 8. Arrays and Iterables 	********************/

/*- Array and Iterable
	-Iterables: Objects where we can use the for-of loop. 
	-Array-like: Objects that have a lenght property and uses indexes to access items.*/

/*- Fixed size array*/
	const newArray = new Array (5);// the lenght of the array will be only be 5
	
/*- Array.from(<Iterable>) // It converts an array-like object into an Array*/
	const another array = Array.from(someIterable);
	
/* push() , pop() , unshift() , shift()
	-push(<element>) : adds an element to an array at the end
	-unshift(<element>) : adds an element to the array at the begining. Slower in performance
	-pop() : Removes the last element of the array. It returns the element removed if it is necessary to use.
	-shift() : Moves all elements to the left. Removes the first element. This operation is slower in performance 
	-splice() : Extremely useful but only used on real Arrays. 1st Argument = Index from, 2nd = objects to delete, 3rd = Element to insert
				We can also give negative Index -1 will point to the last element on the Array.
				It returns the deleted elements in case we need to work with them*/
	
	newArray.splice(1,0,"Ernesto"); //This will insert an element on the 2nd Index with out deleting anything 
	newArray.splice(1,1,"Ernesto"); //This will insert an element on the 2nd Index and delete the element which was there before. we call remove more than 1 element. 

//** It is important to mention that in JS we can add an element into an index which is much higher than the array's lenght. The compiler will create empty spaces in between.

/* 	-slice() : Returns a brand new Array. Good way to copy arrays. 
				1st argument = Index to start, 2nd argument = Index where to stop. Returns that part of the array. 
	
	-concat() : allows to add elements at the end of the array.
	
	-IndexOf() : Returns the Index Of the first element given as argument. Does not work with references (objects)
	-LastIndexOf() : Returns the Index Of the last element given as argument. Does not work with references (objects)
	-Find() : Used on real arrays. Needs an anonymous function with three parameters (object, index, objectsArray). Returns the first object found.
			Returns the reference of the object.*/
	
	const people = [{name : "Max"},{name : "Manuel"}];
	const Manuel = paople.find((person, index, people) => {
		return person.name === "Manuel";
	});

/*	-includes() : returns true or false if the element is inside of an array.
	-map() : It is very useful to transfor every element. Returns a brand new Array
	-sort() : Sorts the array, but it transforms everything to strings. In case of numbers it can give wrong results. 
			Better option for numbers:*/
	const sortedArray = numbers.sort((a,b) => {
		if (a>b) return 1;
		else if ( a === b) return 0;
		else {return -1;}
	)};
/*	-reverse() : Reverses an array. 
	-filter() : Reduces the number of elements on an Array based on a filter. It will return a brand new array. It takes a function as argument: */
	const filteredArray = prices.filter((price, index , prices) =>{
		return price > 6;
	}); 
	//This expression can be shortened with arrow functions:
	const filteredArray = prices.filter(price => price > 6);

/*	-reduce(): It will reduce the Array determined by a function.
			   1.Takes a function with the following arguments (previous value, current value, current index, initial array)  
			   1. takes an additional argument (optional) initial value to start the function.
			   It uses recursion to change the preious and current value.*/

/*- Rest operator (...): pulls out every element of the array and uses them into the new function. 
		For example 1. We can use it to create a newbrand copy of the array.
					It is important to know that if we copy an array full of objects the array will be new but the objects are the old objects,
					this happens because we copied the reference of the objects. We cna use the folllowing method to create newobjects: <video 202>*/
		const people = [{name : "Ernesto", age : 25}, {name : "Ilse", age 21}];
		const copiedPeople = [people.map(person =>({name : person.name , age : person.age}))];
	/*	2. Some functions require elements instead of an array. 
			Math.min(<elements separated by coma>). If we pass an array we will get NaN as a result. Here using the rest opartor is the solution.*/
		const numbers = [2,34,55,-34,43.2];
		console.log(Math.min(...numbers));		

/*- Destructing an array into diferent variables: */
	
	const data = ["Budapes","London"];
	const [city1, city2] = data; // Values inside the array will now be stored inside a new variable

/*- Sets, Maps
	- Sets: Order is not guaranteed. It does not allow duplicates. No index-base access.
	- Maps: Order is guaranteed. Duplicate keys are not allowed. Key-base access.*/
	
/*- Working with sets:*/
	//- Creating:
	const ids = new Set();
	//- Iniciating:
	const ids = new Set([1,2,3,4]);
	/*- Going through the Set:
		-entries() : returns an group of arrays which can be easily transfomr into maps.
		-values() : returns an iterable that only yields the set values once.*/
	for (const entry of ids.entries()){
		console.log(entry);
		//The output will be relations between entries.
			//[1,1] , [1,2] , 
	}
	//*** If we add a value from the set which is already there we wont get an error simply nothing happens. Same if if we delete an element which is not on the set.
	
/*- Working with maps:*/
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

/*- Maps vs Objects: check the file for all info.
	- In generals map are better in performance. But objects are better are better for small operations.

/*- Weak Set: Internally can only store objects. 
	Weak Map: Objects used as a key or value.
	They allow the garbage collector to eliminate objects which hold a reference to the set/map but are not longer used anywhere else in the code.
		One of the problems with them is that they have less methods, for ecample one of the missing methods is "entries" since JS can not guaranteed
		the existance of objects inside the set/map*/