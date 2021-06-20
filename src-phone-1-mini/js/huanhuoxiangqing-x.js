// expand
$('.items .icon').click(function () {
    const status = $(this).attr('data-status');
    const items = $(this).parent('.items');
    if ('expand' === status) {
        items.attr('data-status', 'foldup');
        $(this).attr('data-status', 'foldup');
    } else if ('foldup' === status) {
        items.attr('data-status', 'expand');
        $(this).attr('data-status', 'expand');
    }
});


