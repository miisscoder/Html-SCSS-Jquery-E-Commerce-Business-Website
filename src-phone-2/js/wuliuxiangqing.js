//tabs - section
$('.tabs-section .icon').click(function () {
    const status = $(this).attr('data-status');
    if ('expand' === status) {
        $('.tabs').attr('data-status', 'foldup');
        $(this).attr('data-status', 'foldup');
    } else if ('foldup' === status) {
        $('.tabs').attr('data-status', 'expand');
        $(this).attr('data-status', 'expand');
    }
});

$('.tab-container .icon').click(function () {
    const status = $(this).attr('data-status');
    const items = $(this).parents('.tab-container').children('.items');
    if ('expand' === status) {
        items.attr('data-status', 'foldup');
        $(this).attr('data-status', 'foldup');
    } else if ('foldup' === status) {
        items.attr('data-status', 'expand');
        $(this).attr('data-status', 'expand');
    }
});


