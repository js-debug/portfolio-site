
// togle icons navbar\\
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{

    menuIcon.classList.toggle ('bx-x');
    menuIcon.classList.toggle ('active');
};









let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec=> {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
         navlinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header nav a [href*= '+ id +  ']').classList.add('active');


         });
        };

    });

    // sticky navbar


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly > 100)



    // remove togal icons and navbar when click navbar links scroll
    menuIcon.classList.remove ('bx-x');
    menuIcon.classList.remove ('active');

};


ScrollReveal({
    
    // reset: true,
   distance:"80px",
   duration:2000,
   delay:200
});


ScrollReveal().reveal('.home-contant, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-contant h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contant p, .about-content', { origin: 'left' });



const typed = new typed ('.multiple-text'{

   Strings: ['Frontend Developer','wordpress Developer','UI/uxdesigner']
   typespeed:100,
   backspeed:100,
   backdelay: 1000,
   loop:true
});