import fs from "fs"


//blocking code because it's running line by line (sync)
console.log("start")
const data = fs.readFileSync("data.txt","utf-8");
console.log(data);
console.log("end")

//non-blocking code  (async)

console.log("start");
fs.readFile("data.txt","utf-8",(err,data)=>{
    console.log("file read Done");
})

console.log("end");