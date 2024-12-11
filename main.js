// Catch Elements
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e)=>{
navLinks.classList.toggle('open');
const isOpen = navLinks.classList.contains('open');
menuBtnIcon.setAttribute('class',isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click',(e)=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class','ri-menu-line');
});

const scrollRevealOption = {
    distance:"20px",
    origin: "bottom",
    duration:1000,
}
ScrollReveal().reveal(".left-container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".left-container .container-btn",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".right-container h4",{
    ...scrollRevealOption,
    delay:2000,
});

ScrollReveal().reveal(".right-container h2",{
    ...scrollRevealOption,
    delay:2500,
});

ScrollReveal().reveal(".right-container h3",{
    ...scrollRevealOption,
    delay:3000,
});

ScrollReveal().reveal(".right-container p",{
    ...scrollRevealOption,
    delay:3500,
});

ScrollReveal().reveal(".right-container .tent-1",{
    duration :1000,
    delay:4000,
});
ScrollReveal().reveal(".right-container .tent-2",{
    duration :1000,
    delay:4500,
});

ScrollReveal().reveal(".location",{
    ...scrollRevealOption,
    origin:"left",
    delay:5000,
});

ScrollReveal().reveal(".socials span",{
    ...scrollRevealOption,
    origin:"top",
    delay:5500,
    interval:500,
});

