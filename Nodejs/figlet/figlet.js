import figlet from "figlet";

figlet("my App" , (err,data)=>{
    if (err){
        console.log("Error");
        return;
    }
    console.log(data);
})