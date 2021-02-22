$(document).ready(function () {

//     /* magnificPopup img view */
//     $('.popup-image').magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         }
//     });

//     /* magnificPopup video view */
//     $('.popup-video').magnificPopup({
//         type: 'iframe'
//     });
    if ($('.mixitup-container')) {
        var mixer = mixitup('.mixitup-container');
    }

//     //for menu active class
//     $('.portfolio-menu button').on('click', function (event) {
//         $(this).siblings('.active').removeClass('active');
//         $(this).addClass('active');
//         event.preventDefault();
//     });

//     // WOW active
//     new WOW().init();

    // slick slider for banner 
    $('.slider--banner').slick({
        prevArrow: '<i class="arrows banner-arrow prev fal fa-arrow-left"></i>',
        nextArrow: '<i class="arrows banner-arrow next fal fa-arrow-right"></i>',
        // dots: true,
        // autoplay: true
    });

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    })

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

//     // menu bar open -------------------------
//     $('.navigations .menu-icon').click(function () {
//         $('.mobile-navigations').css({
//             'width': '100%',
//             'padding': '3rem 5rem'
//         });
//         // $('.mobile-navigations').toggleClass('w-100 py-5 pl-50 pr-50')
//     });
//     // menu bar close -------------------------
//     $('.mobile-navigations li.close-menu').click(function () {
//         $('.mobile-navigations').css({
//             'width': '0',
//             'padding': '0'
//         });
//     });
//     // dropdown toggle ------------------
//     $('.mobile-navigations li.has-dropdown > i').click(function () {
//         $(this).parent().find('>ul').slideToggle()
//     });

    $('.add-active').children().click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

});    
