

document.getElementById("idbtn").addEventListener("click",()=>{
    let idbutton = document.getElementById("heading");
    idbutton.innerText = "hello from javascript";
    idbutton.style.color = "red";
    idbutton.style.background = "blue";
})

document.getElementById("classbtn").addEventListener("click",()=>{
    let classbutton = document.getElementsByClassName("text");
    for(let i = 0 ; i < classbutton.length; i++){
        classbutton[i].style.color = "red";
        classbutton[i].style.background = "purple";
        classbutton[i].style.border = "2px solid black";

    }
})


document.getElementById("tagbtn").addEventListener("click",()=>{
    let tagbutton = document.getElementsByTagName("h2");
    tagbutton[0].style.border = "2px solid green";
});



document.getElementById("querrybtn").addEventListener("click",()=>{
    let querrybutton = document.querySelector(".text");
    querrybutton.style.fontWeight = "bold";
})



document.getElementById("querryallbtn").addEventListener("click",()=>{
    let querryallbutton = document.querySelectorAll(".text");
    querryallbutton.forEach(element => {
        element.style.border = "2px solid black";
    });
})

