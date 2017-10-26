var slideNow = 1;
var slideCount = $('#slidewrapper .row').children().length;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    $('.next-button-white').click(function() {
        nextSlide();
        makeActiveDot();
    });
    $('.previous-button-white').click(function() {
        prevSlide();
        makeActiveDot();
    });

    for(var i = 0; i < slideCount; i++) {
        $('#slider-dots').append('<li class="slide-dot"></li>');
    }
    makeActiveDot();


    $('.slide-dot').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = navBtnId + 1;
        }
        makeActiveDot();
    });

    $('.js-show-popup').on('click', function (e) {
        e.preventDefault();
        $('.popup-overlay').show();
    });

    $('.js-close-popup').on('click', function (e) {
        e.preventDefault();
        $('.popup-overlay').hide();
    });

    $('#navigation-mobile').on('click', 'a', function (e) {
        e.preventDefault();
        $('.menu-mobile').hide();
        var id  = $(this).attr('href');
        var scrollTop = $(id).offset().top;
        $(document).scrollTop(scrollTop);
    });

    $('.open-menu-mobile').on('click', function (e) {
        e.preventDefault();
        $('.menu-mobile').show();
    });

    $('.close-menu-mobile').on('click', function (e) {
        e.preventDefault();
        $('.menu-mobile').hide();
    });

    $('#mini-slider').jCarouselLite({
        btnNext: ".next-button-gray",
        btnPrev: ".previous-button-gray"
    });

});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
}

function makeActiveDot() {
    $('#slider-dots li').removeClass('active')
    $('#slider-dots li:nth-child('+slideNow+')').addClass('active');
}