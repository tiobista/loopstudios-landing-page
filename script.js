const toggle_btn = document.querySelector('.toggle-btn')
const btn_open  = document.querySelector('.open');
const btn_close  = document.querySelector('.close');
const hamburger_menu = document.querySelector('.toggle-btn img')
const mobile_menu = document.querySelector('.mobile-nav');


btn_open.addEventListener('click', ()=>{
    if(mobile_menu.style.display === "block"){
        mobile_menu.style.display = "none";
        hamburger_menu.src = "./images/icon-hamburger.svg"
    }else{
        mobile_menu.style.display = "block";
        hamburger_menu.src = "./images/icon-close.svg"
    }
   
    
});