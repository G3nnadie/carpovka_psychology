
// Open && Close nav
$('.q-toggle--nav').on('click', function() {
  $(this).toggleClass('q-toggle--active');
  $('.q-nav').fadeToggle(200);
  $('body').toggleClass('q-mob-fix');
});

// Open && Close drop
$('.q-drop__open').on('click', function() {
  $(this).toggleClass('q-drop__open--active');
  $(this).find('.q-toggle').toggleClass('q-toggle--active');
  $('.q-drop__box').fadeToggle(200);
});

$('body').mouseup(function (e) {
  let modalContent = $(".q-drop");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $('.q-drop__box').fadeOut(200);
    $('.q-drop__open').removeClass('q-drop__open--active');
    $('.q-drop__open .q-toggle').removeClass('q-toggle--active');
  }
});

// Open && Close search
$('.q-search__open').on('click', function() {
  $('.q-search__form').fadeToggle(200);
});

$('body').mouseup(function (e) {
  let modalContent = $(".q-search");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $('.q-search__form').fadeOut(200);
  }
});

// Phone mask
$(function($){
  $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
});


// Directions for mob.
$('.q-directions__item').on('click', function() {
  $('.q-directions__text').hide();
  $(this).find('.q-directions__text').fadeIn(200);
})

// Diseases for mob
$('.t-diseases__item').on('click', function(e) {
  e.preventDefault();
  $('.t-diseases__text').hide();
  $(this).find('.t-diseases__text').fadeIn(200);
});

// Modal
$('.q-open-modal-directions-1').on('click', function(e) {
  e.preventDefault();
  $('.q-modal--directions--1').fadeIn(200);
});

$('.q-open-modal-directions-2').on('click', function(e) {
  e.preventDefault();
  $('.q-modal--directions--2').fadeIn(200);
});

$('.q-open-modal-directions-3').on('click', function(e) {
  e.preventDefault();
  $('.q-modal--directions--3').fadeIn(200);
});

$('.q-modal').mouseup(function (e) {
  let modalContent = $(".q-modal__box");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $('.q-modal').fadeOut(200);
  }
});

// Hero
var swiper = new Swiper(".q-hero__sl", {
  // loop: true,
  autoplay: {
    delay: 3000,
  },
  // effect: 'fade',
  spaceBetween: 0,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Experts
var swiper = new Swiper(".q-experts__sl", {
  spaceBetween: 15,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    370: {
      spaceBetween: 25,
      lidesPerView: 'auto',
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Reviews
var swiper = new Swiper(".q-reviews__sl", {
  spaceBetween: 20,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Psych
var swiper = new Swiper(".t-psych__sl", {
  spaceBetween: 14,
  slidesPerView: 'auto',
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});



// Map
ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
  myMap = new ymaps.Map("q-map", {
    center: [59.973873942866945,30.263442100077803],
    zoom: 12,
    controls: ['zoomControl']
  });
  
  myPlacemark = new ymaps.Placemark([59.973873942866945,30.263442100077803], {}, {});
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable([
    'drag',
    'scrollZoom'
  ]);

}