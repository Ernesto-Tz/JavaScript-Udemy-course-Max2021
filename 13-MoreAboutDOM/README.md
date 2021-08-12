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