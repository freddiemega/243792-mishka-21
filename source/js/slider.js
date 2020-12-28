var buttonLeft = document.querySelector(".reviews__button--left");
var buttonRight = document.querySelector(".reviews__button--right");
var slideBlocks = document.querySelectorAll(".slider__item");
var arraySlides = [].slice.call(slideBlocks);
var quantitySlides = arraySlides.length;
var numberCurrent = 0;

buttonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  dec();
});

buttonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  inc();
});

function inc() {
  arraySlides[numberCurrent].classList.toggle('slider__item--show');
  if (numberCurrent == quantitySlides - 1) {
    numberCurrent = -1;
  }
  arraySlides[numberCurrent + 1].classList.toggle('slider__item--show');
  numberCurrent++;
}

function dec() {
  arraySlides[numberCurrent].classList.toggle('slider__item--show');
  if (numberCurrent == 0) {
    numberCurrent = quantitySlides;
  }
  arraySlides[numberCurrent - 1].classList.toggle('slider__item--show');
  numberCurrent--;
}
