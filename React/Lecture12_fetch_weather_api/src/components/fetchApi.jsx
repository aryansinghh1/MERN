import React, { useState, useEffect } from "react";

export default function FetchApi() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //to check if data is visible in console.
        setProduct(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Fetch data from API using UseEffect</h1>
      {product.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  );
}
