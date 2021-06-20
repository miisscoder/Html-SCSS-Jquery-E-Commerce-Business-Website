// birthday modal
const minYear = 1960;
const maxYear = 2022;
var iYear = maxYear;
var iMonth = 0;
var iDay = 0;
var html = '<div class="text"></div>';
var activeYear = maxYear;
var activeMonth = 1;
var activeDay = 1;
var activeYearValue = (maxYear - 1) + '年';
var activeMonthValue = '1月';
var activeDayValue = '1日';
// year column
while (iYear-- > minYear) {
    if (iYear === maxYear - 1) {
        html += '<div class="text active" data-year="' + iYear
            + '">' + iYear + '年</div>';
    } else {
        html += '<div class="text" data-year="' + iYear
            + '">' + iYear + '年</div>';
    }
}
html += '<div class="text"></div>';
$('.modal-birthday .year').html(html);
// month column
html = '<div class="text"></div>';
while (iMonth++ < 12) {
    if (iMonth === 1) {
        html += '<div class="text active" data-month="' + iMonth
            + '">' + iMonth + '月</div>';
    } else {
        html += '<div class="text" data-month="' + iMonth
            + '">' + iMonth + '月</div>';
    }
}
html += '<div class="text"></div>';
$('.modal-birthday .month').html(html);

// day column
html = '<div class="text"></div>';
while (iDay++ < 31) {
    if (iDay === 1) {
        html += '<div class="text active" data-day="' + iDay
            + '">' + iDay + '日</div>';
    } else {
        html += '<div class="text" data-day="' + iDay
            + '">' + iDay + '日</div>';
    }
}
html += '<div class="text"></div>';
$('.modal-birthday .day').html(html);


// get active Text
function changeActiveText(dem) {
    const clientHeight = $(dem).children('.text')[0].clientHeight + 1;
    const scrollTop = $(dem)[0].scrollTop;
    const activeID = Math.floor(scrollTop / clientHeight) + 2;
    $(dem).children('.text').removeClass('active');
    $($(dem).children('.text')[activeID]).addClass('active');
    return $($(dem).children('.text')[activeID]).text();
}

$(function () {
    // year
    var timerY = null;
    $('.modal-birthday .column.year')[0]
        .addEventListener('scroll', function () {
            if (timerY !== null) {
                clearTimeout(timerY);
            }
            timerY = setTimeout(function () {
                // do something
                activeDayValue = changeActiveText($('.modal-birthday .column.year')[0]);
            }, 150);
        }, false);

    // month
    var timerM = null;
    $('.modal-birthday .column.month')[0]
        .addEventListener('scroll', function () {
            if (timerM !== null) {
                clearTimeout(timerM);
            }
            timerM = setTimeout(function () {
                // do something
                activeMonthValue = changeActiveText($('.modal-birthday .column.month')[0]);
                
            }, 150);
        }, false);

    // day
    var timerD = null;
    $('.modal-birthday .column.day')[0]
        .addEventListener('scroll', function () {
            if (timerD !== null) {
                clearTimeout(timerD);
            }
            timerD = setTimeout(function () {
                // do something
                activeDayValue = changeActiveText($('.modal-birthday .column.day')[0]);
            }, 150);
        }, false);

});

$('#modal-gender-ok').click(function () {
    const val = $('input[name="gender"]:checked', '.modal-gender').val();
    $('#gender').text(val);
});
$('#modal-birthday-ok').click(function () {
    $('#birthday').text(activeYearValue + activeMonthValue + activeDayValue);
});
$('#modal-name-ok').click(function () {
    $('#name').text($('#name-input').val());
});