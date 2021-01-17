// menu

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// modal

if (document.querySelector(".modal-overlay")) {
  var modalOverlay = document.querySelector(".modal-overlay"),
  modalCart = modalOverlay.querySelector(".modal-cart"),
  modalButtons = document.querySelectorAll(".js-modal-button");
  modalButtonArray = Array.prototype.slice.call(modalButtons);
  var modalField = modalCart.querySelector(".checkbox-cart__label");

  modalButtonArray.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.classList.remove("visually-hidden");
      modalOverlay.classList.add("modal-overlay--open");
      modalCart.classList.add("modal-cart--open");
      modalField.focus();
      document.body.style.overflow = "hidden";


      if (modalCart.classList.contains("modal-cart--open")) {
        window.addEventListener("click", function (e) {
          if (e.target === modalOverlay) {
            document.body.style.overflow = "visible";
            modalOverlay.classList.remove("modal-overlay--open");
            modalCart.classList.remove("modal-cart--open");
            }
          });
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            document.body.style.overflow = "visible";
            modalOverlay.classList.remove("modal-overlay--open");
            modalCart.classList.remove("modal-cart--open");
          }
        });

      }
    });
  });
}

// slider

if (document.querySelector(".slider__item")) {

  var buttonLeft = document.querySelector(".reviews__button--left");
  var buttonRight = document.querySelector(".reviews__button--right");
  var slideBlocks = document.querySelectorAll(".slider__item");
  var arraySlides = [].slice.call(slideBlocks);
  var quantitySlides = arraySlides.length;
  var numberCurrent = 0;

  buttonLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    decrease();
  });

  buttonRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    increase();
  });

  function increase() {
    arraySlides[numberCurrent].classList.toggle("slider__item--show");
    if (numberCurrent == quantitySlides - 1) {
      numberCurrent = -1;
    }
    arraySlides[numberCurrent + 1].classList.toggle("slider__item--show");
    numberCurrent++;
  }

  function decrease () {
    arraySlides[numberCurrent].classList.toggle("slider__item--show");
    if (numberCurrent == 0) {
      numberCurrent = quantitySlides;
    }
    arraySlides[numberCurrent - 1].classList.toggle("slider__item--show");
    numberCurrent--;
  }

}
