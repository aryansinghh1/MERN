//importing eventemitter
import EventEmitter from "events";


//create a event Emitter
const emitter = new EventEmitter();


//register an event listener
// can be fire more than once
emitter.on("userRegistered", (username) => {
  console.log("User registered", username);
});


//can be fire once
// emitter.once("userRegistered",(username)=>{
//     console.log("User registered",username);
// });

//emit the event
emitter.emit("userRegistered","Aryan");
emitter.emit("userRegistered","Aryan");
