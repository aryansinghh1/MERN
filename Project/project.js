let allProducts = [];

// Fetch products
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    allProducts = data.products;   // ✅ store products
    renderProducts(allProducts);   // ✅ render initially
})
.catch(error => {
    console.log("Error:", error);
});

// Render function
function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // clear old products

    products.forEach(product => {

        let card = document.createElement("div");
        card.className = "product-card";

        let img = document.createElement("img");
        img.src = product.thumbnail;

        let title = document.createElement("h3");
        title.innerText = product.title;

        let para = document.createElement("p");
        para.innerText = product.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(para);

        container.appendChild(card);
    });
}

let btn = document.getElementById("btn");
let inputbox = document.getElementById("inputbox");

console.log(btn,inputbox);

btn.addEventListener("click",()=>{
    let query = inputbox.value;
    console.log("btn is clicked", query);
    console.log("query ",query);
    window.location.href = `search.html?q=${query}`;
    inputbox.value = "";

})
// Search button
// document.getElementById("btn").addEventListener("click", () => {
//     let searchText = document.getElementById("inputbox").value.trim();

//     if (searchText === "") return;

//     window.open(`search.html?query=${encodeURIComponent(searchText)}`, "_blank");
// });