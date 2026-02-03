import { error } from "console";
import { sign } from "crypto";
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("loginSuccess",()=>{
    console.log("Login Successfull");
})

emitter.on("error",(err)=>{
    console.log("Error ❌ ",err.message);  
})

function login(isLoggedIn){
    console.log("Checking login status..");

    try{
        if(isLoggedIn === true){

            emitter.emit("loginSuccess")
        }
        else{
            throw new Error("Login Failed");
        }

    }catch (err){

        emitter.emit("error",err);
    }
}

login(false);
