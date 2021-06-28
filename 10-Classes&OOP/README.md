## Fields vs properties

When working with classes we can use fields on the constructor that have not been declare before inside the object. The constructor will create that field and asign the indicated value:

```JavaScript
class ProductItem {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}
// The constructor will create every field and assign the value. We can use both syntax (similar to C# or this one).
```