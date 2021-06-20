
//Change Money Amount
function onChangeMoneyAmount(money, amount) {
    // money-item
    $('.money-item[data-money="' + money+'"]').children('.badge').text(amount);
    $('.money-item[data-money="' + money + '"]').attr('data-amount', amount);

    // payment-item input
    $('.payment-item[data-money="' + money + '"]').attr('data-amount', amount);
    $('.payment-item[data-money="' + money + '"] input').val(amount);

    // formula
    $('span.money-amount[data-money="' + money + '"]').text(amount);

    //calculate sum
    var sumIntegral = getSum();
    $('span.result-integral').text(sumIntegral);
    $('span.result-money').text(sumIntegral / 10);
}

//.money-item
$('.money-item').click(function () {
    var amount = Number($(this).children('.badge').text());
    var money = $(this).attr('data-money');
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
    }
    amount = amount + 1;
    onChangeMoneyAmount(money, amount);
});

function getSum() {
    return 60 * Number($('span.money-amount[data-money="6"]').text()) +
        300 * Number($('span.money-amount[data-money="30"]').text()) +
        680 * Number($('span.money-amount[data-money="68"]').text()) +
        1280 * Number($('span.money-amount[data-money="128"]').text()) +
        1980 * Number($('span.money-amount[data-money="198"]').text()) +
        3280 * Number($('span.money-amount[data-money="328"]').text()) +
        4880 * Number($('span.money-amount[data-money="488"]').text()) +
        6480 * Number($('span.money-amount[data-money="648"]').text());
}



// minus 
$('.minus').click(function () {
    var amount = Number($(this).parent('.number-change-group')
        .children('.number').val());
    var money = $(this).parents('.payment-item').attr('data-money');
    if (Number(amount)) {
        $(this).parent('.number-change-group').children('.number').val(0 === amount ? 0 : amount - 1);

        onChangeMoneyAmount(money, amount);
    }
});
// add
$('.add').click(function () {
    var amount = Number($(this).parent('.number-change-group').children('.number').val());
    var money = $(this).parents('.payment-item').attr('data-money');
    if (Number(amount)) {
        $(this).parent('.number-change-group').children('.number').val(amount + 1);

        onChangeMoneyAmount(money, amount);
    }
});


