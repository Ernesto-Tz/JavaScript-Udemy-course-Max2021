# Events

## Definition

They are specific actions happening on the application (clicking a button, a video finishing, uploading something, incoming request, etc.) which will trigger some code to run.

Exact implementation differs between Browsers-side or Server-side.

> Events typically transport data.

On JavaScript we have an `Event` object with some core functionalities that all Events share.

## Different ways to listen to events on JavaScript

### 1. "onclick" attribute

This is a old and not-recommended way of creating an event. We should register the events on the JavaScript file where we are expecting to see the events.

```HTML
<button onclick="alert('Hello there!');"> Click me! </button>
```
### 2. "onclick" on the JavaScript file.

We define the attribute "onclick" from the element we want to register the event, into the JavaScript file. This is better but still not quite recommended.
> In this way we can only register one event to this element.

```JavaScript
//2. "onclick" on the JavaScript file
const button = document.querySelector('button');

const buttonClickHandler = () => {
    alert('Button was clicked!');
}

button.onclick = buttonClickHandler;
```

### 3. AddEventListener to the element.

This is the best way since we use it on the right file and also it allows us to register more than 1 event.

```JavaScript
//3. addEventListener 
button.addEventListener('click', buttonCLickHandler);
```

## Remove event Listener

Another advantage from using `addEventListener` for events is that we can also remove an event from elements.

> In order to use this method we need to register the event with a normal function. Anonymous functions will not work in this scenario.

```JavaScript
const button = document.querySelector('button');

const buttonClickHandler = () => {
    alert('Button was clicked!');
}

button.addEventListener('click', buttonCLickHandler);

button.removeEventListener('click', buttonCLickHandler);
```

## The "Event" object

We can find an extensive documentation from [MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

We can also `consol.log` the event to see all attributes which can be useful for our app logic.
 
> We can register events to any DOM element.

### Infinite Scroll <310>

We calculate how close the user is to the end of the page and based on that we render more content.

The `scroll` event is fired a lot, for this reason we should be careful how we use it and which type of calculation is triggered after it. 


## Using `preventDefault()`

There are predefined behaviors on the browser related to specific elements. 

One of the examples is when we use a submit button inside a form, by default the browser will try to send the data inside the form back to the server. If we want to add some logic before that happens and for example validate that information, we will need to stop that behavior, validate and then send the information.

```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
})
```

## Bubbling & Capturing 

When an event is triggered, the browser goes into 2 possible stages.

1. Capturing - Here the browser is looking for all events registered to that specific element and its nested elements. Let's say we click on a button which is inside a `div` which also has an event registered to it. Here the nested events are being gathered and executed. First the element from the `div` will be executed, then the one triggered by the button. 

2. Bubbling - It will be the other way around. The element from the button will be executed first and then the one coming from the `div`

## Event propagation and `stopPropagation()`

Based on the structure presented before we can register events on capturing using a 3rd element on the eventListener:

```JavaScript
const button = document.querySelector('button');

const buttonClickHandler = () => {
    alert('Button was clicked!');
}

button.addEventListener('click', buttonCLickHandler, true);
```

By default the third parameter is `false` but if we set it to `true`. It will mean that we are changing the event to the capturing face. Making the event to be triggered before depending on the DOM structure.

> this can be useful when we want to change the order in which events are executed.

The idea of executing to multiple events according to different elements on the DOM is called `propagation`.

`event.stopPropagation();` will stop events happening on ancestor elements which are nested to the registered.

We can also see if the registered event propagates by looking at the event properties, specifically at the `bubbles` property.

## Event Delegation

This pattern is typically used on HTML lists. Each element triggers an event. We could create an event for every element but that would be bad in terms of memory and efficiency.

To solve this we use event delegation which takes advantage of **event propagation**; instead of registering every list item to an event handler we register the whole list and a single event handler from the list. Any interaction interaction with any list element will also trigger this event and we can even see which element was the target.

```JavaScript
// No using event delegation
const listItems = document.querySelectorAll('li')
listItems.forEach( listItem => {
    listItem.addEventListener('click', event =>{
        console.log(event.target);
    })
});

// Using event delegation
const list = document.querySelector('ul')
list.addEventListener('click', event =>{
    console.log(event.target);
})

```

It can become problematic if we have a more complex structure. For example having multiple elements inside the list element.

> For this problem we solved it by using `closest()` for DOM traversal <video 314>.
