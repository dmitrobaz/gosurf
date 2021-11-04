// SLIDER SLICK PART 
$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left display_none" src="./img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right display_none" src="./img/arrows-right.svg" alt="">',
        asNavFor: '.slider-dotshead',
        
    })
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 961,
            settings: "unslick"
        }]
    });
    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg" alt="">',
        asNavFor: '.slider-map',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.slider-map').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 961,
            settings: "unslick",
        }]
    });
    // $('.surf__slider').slick({
    //     infinite: true,
    //     fade: true,
    //     arrows: false,
    //     asNavFor: '.surf__slider',
    //     focusOnSelect: true
    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg" alt="">',
        // asNavFor: '.surf__slider',
        // focusOnSelect: true
    });


    // HEADER ANIMATION PART 
    let btn_box = $('.dots-box');
    btn_box.click(function (event) {
        let click_slide = event.currentTarget.innerText;
        // console.log(event.currentTarget.innerText);
        console.log(click_slide.slice(0, 2));
        switch (click_slide.slice(0, 2)) {
            case '01':
                console.log("Done");
                $('.header__slider-item').css({ "background-image": "url('../img/header-bg.jpg')" });
                $('.header__map').html(north_point);
                break;
            case '02':
                $('.header__slider-item').css({ "background-image": "url('../img/header-bg-2.jpg')" });
                $('.header__map').html(south_point);
                break;

            case '03':
                $('.header__slider-item').css({ "background-image": "url('../img/header-bg-4.jpg')" });
                $('.header__map').html(west_point);
                break;
            case '04':
                $('.header__slider-item').css({ "background-image": "url('../img/header-bg-3.jpg')" });
                $('.header__map').html(east_point);
                break;
        }
    });

    // SECTION SLEEP - COUNT PART 
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        $('.quantity-button').on('click', function () {
            var parents = $(this).parents('.holder-slider__info');
            let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
            $('.summ', parents).html('$' + summ);
        });

        $('.quantity').each(function () {
            var parents = $(this).parents('.holder-slider__info');
            let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
            $('.summ', parents).html('$' + summ);
        });
    });

    $('.surfboard-box__circle').on('click', function () {
        $(this).toggleClass('active');
    })


    new WOW().init();
    $('.menu-btn').on('click', () => {
        $('.menu').toggleClass('active');
        $('.menu-btn__inner').toggleClass('active');
        $('.menu-btn__line').toggleClass('active');
    })
});

