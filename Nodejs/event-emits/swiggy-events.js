import EventEmitter from "events";

const emmiter = new EventEmitter();

emmiter.on("trig",()=>{
    console.log("Your order is placed");
})

emmiter.on("trig",()=>{
    console.log("Delivery partner will assigned shortly!!");
})

emmiter.on("trig",()=>{
    console.log("Your order is preparing");
})

emmiter.on("trig",()=>{
    console.log("Your order is out for delivery");
})

emmiter.on("trig",()=>{
    console.log("Your order is delivered");
})

function order(){
    
    emmiter.emit("trig");
}

order();