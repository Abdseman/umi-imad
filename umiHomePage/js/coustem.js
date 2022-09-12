/* event slide */ 
document.addEventListener( 'DOMContentLoaded', function() {
    // Event slide
    var splide = new Splide( '.splide', {
        direction: 'ttb',
        height   : '30rem',
        perPage: 3,
        pagination: false,
        classes: {
            arrows: 'splide__arrows arrContainer',
            arrow : 'splide__arrow arr',
            prev  : 'splide__arrow--prev arr1',
            next  : 'splide__arrow--next arr2',
      },
      } );
      splide.mount();


        new Splide( '#client-image-carousel',{
            perPage: 4,
            arrows: false,
            classes: {
                pagination: 'splide__pagination client-carousel-dots',
                page      : 'splide__pagination__page your-class-page',
          },
        } ).mount();

    });
/*===========================================================
                        Clients section
=============================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    })
})