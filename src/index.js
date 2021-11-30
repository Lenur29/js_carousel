const prevButton = document.querySelector('.slider__btn-prev');

const nextButton = document.querySelector('.slider__btn-next');

const slides = document.querySelectorAll('.slider__item');

const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  for (const slide of slides) {
    slide.classList.remove('slider__item--active');
  }
  slides[n].classList.add('slider__item--active');
}

const activeDot = n => {
  for (const dot of dots) {
    dot.classList.remove('dot--active');
  }
  dots[n].classList.add('dot--active');
}

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeDot(index);
  } else {
    index++;
    activeSlide(index);
    activeDot(index);
  }
}

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    activeSlide(index);
    activeDot(index);
  } else {
    index--;
    activeSlide(index);
    activeDot(index);
  }
}

dots.forEach((item, dotIndex) => {
  item.addEventListener('click', () => {
    index = dotIndex;
    activeSlide(index);
    activeDot(index);
  })
})

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', prevSlide);

setTimeout(() => {
  setInterval(nextSlide, 2000);
}, 10000)
