fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    const products = data.products;

    const container = document.getElementById("product-container");

    products.forEach(product => {

       
        let card = document.createElement("div");
        card.className = "product-card";

       
        let img = document.createElement("img");
        img.src = product.thumbnail;

       
        let title = document.createElement("h3");
        title.innerText = product.title;

       
        let para = document.createElement("p");
        para.innerText = product.description;

        
    });
})
.catch(error => {
    console.log("Error:", error);
});





