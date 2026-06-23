
// console.log("start");
// setTimeout(()=> console.log("setTimeout"));
// Promise.resolve().then(()=> console.log("promise"));
// console.log("end");


// for (var i = 0 ; i < 3 ; i++){
//     setTimeout(()=> console.log(i), 100);
// }
//
// Feature        var              let 
// Scope      Functionscoped     Block-scoped


// for(var i = 0 ; i < 3 ; i++){
//     const obj = {
//         name: "ankit",
//         greet : function(){
//             console.log(this.name);
        
//         }
//     }

//     // const greetFn = obj.greet;
//     // greetFn();
//     //
//     // Call Type,                   Syntax,     this refers to...,             Result
//     // Method,                    obj.greet(),        obj,                     "ankit"
//     // Variable Reference,         greetFn(),      Global Object (window),     undefined

//     obj.greet();

// }

// console.log("b"+"a"+ +"a"+"a");

// console.log([]+[]);
// console.log([]+{});
// console.log({}+[]);
// console.log(true+false);
// console.log(false=="0");
// console.log(false==="0");
// console.log([1,2]== "1,2");
// console.log("2">1);
// console.log("01" == 1);
// console.log("01" == 1);



// var x = 10;

// function foo(){
//     console.log(x);
// }
// function bar (){
//     var x = 20;
//     foo();
// }
// bar();


// const obj = {
//     name: "ankit",
//     greet (){
//         return(this.name);
//     }
// }

// const fn = obj.greet;
// console.log(fn());

// const obj = {
//     name: "Ankit",
//     greet: function(){
//         console.log(this.name);
//     }
// }
// setTimeout(obj.greet, 0);
// obj.greet();


