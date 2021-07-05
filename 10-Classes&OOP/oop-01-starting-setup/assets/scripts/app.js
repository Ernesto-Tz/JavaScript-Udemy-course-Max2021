// This class is understood as a data container.
class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, price, description ) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

// This class is a logic container 
class ProductItem {
    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log("Adding product to cart");
        console.log(this.product);
        App.addProductToCart(this.product);
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
        // addCartButton.addEventListener('click', this.addToCart); // Check documentation 246.
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

// This class is a logic container
class ProductList {
    products = [
        new Product('A pillow','https://www.midwives2020.org/wp-content/uploads/2021/02/719-00201_main-shot_01_therapur-cool-pillow.jpg', 19.99, 'A soft pillow'), 
        new Product('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'A carpet you might like')
    ];

    render () {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products)
        {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    };
}

class ShoppingCart {
    items = [];
    
    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount(){
        const sum = this.items.reduce((prevValue, curItem) => {
            return prevValue + curItem.price; 
        },0 );
        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    };
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App{
    static cart;

    static init (){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart; //Creates a cart property on App, referring to the cart property on the Shop object created above.
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();