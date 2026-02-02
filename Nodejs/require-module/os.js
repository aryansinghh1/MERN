import os from "os";  //os is built in module of js used to retrive system information

console.log("OS type: ",os.type());
console.log("OS platform: ",os.platform());
console.log("OS architecture: ",os.arch());

//cpu information
const cpus = os.cpus();

console.log("CPU CORES: ", cpus.length);
console.log("CPU model: ", cpus[1].model);