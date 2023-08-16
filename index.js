let  buttonMenu = document.querySelector(".menu-icon");
let  buttonMbyll = document.querySelector(".close");
let  spine = document.querySelector(".back");
let ul = document.querySelector(".nav-ul-links");
let container = document.querySelector("main");

buttonMenu.addEventListener("click", (e)=>{
 
     
    document.body.classList.add("lock");
    buttonMbyll.style.display ="block";
    buttonMenu.style.display ="none";
    spine.style.display = "block";
    container.style.top = "0px";
    spine.classList.add("show");
    ul.style.left ="40vw";
    ul.style.transition ="1s all ease-in";
})

buttonMbyll.addEventListener("click", (ev)=>{
   
    document.body.classList.remove("lock");
    buttonMbyll.style.display ="none";
    spine.style.display = "contents";
    buttonMenu.style.display ="block";
    ul.style.left ="100vw";
    ul.style.transition ="1s all ease-in";
    spine.classList.remove("show");
})
