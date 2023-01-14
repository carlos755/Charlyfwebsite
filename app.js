const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle");

// js code to toggle dark and light mode 
    modeToggle.addEventListener("click"  , ()  =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    });