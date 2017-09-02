$(function ($) {
    'use strict';


    var _nat = _nat || {};

       // Document Ready
    $(function () {
       _init();
       _initEvent();
    });

    //정의
    function _init() {

    }

    //실행
    function _initEvent() {
        sideMenuHandler();
        instSliderHandler();
        mainSliderHandler();
        snsIcon();
    }

    function sideMenuHandler() {
        var sideMenu = new SideMenu({
            selector: {
                menu: '.side-menu',
                showBtn: '.open',
                shadow: '.side_shadow'
            },
            duration: 500
        });
    }

    function mainSliderHandler() {
        $('.main-slider ul').bxSlider({
            mode: 'vertical',
            pager: false,
            controls: false,
            auto: true,
            responsive: true,
            pause: 5000,
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth: 1510,
            slideMargin: 30
        })
    }

    function instSliderHandler() {
        $('.inst ul').bxSlider({
            pager: false,
            controls: false,
            auto: true,
            responsive: true,
            adaptiveHeight: true,
            pause: 2000,
            minSlides: 1,
            maxSlides: 8,
            moveSlides: 1,
            slideWidth: 188,
            slideMargin: 0
        })
    }

    function snsIcon() {
        $('.sns ul li img').on('mouseenter', function () {
            TweenMax.set(this, {scale: .9 });
            _nat.toggleZoom = TweenMax.to(this, 1, {
                scale: 1.5,
                repeat: -1,
                yoyo: true
            });
        $('.sns ul li img').on('mouseleave', function () {
            TweenMax.set(this, {scale: 1 });
            _nat.toggleZoom.pause();
            });
        });
    }







}(jQuery));
