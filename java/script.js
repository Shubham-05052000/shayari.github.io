//change navbar style on scroll

// window.addEventListener('scroll',() => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrolly > 100 )
//     })

//     ///// show hoide nav bar
//     const menu =document.querySelector(".nav_menu");
//     const menuBtn =document.querySelector("#open-menu-btn");
//     const closeBtn =document.querySelector("#close-menu-btn");

//     menuBtn.addEventListener('click', () => {
//         menu.getElementsByClassName.display ="flex";

  // })



///swiperjs java portfolies/////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //when window width is >=600px
    breakpoints:{
      600:{
          slidesPerView: 2
      }
    }
  })
/////////////// nav bar ////////////////
var sidemenu=document.getElementById("sidemenu");
var open=document.getElementById("open");
var close=document.getElementById("close");

function openmenu(){
    sidemenu.style.right="0";
    close.style.display="block"
    open.style.display="none"
    
}
function closemenu(){
    sidemenu.style.right="-50%";
    close.style.display="none"
    open.style.display="block"
}

