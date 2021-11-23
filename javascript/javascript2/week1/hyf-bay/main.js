console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

//const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const allProducts1 = document.querySelector('ul');
    
  for (const product of products) {
    
    const list = document.createElement('li');
    list.innerHTML= `<h2>${product.name}</h2> Rating: ${product.rating}</br> Price: ${product.price}`;
    allProducts1.appendChild(list);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details

