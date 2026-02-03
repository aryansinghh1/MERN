
import EventEmitter from "events";

// create event emmiter
const emitter = new EventEmitter();


//success listener
emitter.on("loginSuccess",()=>{
    console.log("Login Successfull");
})

//Error listener (IMPORTANT)
emitter.on("error",(err)=>{
    console.log("Error ❌ ",err.message);  
})

// login function
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

//test cases
login(true);
// login(false);
