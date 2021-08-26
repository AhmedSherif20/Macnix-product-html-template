$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            575: {
                items: 1,
                nav: true
            },
            767: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    })
});