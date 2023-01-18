const menu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const socialList = document.querySelector(".social-lists");
const li = document.querySelectorAll(".social-lists li");

menu.addEventListener("click",()=>{
    socialList.classList.toggle("hide");
    menu.classList.toggle("rotate");
});

li.forEach((li)=>{
    li.addEventListener("click",()=>{
        menuText.innerText = li.innerHTML;
        socialList.classList.add("hide");
        menu.classList.toggle("rotate");
    });
});