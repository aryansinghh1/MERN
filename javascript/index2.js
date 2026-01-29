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


// let number = [3,2,4,5,6,3,5,6,7,3,2,5,6,3];

// number.forEach(function(num){
//     console.log(num);
// });



//map
