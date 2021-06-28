class ProductItem {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

const productList = {
    products : [
        new ProductItem('A pillow','https://www.midwives2020.org/wp-content/uploads/2021/02/719-00201_main-shot_01_therapur-cool-pillow.jpg', 19.99, 'A soft pillow'), 
        new ProductItem('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'A carpet you might like')
    ],
    
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products)
        {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class = "product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>        
            `;
            prodList.append(prodEl);
        }

        renderHook.append(prodList);
    }
};

productList.render();