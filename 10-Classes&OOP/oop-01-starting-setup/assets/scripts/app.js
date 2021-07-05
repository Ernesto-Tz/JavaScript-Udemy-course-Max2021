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

class Component {
    constructor(renderHookId){
        this.hookId = renderHookId;
    }
    
    createRootElement (tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0){
           for(const attr of attributes) {
               rootElement.setAttribute(attr.name, attr.value);
           }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
     }
}

// This class is a logic container 
class ProductItem extends Component {
    constructor(product, renderHookId){
        super(renderHookId);
        this.product = product;
    }

    addToCart(){
        console.log("Adding product to cart");
        console.log(this.product);
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = this.createRootElement('li','product-item');
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
    }
}

// This class is a logic container
class ProductList extends Component {
    products = [
        new Product('A pillow','https://www.midwives2020.org/wp-content/uploads/2021/02/719-00201_main-shot_01_therapur-cool-pillow.jpg', 19.99, 'A soft pillow'), 
        new Product('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'A carpet you might like')
    ];

    constructor(renderHookId) {
        super(renderHookId);
    }

    render () {
        const prodList = this.createRootElement('ul', ' product-list',[new ElementAttribute('id', 'prod-list')]);
        for(const prod of this.products){
            const productItem = new ProductItem(prod, 'prod-list');
            const prodEl = productItem.render();
        }
    }
}

class ElementAttribute {
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue; 
    }
}

class ShoppingCart extends Component {
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

    constructor(renderHookId){
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }

    render() {
        const cartEl = this.createRootElement('section','cart');
        cartEl.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class Shop {
    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
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