let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        image: "../Assets/Product1.jpg",
        product: {
            name: "Bear-Tee",
            sizes: "xs, s, m, l, xl, xxl",
            color:"Grey"
        },
        price:150,
        },
        {
        id: 2,
        image: "../Assets/Product2.jpg",
        product: {
            name: "Bear-Tee-1",
            sizes: "xs, s, m, l, xl, xxl",
            color:"Purple"
        },
        price:180,
        },
        {
        id: 3,
        image: "../Assets/Product3.jpg",
        product: {
            name: "Bear-Tee-2",
            sizes: "xs, s, m, l, xl, xxl",
            color:"White"
        },
        price:120,
        },
        {
        id: 4,
        image: "../Assets/Product4.jpg",
        product: {
            name: "Bear-Tee-3",
            sizes: "xs, s, m, l, xl, xxl",
            color:"Blue"
        },
        price:160,
        },
        {
        id: 5,
        image: "../Assets/Product5.jpg",
        product: {
            name: "Bear-Tee-4",
            sizes: "xs, s, m, l, xl, xxl",
            color:"Blue-white"
        },
        price:155,
        },
        {
        id: 6,
        image: "../Assets/Product6.jpg",
        product: {
            name: "Bear-Tee-5",
            sizes: "xs, s, m, l, xl, xxl",
            color:"White"
            },
        price:110,
        },
        {
        id: 7,
        image: "../Assets/Product7.jpg",
        product: {
            name: "Bear-Tee-6",
            sizes: "xs, s, m, l, xl, xxl",
            color:"White-yellow"
            },
        price:180,
        },
        {
        id: 8,
        image: "../Assets/Product8.jpg",
        product: {
            name: "Bear-Tee-7",
            sizes: "xs, s, m, l, xl, xxl",
            color:"White-yellow"
            },
        price:130,
    },
    ];

function displayData() {
    products.forEach((products) => {
        document.querySelector('#cards').innerHTML += `
        <div class="card m-4" style="width: 18rem;">
  <img src="${products.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${products.product.name}</h5>
    <p class="card-text">Size : ${products.product.sizes}</p>
    <p class="card-text">Color : ${products.product.color}</p>
    <p class="card-text">Price : R ${products.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
    })
}
displayData()