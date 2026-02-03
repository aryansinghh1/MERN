import EventEmitter from "events";

const emitter2 = new EventEmitter();

emitter2.on("sendNotif",()=>{
    console.log("Push has been sent");
})

emitter2.on("sendNotif",()=>{
    console.log("Email has been sent");
})

emitter2.on("sendNotif",()=>{
    console.log("whatsapp has been sent");
})

function login(){
    console.log("login done");
    emitter2.emit("sendNotif");
}

login();