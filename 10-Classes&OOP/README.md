## Fields vs properties

When working with classes we can use fields on the constructor that have not been declare before inside the object. The constructor will create that field and assign the indicated value:

```JavaScript
class ProductItem {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}
// The constructor will create every field and assign the value. We can use this way or the syntax similar to C#.
```

We can also declare a new field inside a method.

```JavaScript
class Shop {
    render() {
        const renderHook = document.getElementById('app'); //Normal variable inside the method render()
        this.cart = new ShoppingCart(); //Creates a field on the Shop object and indicates its value.
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}
```

## 246. Binding methods and working with `this`
On the following code, the event listener is referring to the button itself. The button is activating the method, that is why we see on the console.log "`undefined`". We want to print the object to which the button belongs to, we use `bind()` to obtain that result.

```JavaScript
class ProductItem {
    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log("Adding product to cart");
        console.log(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class = "product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>        
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart); // "this" points to the button  not to the object.
        return prodEl;
    }
}
```

The solution is to bind `this` on the event listener to the correct object:

```JavaScript
const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this)); // "this" inside bind() refers to the current object, the actual object and not any more to the button.
        return prodEl;
```

## 249. Static Methods & Properties

- They are defined using the `static` keyword.
- Accessible on the class itself without instantiation (no object creation).
- Typically used in helper classes, global configuration.

> Non static classes, methods or properties are used for core, re-usable logic.

### Advantages of using static objects/methods

One of the advantages of using static methods is that we can use the same object for different operations, we can use an object which holds all the necessary static methods.

```JavaScript
class App{
    //Method used to start the App itself
    static init (){
        const shop = new Shop();
        this.cart = shop.cart; 
        shop.render();
    }

    // Method used to communicate between classes and update view. 
    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}
```

## Object literal notation ({}) vs Classes

Object literal notation is very useful for: 
- Data collection
- Objects which I only need to create once
- Quick and easy to create. No overhead.



Classes should be consider when: 
- An object needs to be re-created over and over. 
- Object duplication is easier.