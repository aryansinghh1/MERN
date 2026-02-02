//common js
// const math = require("./math");
// console.log(math.add(5,4));
// console.log(math.subtract(9,4));


//es6 js module
// import {add, subtract} from "./math.js"
// console.log(add(5,4));
// console.log(subtract(9,4));


//file reading
//  import fs from "fs";
//  const data = fs.readFileSync("data.txt", "utf-8");
//  console.log("file content");
//  console.log(data);


// import fs from "fs";
//  console.time("read time");
//  const data = fs.readFileSync("data.txt", "utf-8");
// console.timeEnd("read time");


import fs from "fs";
import { Performance } from "perf_hooks";

// console.log("//////////////");

const start = performance.now();

fs.readFile("data.txt", "utf-8" , (err,data)=>{
    if(err) return console.log(err);
    const end = performance.now();
    console.log(`time taken: ${(end - start).toFixed(2)}ms`);
})

