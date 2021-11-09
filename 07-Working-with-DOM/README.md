# 7. Working with the DOM
	
## Window vs Document (DOM)

**Window**: The active Browser Window. It only works with the current Tab. Gives access to window specific properties and methods. Top most object.  

**Document**: Root DOM node. Provides access to element querying, DOM content. The DOM allows to interact with the rendered HTML code but it's not the same as the HTMl code it's part of it.

## `querySelectorAll()`, `getElementsByClassName()`

They return an array-like object. It supports some of the methods of an array but not all of them.  

`QuerySelector()` is the method used nowadays in order to select a group of HTML elements into JS

The difference from `getElementsByName()` is that in this case I also need to include the CSS type (class or ID)

```JavaScript
document.querySelectorAll('#list-item');
//Selects all elements with ID "list-element"

document.querySelectorAll('.list-item');
//Selects all elements with class "list-element"

document.querySelector('ul li:first-of-type');
// Valid selector for the first item inside a list. It requires extra performance.
```

## Nodes vs Elements

**Nodes**: All type of objects that make up the DOM. HTML tags are "element nodes" (or just elements). This include withe spaces, break points, etc.

**Elements**: Elements are type of nodes, they have special properties and methods to interact with, depending on the kind of element.
Only "important" elements we do not consider a withe space node as an Element.

## Traversing the DOM

Select an element from the DOM and then go trough the DOM by that element (Child, Descendant, Parent, Ancestor)
	
### Difference between `.childNodes` and `.children`

`.childNodes` will get all Nodes from an Element. This includes text Nodes (Even withe spaces inside the HTML file).
This help us to understand the difference between Nodes and Elements.

### `closest()`

It selects the closest ancestor with the given HTML tag type.
	
### `.classList`

When accessing an Element and trying to change its style which is already defined on a CSS class, we can have access to a group of useful methods by using `.classList`.  
We can Add, Remove, Contains, Replace, Toggle (exchange a class, if it is set it will remove it, if not it will add it).

```JavaScript
ul.classList.toggle('visible');
```

## Insert content
`innerHTML` changes the whole content of the tag, even the existing content which is still used is changed with new ones with the exact same content.

This affects drastically the performance of the website and also represent a risk for loosing inputs from the previous version.

We should check which method is supported by al browsers since some of them are not supported on all of them.

`insertAdjacentElement` is very useful when trying to insert elements in the middle of a list of an existing list.

```JavaScript
insertAdjacentElement(<position>, element);

ul.insertAdjacentElement('afterend', newElement); // afterend, beforeend, etc. Check options at MDN
```	
## `cloneNode`
It can be useful when trying to create an element which is very similar to another one and we only need to change a couple of things.

## "live" vs Static 

`querySelectorAll()` returns a NodeList, this list only includes the initial elements from the HTML file.   
If we add a new element the NodeList will not show this new element.  
It might be better in some cases because the list does not need to be updated every time we change the list in other parts of the code.  
Once it is called, it will take a snapshot of the selected elements an return them. Better for performance.

> The items included are references.

`getElementsByClassName()` returns and HTMLCollection, this list will be updated every time we insert something.

## `Remove()` vs `removeChild(<element>)`

`remove()` : it is called by the element which has to be removed. Not supported on Internet Explorer

`removeChild()`: called by the parent Element. Supported by all browser.