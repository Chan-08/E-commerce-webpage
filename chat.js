// Array containing product data (image source, name, price, and link)
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

// Select the element with the class "product-list"
const productContainer = document.querySelector('.product-list');

// Iterate through each product in the data and create corresponding HTML elements
productData.forEach((product, index) => {
    // Create a new <article> element with the class "product"
    const article = document.createElement('article');
    article.classList.add('product');

    // Create an <img> element with the product image source and alt text
    const img = document.createElement('img');
    img.src = product.src;
    img.alt = product.name;

    // Create an <h2> element with the product name
    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    // Create a <p> element with the product price and add the "price" class
    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = product.price;

    // Create a <button> element with the class "addToCartbutton" and text "BUY"
    const button = document.createElement('button');
    button.classList.add('addToCartbutton');
    button.textContent = 'BUY';

    // Append the created elements to the <article> element
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(button);

    // Append the <article> element to the product container
    productContainer.appendChild(article);
});
