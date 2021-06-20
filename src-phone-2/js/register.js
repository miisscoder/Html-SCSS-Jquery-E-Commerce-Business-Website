$(".btn-step-1").click(function () {
    $("body.register").attr("data-type", "step2");
});

$(".btn-step-2").click(function () {
    $("body.register").attr("data-type", "step3");
    $(".header .text").hide();
});