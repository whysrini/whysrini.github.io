
const headerOffset = $("header").height();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20},
        768: { slidesPerView: 4, spaceBetween: 40},
        1024: {slidesPerView: 5, spaceBetween: 30},
    },
});


$('a[data-id]').on('click', function(e){
    e.preventDefault();
    const hHeight = $('header').height();
    const eleId = $(this).data('id');
    $('body,html').animate({
        scrollTop: $(eleId).offset().top - hHeight
    }, 100);
});

$(document).scroll(function(){
    $('header').toggleClass("bg-white/70 backdrop-blur backdrop-blur-lg shadow-xl !text-black", $(this).scrollTop() > headerOffset);
});







