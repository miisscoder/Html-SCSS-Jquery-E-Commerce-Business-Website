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

const rem = window.innerWidth * 100 / 750;

// bar
$('.bar .item').click(function () {
    const options = $(this).parent('.options');
    options.children('.option').removeClass('active');
    $('.bar .item').removeClass('active');
    $(this).addClass('active');
    if ('product' === $(this).attr('id')) {
        $(window).scrollTop(0);
    } else if ('comment' === $(this).attr('id')) {
        $(window).scrollTop($('.comment')[0].offsetTop - 2 * rem);
    } else if ('detail' === $(this).attr('id')) {
        $(window).scrollTop($('.detail')[0].offsetTop - 2 * rem);
    } else if ('recommend' === $(this).attr('id')) {
        $(window).scrollTop($('.recommend')[0].offsetTop - 2 * rem);
    }
});

// document
document.addEventListener('scroll', function (e) {
    const top = $(window).scrollTop();
    if (top < rem * 7.45) {
        $('.bar').hide();
    } else {
        $('.bar').css('display', 'flex');
    }
})

// 地址选择
$('.modal-address .modal-content-1 .btn-red.long').click(function () {
    $('.modal-address .modal-content-1').hide();
    $('.modal-address .modal-content-2').show();
});

$('.btn-last').click(function () {
    $('.modal-address .modal-content-2').hide();
    $('.modal-address .modal-content-1').show();
}); 

/// 地址选择
var baseInput = document.getElementById('base');

// 初始化
var baseCity = new LcCityInline({
    baseID:'lc-city-inline',
    confirm: function (data) {
        console.log(data);
        $('#base input').val(data);
    }
});

