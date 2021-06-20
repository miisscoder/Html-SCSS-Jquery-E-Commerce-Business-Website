 
const today = new Date();
var date = today.getFullYear() + '年' + (today.getMonth() + 1) +
    '月' + today.getDate() + '号';
// datepicker
$('#datepicker').datepicker({
    language: 'zh-CN',
    todayHighlight: true,
    beforeShowDay: function (e) {
        const EffectiveDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
        if (e < EffectiveDate) {
            return {
                enabled: false,
                classes: 'disabled'
            }
        } 
    }
}).on('changeDate', function (e) {
    date = e.date.getFullYear() + '年' + (e.date.getMonth() + 1) +
        '月' + e.date.getDate() + '号';
});

$('body').on('click', '.btn-next', function () {
    $('.modal-content-1').hide();
    $('.modal-content-2').show();

});

$('body').on('click', '.btn-last', function () {
    $('.modal-content-2').hide();
    $('.modal-content-1').show();

});

var time = '';
$('body').on('click', '.option', function () {
    $(this).parent('.options').children('.option').removeClass('active');
    $(this).addClass('active');
    time = $(this).text();
});

// modal-picker btn-ok
$('body').on('click', '.btn-ok', function () {
    const type = $('body').attr('data-type');
    time = $('.modal-content-2 .' + type +' .option.active').text();
    $('.text-time.' + type).text('vegitable' === type ? date : date + ', ' + time);
    $('.modal-content-1').show();
    $('.modal-content-2').hide();
});
// modal-pay-password
$('body').on('click', '.modal-pay-password .items .item', function () {
    const value = $(this).attr('data-value');
    const id = Number($('.dot-boxes').attr('data-active'));
    if ('delete' === value) {
        if (id > 0) {
            $('.dot-box[data-id="' + id + '"]').attr('data-active', 'false');
            $('.dot-boxes').attr('data-active', id - 1);
        }
    } else if ('none' !== value) {
        $('.dot-boxes').attr('data-active', id + 1);
        $('.dot-box[data-id="' + (id + 1) + '"]')
            .attr('data-active', 'true');
    }
});

// modal-pay-password
$('body').on('click', '.modal-pay-password .btn-cancel', function () {
    const value = $(this).attr('data-value');
    const id = Number($('.dot-boxes').attr('data-active'));
    if ('delete' === value) {
        if (id > 0) {
            $('.dot-box[data-id="' + id + '"]').attr('data-active', 'false');
            $('.dot-boxes').attr('data-active', id - 1);
        }
    } else if ('none' !== value) {
        $('.dot-boxes').attr('data-active', id + 1);
        $('.dot-box[data-id="' + (id + 1) + '"]')
            .attr('data-active', 'true');
    }
});
