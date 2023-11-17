const addToCartButtons = document.querySelectorAll(".addToCartbuttons");

addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

const productData = [
    { src: 'pics/product-1.png' , name: 'Product 1', price: '₹19.99', href: 'instagram.com' },
    { src: 'pics/product-2.png' , name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-3.png' , name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-4.png' , name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-5.png' , name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-6.png' , name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-7.png' , name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-8.png' , name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-9.png' , name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-10.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-11.png', name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-12.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-13.png', name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-14.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-15.png', name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-16.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-17.png', name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-18.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-19.png', name: 'Product 2', price: '₹24.99', href: '/product-1' },
    { src: 'pics/product-20.png', name: 'Product 1', price: '₹19.99', href: '/product-1' },
    { src: 'pics/product-21.png', name: 'Product 2', price: '₹24.99', href: '/product-1' }
];

const productContainer = document.querySelector('.product-list');

productData.forEach((product, index) => {
    const article = document.createElement('article');
    article.classList.add('product');

    const img = document.createElement('img');
    img.src = product.src;
    img.alt = product.name;

    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = product.price;

    const button = document.createElement('button');
    button.classList.add('addToCartbutton');
    button.textContent = 'BUY';

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(button);

    productContainer.appendChild(article);
});