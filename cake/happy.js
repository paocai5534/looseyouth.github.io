$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity: "1",
            top: "50%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity: "1",
            top: "50%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity: "1",
            top: "10%"
        }, 1500);
        $('.button-style2').animate({
            opacity: "1",
            top: "10%"
        }, 2000);
    }, 9000);
    // $(window).click(function () {
    //     $('audio')[0].play();
    // });
})