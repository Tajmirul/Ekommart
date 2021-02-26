$(document).ready(function () {

    /* magnificPopup img view */
    $('.image-popup__large').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.image-popup__image').zoom();

    if (Boolean($('#rating'))) {
        $('#rating').barrating({
            theme: 'fontawesome-stars'
        });
    }

    /* magnificPopup video view */
    // $('.popup-video').magnificPopup({
    //     type: 'iframe',
    // });

    if (Boolean($('.mixitup-container')[0])) {
        var mixer = mixitup('.mixitup-container');
    }

    // slick slider for banner 
    $('.slider--banner').slick({
        prevArrow: '<i class="arrows banner-arrow prev fal fa-arrow-left"></i>',
        nextArrow: '<i class="arrows banner-arrow next fal fa-arrow-right"></i>',
        // dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.popup-image-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.popup-image-container-nav'
    });

    $('.popup-image-container-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.popup-image-container',
        centerMode: true,
        focusOnSelect: true
    });

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    });

    //     // preloader
    //     $(".preloader").animate({
    //         top: -2000000
    //     }, 1500);

    //     // sticky menu ber and go to top button
    //     $(window).scroll(function () {
    //         var scrolled = $(window).scrollTop();
    //         var topMain = $('main').offset().top - 400;

    //         // go to top button
    //         if (scrolled > topMain) {
    //             $('.go-to-top').addClass('active');
    //             $('.nav-outer').addClass('sticky');

    //             $('.go-to-top').click(function () {
    //                 $(window).scrollTop(0);
    //             });
    //         } else {
    //             $('.go-to-top').removeClass('active');
    //             $('.nav-outer').removeClass('sticky')
    //         }
    //         // console.log(scrolled);
    //     });

    // menu bar open -------------------------
    $('.mobile-navigation-open').click(function () {
        $('.mobile-navigation--overlay').fadeIn(200);

        $('.mobile-navigation').css({
            'width': 'calc(100% - 7rem)',
        });
        // $('.mobile-navigations').toggleClass('w-100 py-5 pl-50 pr-50')
    });
    // menu bar close -------------------------
    $('.mobile-navigation--overlay').click(function () {
        $('.mobile-navigation--overlay').fadeOut(200);

        $('.nav-bar__mobile .mobile-navigation').css({
            'width': '0',
        });
    });

    // dropdown toggle ------------------
    $('.nav-bar__mobile li.has-submenu > i').click(function () {
        $(this).parent().find('>ul').stop().slideToggle(200)
    });

    $('.add-active').children().click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.popup__open').click(function () {
        $('.all-popup').fadeIn(200)
        setInterval(() => {
            $($(this).data('popup')).fadeIn(200)
        }, 200);
    })

    $('.popup__close, .overlay').click(function () {
        $('.all-popup').fadeOut(200)
        $('.popup').fadeOut(200)
    });

});    
