function initCarousel() {
    let elem = document.querySelector('[data-carousel-holder]');
    const right = document.querySelector('.carousel__arrow_right');
    const left = document.querySelector('.carousel__arrow_left');
    
    let carouselInnerElem = elem.querySelector('.carousel__inner');
    let slidesAmount = 4;
    let currentSlideNumber = 0;

    moveSlide();

    elem.addEventListener('click', function(event) {
     if(event.target.closest('.carousel__arrow_right')) {
        next();
     } else if(event.target.closest('.carousel__arrow_left')) {
      prev();
     };
  });

  function next() {
      currentSlideNumber++;
      moveSlide();
  }

  function prev() {
      currentSlideNumber--;
      moveSlide();
  }

  function moveSlide() {
      let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
      carouselInnerElem.style.transform = `translateX(${offset}px)`;

      if(currentSlideNumber == slidesAmount -1) {
         right.style.display = 'none';
      } else {
         right.style.display = '';
      }

      if(currentSlideNumber == 0) {
         left.style.display = 'none';
      } else {
         left.style.display = '';
      }
  }
};





