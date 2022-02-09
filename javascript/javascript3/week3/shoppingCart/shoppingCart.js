class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // added async method to convert the currency rate
    async convertToCurrency(currency) {
        try {
            const fetchApi = await fetch(
                'http://api.exchangeratesapi.io/v1/latest?access_key=59cc9db7a6c3570a340fc7bb48635976',
            );
            const apiResponse = await fetchApi.json();
            const data = apiResponse.rates;

            const currencyInArray = Object.entries(data); //converts objects into array so we can get every items key value pair in array.The Object.entries() method returns an array of arrays. fx. console.log(Object.entries(obj));
            // Expected output: [["name", "Daniel"], ["age", 40],

            currencyInArray.map((value) => {
                if (value.includes(currency.toUpperCase())) {
                    //console.log(value[0],value[1]);
                    const convertedPrice = (this.price * value[1]).toFixed(2);
                    console.log(convertedPrice + ' ' + value[0]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    /*   findProduct(product) {
        this.products.filter((product) => {
            if (product.name === product) {
                return `Product Name : ${product.name}
              Price        : ${product.price}`;
            }
        });
    } */

    removeProduct(product) {
        // Implement functionality here
        const index = this.products.map((item) => item.name).indexOf(product);
        this.products.splice(index, 1);
    }

    searchProduct(productName) {
        // Implement functionality here
        //first method
        const search = this.products.map((product) => product.name);
        if (search.includes(productName)) {
            return productName; //+ " found";
        } else {
            return 'No matches';
        }
        /* const search = this.products.map((product) => product).filter((val)=>val.name.includes(productName));
        console.log(search); */
    }

    getTotal() {
        // Implement functionality here
        console.log(this.products);
        const total = this.products
            .map((product) => product.price)
            .reduce((total, currentPrice) => total + currentPrice);
        return total;
    }

    renderProducts() {
        // Implement functionality here
        const pValue1 = document.querySelector('.product-name');
        const pValue2 = document.querySelector('.price');
        const pValue3 = document.querySelector('.total');

        const searchItem = document.querySelector('.search-item');
        searchItem.addEventListener('keyup', () => {
            const val = searchItem.value;
            const result = this.searchProduct(val);
            if (result.includes('No matches')) {
                pValue2.innerHTML = '';
                pValue3.innerHTML = '';
            } else {
                pValue1.innerHTML = '';
                pValue2.innerHTML = '';
                pValue3.innerHTML = '';
                var btn = document.createElement('button');
                btn.innerHTML = result;
                pValue1.appendChild(btn);

            }
        });
        for (const product of this.products) {
            pValue1.innerHTML += `${product.name}<br>`;
            pValue2.innerHTML += `${product.price}<br>`;
        }
        pValue3.innerHTML = this.getTotal();
    }

    /* getUser(user) {
    // Implement functionality here
    
  fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data.name)
    return data.name;
  });
} */
    async getUser(user) {
        try {
            const userResponse = await fetch(
                `https://jsonplaceholder.typicode.com/users/${user}`,
            );
            const response = await userResponse.json();
            const data = response.name;

            const userName = document.querySelector('.user-name');
            userName.innerHTML = data;
        } catch (error) {
            console.log(error);
        }
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('Flat-screen', 5000); //add products

shoppingCart.addProduct(flatscreen); //add products
const led = new Product('led', 3600);
shoppingCart.addProduct(led); //add products
const lcd = new Product('lcd', 7500);
shoppingCart.addProduct(lcd);
const qled = new Product('qled', 8000); //add products
shoppingCart.addProduct(qled);

//remove products
//shoppingCart.removeProduct("LCD")

const searchResult = shoppingCart.searchProduct('qled');
console.log(searchResult);
const total = shoppingCart.getTotal();
//console.log(total);

//shoppingCart.getUser(2)//this one is not working while returning the value

console.log(shoppingCart.getUser(3));

//currency converter
// Assuming euro as default currency
const plant = new Product('plant', 50);
shoppingCart.addProduct(plant);
console.log(plant.convertToCurrency('usd'));
console.log(shoppingCart);

//rendering products
shoppingCart.renderProducts();
