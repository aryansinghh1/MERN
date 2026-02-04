fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("products");

    data.products.froEach((p) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <img src="${p.thumbnail}">
        `;
      container.appendChild(div);
    });
  });
