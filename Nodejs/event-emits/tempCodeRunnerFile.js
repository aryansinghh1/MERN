emitter2.on("sendNotif",()=>{
    throw new Error("Email service down"); //simulate failure
})
