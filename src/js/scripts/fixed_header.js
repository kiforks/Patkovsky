window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const headerBox = document.querySelector('.header__box');
  const headerPositionBottom = window.pageYOffset + header.getBoundingClientRect().bottom;
  const windowPositionTop = window.pageYOffset;

  if(headerPositionBottom < windowPositionTop) {
    headerBox.classList.add('header__box--fixed');
  } else {
    headerBox.classList.remove('header__box--fixed');
  }
})

