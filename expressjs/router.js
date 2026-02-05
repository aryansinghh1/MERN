import express from "express";

const app = express();
app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.get("/contact",(req,res)=>{
    res.send("contact page");
});

app.get("/about",(req,res)=>{
    res.send("about");
});

app.get("/feedback",(req,res)=>{
    res.send("feedback page");
});




app.listen(3000,()=>{
    console.log("server is running on port 3000");
})