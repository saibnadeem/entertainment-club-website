$(document).ready(function () {
  //service-row-right
  $('.service-row').slick({
    speed: 10000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "1200px",
    variableWidth: true,
    focusOnSelect: false,
  });


  //service-row-left
  $('.service-row-l').slick({
    speed: 10000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: false,
  });

  $('.client-slider').slick({
    speed: 5000,
    rows: 4,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    variableWidth: false,
    waitForAnimate: true,
    pauseOnHover: false,
  });

  $('.strip').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 2,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    variableWidth: false,
    waitForAnimate: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.testimonial').slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.filter-item li').slice(0, 6).show();
  $('.btn-load-more').on('click', function (e) {
    e.preventDefault();
    $(".filter-item li:hidden").slice(0, 4).slideDown();
    if ($(".filter-item li:hidden").length == 0) {
      $(".btn-load-more").text("That's all for now").addClass("noContent");
    }
  })

  //hamburger

  $('#hamburger').click(function () {
    $(".menu").css({
      'visibility': 'visible',
      'opacity': '1'
    })
  })

  $('#close').click(function () {
    $(".menu").css({
      'visibility': 'hidden',
      'opacity': '0'
    })
  })

})

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click', function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove('current');
    }

    this.classList.add('current');


    let targetData = this.getAttribute('data-target');

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove('active');
      sortItem[k].classList.add('delete');

      if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('active');
      }
    }
  });
}

//array

var array = new Array("https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/000/fff", "https://dummyimage.com/600x400/000/fff")
var randomNum = Math.floor(Math.random() * array.length)

document.getElementById('aboutUs').backgroundUrl = array[randomNum];