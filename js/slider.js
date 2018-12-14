'use strict';

var slider = document.querySelector('.slider');

if (slider) {
  var sliderControls = slider.querySelectorAll('.slider__control-item');
  var sliderSlides = slider.querySelectorAll('.slider__slide');
  var body = document.querySelector('.index');

  for (var i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', function (event) {

      for (var j = 0; j < sliderControls.length; j++) {
        sliderControls[j].removeAttribute('disabled');
        sliderSlides[j].classList.remove('slide--active');
      }

      event.currentTarget.setAttribute('disabled', 'disabled');

      sliderSlides[Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget
      )].classList.add('slide--active');

      body.className = 'index index--' + (Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget) + 1);
    });
  }

}
