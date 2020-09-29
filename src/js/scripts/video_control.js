function initVideoControl() {
  const videoButton = document.querySelector('.video__button');
  const video = document.querySelector('.video__item');
  let videoPlay = true;

  if(!video && !videoButton) {
    return;
  }

  videoButton.addEventListener('click', () => {
    if(videoPlay) {
      videoButton.classList.add('video__button--paused');
      video.pause();
      videoPlay = false;
    } else {
      videoButton.classList.remove('video__button--paused');
      video.play();
      videoPlay = true;
    }
  })
}

initVideoControl();
