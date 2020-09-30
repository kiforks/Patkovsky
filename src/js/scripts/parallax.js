function parallaxInit(different) {
  let differentValue = 180;

  if(window.screen.width < 1440) {
    differentValue = 120;
  }

  if(window.screen.width < 1200) {
    differentValue = 100;
  }

  const parallaxItem = document.querySelector('.parallax--deer');
  const parallaxImageDeer = document.querySelector('.parallax__image--deer');
  const detailsPhoto = document.querySelector('.details__photo--building');
  const parallaxItemPositionTop = window.pageYOffset + parallaxItem.getBoundingClientRect().top - differentValue;
  const detailsPositionBottom = window.pageYOffset + detailsPhoto.getBoundingClientRect().bottom - differentValue;

  if(!parallaxItem) {
    return;
  }

  function parallaxInViewport() {
    if(parallaxItemPositionTop < window.pageYOffset && window.pageYOffset < detailsPositionBottom) {
      parallaxImageDeer.style.backgroundPositionY = `${window.pageYOffset - parallaxItemPositionTop}px`;
    } else {
      parallaxImageDeer.style.backgroundPositionY = '0';
    }
  }

  window.addEventListener("scroll", parallaxInViewport);
}

if(document.querySelector('.parallax--deer')) {
  parallaxInit();
}