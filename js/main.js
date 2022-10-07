
$('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
})

$('.main_slide').on('init afterChange', function (e, s, c) {
    console.log(e, s, c);
    $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount)
    $('.main_visual .btn li').eq(c).addClass('on').siblings().removeClass('on');
    var current = $('.main_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');
})

$('.main_visual .btn li').on('click', function () {
    var idx = $(this).index();
    $('.main_slide').slick('slickGoTo', idx);
})

$('.main_slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
})

$('.main_movie i:first-child').on('click', function () {
    $('.main_movie video').trigger('pause')
});

$('.main_movie i:last-child').on('click', function () {
    $('.main_movie video').trigger('play')
});

$('#bgmovie').YTPlayer({
    videoURL: 'qR13PjAwHwY',
    containment: '.ytp_main',
    showControls: false,
    playOnlyIfVisible: true,
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1
});

$('.ytp_main i:first-child').on('click', function () {
    $('#bgmovie').YTPPause();
    console.log(000)
})

$('.ytp_main i:last-child').on('click', function () {
    $('#bgmovie').YTPPlay();
})


$('.product_slide').slick({
    slidesToShow: 5,
    centerMode: true,
    arrows: false,
})

$('.product_slide').on('afterChange', function (e, s, c) {
    $('.main_product .dots li').eq(c).addClass('on').siblings().removeClass('on')
});

$('.main_product i:first-child').on('click', function () {
    $('.product_slide').slick('slickPrev')
});

$('.main_product i:last-child').on('click', function () {
    $('.product_slide').slick('slickNext')
});

$('.main_product .dots li').on('click', function () {
    var idx = $(this).index();
    $('product_slide').slick('slickGoTo', idx)
});

$('.main_customer .tab_menu li').on('click', function () {
    var i = $(this).index();
    $('.main_customer .tab_content>li').eq(i).addClass('on')
        .siblings().removeClass('on')
    $(this)
        .siblings().removeClass('on')
});


$('#link').on('change', function () {
    console.log($(this).val())
    var lnk = $(this).val()
    lnk && window.open(lnk)
})