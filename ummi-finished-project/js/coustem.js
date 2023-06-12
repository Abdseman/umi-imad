/* event slide */

document.addEventListener('DOMContentLoaded', function () {
    // Event slide
    var splide = new Splide('.splide', {
        direction: 'ttb',
        height: '30rem',
        perPage: 3,
        pagination: false,
        classes: {
            arrows: 'splide__arrows arrContainer',
            arrow: 'splide__arrow arr',
            prev: 'splide__arrow--prev arr1',
            next: 'splide__arrow--next arr2',
        },
    });
    splide.mount();

});
/*===========================================================
about page section
=============================================================*/
$('.about-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
})

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

/*===========================================================
                        Gallery Hover Slider
=============================================================*/
var mainSplide = new Splide( '#gallery-hover-carousel', {
    pagination: false,
    type      : 'fade',
    arrows    : false,
  } );
  
  var thumbnails = document.getElementsByClassName( 'thumbnail' );
  var current;
  
  for ( var i = 0; i < thumbnails.length; i++ ) {
    initThumbnail( thumbnails[ i ], i );
  }
  
  function initThumbnail( thumbnail, index ) {
    var tClick = function () {
        mainSplide.go( index );
    };
    thumbnail.addEventListener('click', tClick, false);
    thumbnail.addEventListener('mouseover', tClick, false);
    // thumbnail.addEventListener( 'click, mouseover', function () {
    //   mainSplide.go( index );
    // } );
  }
  
  mainSplide.on( 'mounted move', function () {
    var thumbnail = thumbnails[ mainSplide.index ];
  
    if ( thumbnail ) {
      if ( current ) {
        current.classList.remove( 'is-active' );
      }
  
      thumbnail.classList.add( 'is-active' );
      current = thumbnail;
    }
  } );
  
  mainSplide.mount();
  
/*===========================================================
                        Gallery Magnific Pop UP
=============================================================*/
$(function () {
    $("#image-gallery").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})
/*===========================================================
                        Subscribe Pop up box
=============================================================*/

  
