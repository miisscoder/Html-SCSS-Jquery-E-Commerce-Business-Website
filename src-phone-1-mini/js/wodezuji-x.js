 
const today = new Date();
var date = today.getFullYear() + '年' + (today.getMonth() + 1) +
    '月' + today.getDate() + '号';
// datepicker
$('#datepicker').datepicker({
    language: 'zh-CN',
    todayHighlight: false
}).on('changeDate', function (e) {
    date = e.date.getFullYear() + '年' + (e.date.getMonth() + 1) +
        '月' + e.date.getDate() + '号';
    });
// click icon expand
$('#datepicker .icon').click(function () {
    $('#datepicker').attr('data-expand',
        $('#datepicker').attr('data-expand') === 'true'? 'false' : 'true');
});