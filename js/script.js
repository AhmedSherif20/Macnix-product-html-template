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

let navBar = document.querySelector("nav")
let navBarLinks = document.querySelectorAll(".nav-link")

let videoShow = document.querySelector(".video-show")
let video = document.querySelector("#video")
let videoPlay = document.querySelector("#videoPlay")
let videoClose = document.querySelector("#videoClose")

window.onscroll = () => {
    let windowScroll = window.scrollY
    if (windowScroll > 500) {
        navBar.style.backgroundColor = "#130f40"
    } else {
        navBar.style.backgroundColor = "transparent"
    }
}

navBar.addEventListener("click", (e) => {
    for (let i = 0; i < navBarLinks.length; i++) {
        navBarLinks[i].classList.remove("active")
    }
    e.target.classList.add("active")
})

videoPlay.addEventListener("click", () => {
    videoShow.style.display = "flex"
    video.setAttribute("src", "https://www.youtube.com/embed/TCMnrssX1NE")
    document.body.style.overflow = "hidden"

})
videoClose.addEventListener("click", () => {
    videoShow.style.display = "none"
    video.setAttribute("src", "")
    document.body.style.overflow = "auto"
})
