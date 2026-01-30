// let heading = document.getElementById("title");
// heading.innerText = "hello from javascript";
// heading.style.color ="blue";

// let paragraph = document.getElementsByClassName("para");
// paragraph[0].innerText = "welcome home";
// paragraph[1].innerText = "this is java script para";

// paragraph[0].style.color = "red";
// paragraph[1].style.color = "blue";

// let button1 = document.getElementById("btn");
// button1.addEventListener("click",() =>(
//     // button1.innerText = "button Clicked"
//     heading.innerText = "button Clicked!"
// ));

// document.getElementById("btn").addEventListener("click",()=>{
// let el = document.getElementById("title");
// el.innerText="change to see get element by id";
// el.style.color = "red";
// el.style.background = "yellow";
// })

// document.getElementById("btn1").addEventListener("click",() =>{
// let gclass = document.getElementsByClassName("para");
// for (let i = 0 ; i< gclass.length; i++){
//     gclass[i].classList.toggle("highlight");
//     gclass[i].style.color = "red";
//     gclass[i].style.border = "2px solid blue";
// }
// });

// document.getElementById("testbtn").addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="red";
//     e.target.style.color="blue";
// });

// callback function  a function take another function as argument
// function greet(name){
//     console.log("hello "+ name);
// };

// function processUser(callback){
// let name = "Aryan";
// callback(name);
// };

// processUser(greet);

// setTimeout(()=>{
//     console.log("Executed after one Three: Hello");
// },3000);

//HOF(higher order function)
// function add(a, b) {
//   return a + b;
// }

// function calcultion(a, b, operation) {
//   return operation(a, b);
// }

// console.log(calcultion(4, 5, add));

// function outer() {
//   return function inner() {
//     console.log("inner function called");
//   };
// }

// let fn = outer();
// fn();


// Array methods


// let numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach(function(num){
//     console.log(num);
// });



//map

//syntax  
// array.map(function(element,index,array){
//return.newValue;
// });


// let result = numbers.map(function(num) {
//     return num * 2;
// });


// let result = numbers.map((num)=> num * num);
// console.log(result);


//filter return those element which satify the condition
// array.filter(function(element, index, array) {
//     return condition; // true → keep element, false → remove
// });



// let even = numbers.filter(function(num){

//     return num % 3 === 0;
// });

// console.log(even);


//reduce function  //a function that takes input values, 
// combine them and produce a single output value.


// let sum = numbers.reduce(function(acc , curr){
//     return acc + curr;
// });

// console.log(sum);




//set interval    //setInterval(function, timeInMillisecond);
// function name(){
//     console.log("Aryan");
// };

// setInterval(name,1000);



// console.log("b");

// console.log("a");
// console.log("c");





//async     //task that take time
            //  but don't block the program.




//callback hell            
//
// function getUser(callback) {
//     setTimeout(() => {
//         console.log("user fetched");
//         callback();
//     }, 1000);
// }

// function getPosts(callback) {
//     setTimeout(() => {
//         console.log("Posts fetched");
//         callback();
//     }, 1000);
// }

// function getComments(callback) {
//     setTimeout(() => {
//         console.log("Comments fetched");
//         callback();
//     }, 1000);
// }

// getUser(()=>{
//     getPosts(()=>{
//         getComments(()=>{
//             console.log("All data fetched");
//         })
//     })
// })


//fetch is function which return prpomises


//promises
//
// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         console.log("async task is created")
//         resolve();
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log("Promise consumed");
// })



//without storing in any variable
//
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("hello");
//         resolve();
//     },3000);

// }).then(function(){
//     console.log("async task2 completed");
// })



//promises using object
//
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("task three");
//         resolve({name : "aryan", city :"jalandhar"});
//     },2000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// });



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({name : "aryan", city :"jalandhar"});
//         }
//         else{
//             reject("Error something is went wrong");
//         }
//     },2000)
// })

// promiseFour
// .then((user)=>{        //resolve
//     console.log(user);
//     return user.name;
// })

// .then((varcity)=>{     //reject
//     console.log(varcity);
// })

// .catch((err) => {
//     console.log(err);
// })


//fetch 
//

// function fetch(url){
//     return new Promise((resolve,reject)=>{
//         // browser starts http request in background (web APIs)
//         //when repose comes:
//         resolve(ResponseObject);
//         //or if network fails:
//         reject(error);
//     });
    
// }


fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})