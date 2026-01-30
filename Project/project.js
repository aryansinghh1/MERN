fetch("https://dummyjson.com/products").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})