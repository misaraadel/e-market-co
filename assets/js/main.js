$(document).ready(function () {
  $('.loader').fadeOut(3000);
  $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
          $(".scroll-top-button").fadeIn();
      } else {
          $(".scroll-top-button").fadeOut();
      }
  });

  //Wow intit
  wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 200,
      mobile: true,
      live: false
  });
  wow.init();

  $(function () {
      $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  $(".scroll-top-button").on('click', function () {
      $('html , body').animate({
          scrollTop: 0
      }, 100);
  });

  $('.nav-toggle').click(function(){
      $('.nav-toggle').toggleClass('active');
      $('.full-nav').toggleClass('active-nav');
      $('.navbar').toggleClass('active-content');
      $('body').toggleClass('overflowNone');
  });

  var swiper = new Swiper(".headerSwiper", {
      effect: "fade",
      loop: true,
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var swiper = new Swiper(".aboutSwiper", {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  });

  var swiper = new Swiper(".partnerSwiper", {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5    ,
          spaceBetween: 10,
        },
      },
  });
});