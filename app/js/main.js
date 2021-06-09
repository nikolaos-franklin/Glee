$(function(){

  $('.product-details__input').styler();

  $('.product-details__thumb').slick({
    asNavFor: '.product-details__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-details__big').slick({
    asNavFor: '.product-details__thumb',
    draggable: false,
    arrows: false,
  });

  $('.product-content__filter-btn').on('click', function(){
    $('.product-content__filter-btn').removeClass('product-content__filter-btn--active');
    $(this).addClass('product-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.products__item').addClass('products__item--list');
  });

  $('.button-grid').on('click', function(){
    $('.products__item').removeClass('products__item--list');
  });

  $(".star").rateYo({
    starWidth: "10px",
    spacing   : "7px",
    normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true,
  });

  $(".star-base, .star-details").rateYo({
    starWidth: "18px",
    spacing   : "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

$(".filter-price__input").ionRangeSlider({
  type: "double",
  prefix: "$",

  onStart: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  },
   onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
});

 $('.top-slider__inner').slick({
   arrows: false,
   dots: true,
   fade: true,
   autoplay: true,
   autoplaySpeed: 2000
 })


var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

