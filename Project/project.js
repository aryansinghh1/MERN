fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    const products = data.products;
    // console.log(data,products);
    // console.log(products);
    return products;
})
.then(products => {
    // console.log(products[0].title);
    let titles = products.map(product => product.title);
    console.log(titles);
})