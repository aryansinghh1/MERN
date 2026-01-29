let heading = document.getElementById("title");
heading.innerText = "hello from javascript";
heading.style.color ="blue";

let paragraph = document.getElementsByClassName("para");
paragraph[0].innerText = "welcome home";
paragraph[1].innerText = "this is java script para";

paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";


let button1 = document.getElementById("btn");
button1.addEventListener("click",() =>(
    // button1.innerText = "button Clicked"
    heading.innerText = "button Clicked!"
));