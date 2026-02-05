import express from "express";

const app = express();
app.get("/",(req,res)=>{
    res.end("Hello world");
});

app.get("/contact",(req,res)=>{
    res.end("Hello world");
});

app.get("/about",(req,res)=>{
    res.end("Hello world");
});

app.get("/feedback",(req,res)=>{
    res.end("Hello world");
});




app.listen(3000,()=>{
    console.log("server is running on port 3000");
})