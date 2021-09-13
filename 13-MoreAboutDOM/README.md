# 14 More about DOM Elements

## dataset (data-)

The `data-` attribute from HTML was created to store data from the DOM element so that when we read this element in JS we can have access to that data as well.

We can add more than one of this attributes on each element.

To read from this attribute we need a special property:
`dataset` all the `data-` attributes will gather into the `dataset` property.

```JavaScript
<li
    id="p1"
    data-extra-info="Got lifetime access, but would be nice to finish it soon!"
    class="card"
>

const listEl = document.getElementById("p1");
console.log(listEl.dataset);
//The result is a DOMStringMap with all the data stored.
```

We can also add data to the element from JavaScript:
```JavaScript
listEl.dataset.someInfo = "This is the info show on the attribute";
```

## Getting Element Box Dimensions

We can use the method `getBoundingClientRect()` which will return the coordinates and size of the bos element.

```JavaScript
elementSelected.getBoundingClientRect();
```

Some other methods are:
- `$0.offsetTop`
- `$0.offsetLeft`
- `$0.clienTop`
- `$0.clienLeft`
- `$0.offsetWidth`
- `$0.offsetHeight`
- `$0.scrollHeight`
- `$0.scrollTop`
- `window.innerWidth`
- `window.innerWidth`
- `window.innerHeight`
- `document.documentElement.clientWidth` More reliable
- `document.documentElement.clientHeight` More reliable

### Setting coordinates and dimentions into a DOM element

We can use the methods mentioned above to obtain the information. However, we can not use them to assign the new values. For this we will need to use CSS:

```JavaScript
const buttonEl = docuement.getElementById("Button1");
const btnLeft = buttonEl.offsetLeft;
const newBtnPos = btnLeft + 120;
buttonEl.style.left = newBtnPos + 'px;';

// In order for this to work we should include:

buttonEl.style.position = 'absolute';
```

The position of all elements is `reative` by defautl, if we want to modify it we need to make it `absolute`

It is important to rememeber that coordinates ignore if we have an inner scroll. But we have access to this information with the `scrollTop` property.

### Scroll with JavaScript

We can use the following methods to modify how much to scroll.
- `scrollTo(x,y)`
- `scrollBy(x,y)`
- `scrollIntoView()`

The last one will make sure that when something happens with the related element the view will position the user into the new coordinates.

## Template tag

We can include here the "to-be-used" HTML code which won't be render right on the start but later on we would like to work with it.

## Running Script Dynamically

We can have the situation in which we have a pice of code which is not used all the time therefore we only would like to download that file when necessary. For example running Analytics of a certain event. The solution for this is to create a dynamyc script. We can see a great example at video 296.

## Timers and Intervals

`setTimeout(X,Y);` - *X*: is a function which will be executed when the timer expires. *Y* - the amount of time in miliseconds.

`setInterval(X,Y);` - Instead of executing the *X* function once, it will execute the function every *Y* seconds.

`clearTimeout()` to stop.
`clearInterval()` to stop

## Location, history and navigator objects on DOM

**Location** we can use it to navigate the user to another url. `location.href = 'newURL'`

We can use `location.pathname` to see in which path the user is located from the application and based on that executed some JavaScript code. Video 298.

**History**  we can use `history.back()` to take the user to their previous visited page.

**Navigator** returns information about the browser and user. It allows you to interact with the machine information. For example: geolocation, clipboard, etc.

```JavaScript
navigator.geolocation.getCurrentPosition((data) => {console.log(data)});
```

##  Working with dates

`new Date()` .- this object returns the current date.
 > We can store this object and use its different methods.

 We can also pass a date into the constructor parameter and create a `date` object with the specifics:

 ```JavaScript
 const date1 = new Date('12/06/1990');
 /// This will create a Date object with the date 12th of June 1990.
 ```

 We can use mathematical operations between `Date` objects but the result will be given in miliseconds. We will need to divide that into the required format (days, months, hours, etc.)

 ## Error Object

 ```JavaScript
const costumError = new Error('something went wrong!');
/// we can throw that object in case of an error
throw costumError;

/// We can add additional information to the Error object
costumError.code = 404;
 ```

 It is advisable to `throw` some Error object because it gives us additional information. 