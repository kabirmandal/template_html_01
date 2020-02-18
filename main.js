        /*=======================================
           testimonial carousel
       ========================================*/
       var testimonialCarousel = $('.testimonial-slider');
       testimonialCarousel.owlCarousel({
           items: 3,
           loop: true,
           dots: true,
           nav: false, 
           margin: 30,
           autoplay: true,
           autoplayTimeout: 2000,
           autoplayHoverPause: true,
           responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
       }); 