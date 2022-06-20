var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const line = document.querySelector("#line");
const ball = document.querySelector("#ball");
const main = document.querySelector("main");
line.addEventListener('click',function(){
    line.classList.toggle('active');
    ball.classList.toggle('active');
    nav.classList.toggle('active');
});
main.addEventListener('click',function(){
    line.classList.remove('active');
    ball.classList.remove('active');
    nav.classList.remove('active');
})