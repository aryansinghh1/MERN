import EventEmitter from "events";

const emitter2 = new EventEmitter();

emitter2.on("sendNotif",()=>{
    console.log("Push notification sent");
})

emitter2.on("sendNotif",()=>{
    throw new Error("Email service down"); //simulate failure
})

emitter2.on("sendNotif",()=>{
    console.log("whatsapp has been sent");
})


// Error listener (Very Important)
emitter2.on("error",(err)=>{
    console.log("Handled error: ",err.message);
})



function login(){
    console.log("login done");
    try{
        emitter2.emit("sendNotif")
    }
    catch(err){
        emitter2.emit("error",err);
    }

}

login();