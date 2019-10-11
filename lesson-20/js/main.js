/**
 * производим все действия только после того, как структура документа будет полностью готова
 */
$(document).ready(function () {

  new WOW().init();

  let jumpBt = $('.jump-btn');

  jumpBt.click(function () {
    jump('.navbar', {
      duration: 750
    })
  });

  $(window).scroll(function (e) {
    if ($(window).scrollTop() !== 0) {
      jumpBt.fadeIn();
    } else {
      jumpBt.fadeOut();
    }
  });

/*
  const options = {
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
*/
  const options = {
    items: 3,
    margin: 30,
    loop: true,
    // center: true,
    nav: true,
    // navElement: 'portfolio-navi',
    // navContainer: 'portfolio-navi',
    // responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
    navText: [
      `<div><img src="../img/key/left-arrow.png" alt="Стрелка влево"></div>`,
      `<div><img src="../img/key/right-arrow.png" alt="Стрелка вправо"></div>`
    ]
  };

  $('.portfolio-items').owlCarousel(options);


})
;

