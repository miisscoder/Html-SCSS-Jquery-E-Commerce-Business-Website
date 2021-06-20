// swiper
var swiper = new Swiper('#swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    }
});


// option

$('.option').click(function () {
    const options = $(this).parent('.options');
    options.children('.option').removeClass('active');
   $(this).addClass('active');
});