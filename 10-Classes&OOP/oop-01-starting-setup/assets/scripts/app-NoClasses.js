// Product list as an object
const productList = {
    products : [
        { 
            title : 'Pillow',
            imageUrl : 'https://www.midwives2020.org/wp-content/uploads/2021/02/719-00201_main-shot_01_therapur-cool-pillow.jpg',
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title : 'Carpet',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg',
            price: 89.99,
            description: 'A carpet you might like'
        }
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