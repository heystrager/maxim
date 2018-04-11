$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ["<img src='img/banner-button-left.png'>","<img src='img/banner-button-right.png'>"],
    autoWidth: false,
    navSpeed: 800,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800
  }); // end carousel
  }); // end ready