$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
    });
    $('a[data-toggle="list"]').on('shown.bs.tab', function (e) {
        $('.slideshow-tab .slick-slider').slick('setPosition');
    });
});

var btn = $('.navbar-toggler');

btn.on('click', function () {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});
