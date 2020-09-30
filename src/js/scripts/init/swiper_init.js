const mainRoom = new Swiper('.room__box', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.room__gallery-button--next',
    prevEl: '.room__gallery-button--prev',
  },
  speed: 900,
  noSwiping: true
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  noSwiping: false
});

const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  noSwiping: false
});
