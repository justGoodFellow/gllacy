'use strict';

var fb = document.querySelector('.feedback');

if (fb) {
  var fbOpen = document.querySelector('.contacts__btn');
  var fbClose = fb.querySelector('.feedback__close');
  var fbForm = fb.querySelector('.feedback__form');
  var fbName = fb.querySelector('[name=name]');
  var fbEmail = fb.querySelector('[name=email]');
  var fbMessage = fb.querySelector('[name=message]');
  var overlay = document.querySelector('.modal__overlay');

  fbOpen.addEventListener('click', function (event) {
    event.preventDefault();
    fb.classList.add('feedback--show');
    overlay.classList.add('modal__overlay--show');
    fbName.focus();
  });

  fbClose.addEventListener('click', function (event) {
    event.preventDefault();
    fb.classList.remove('feedback--show');
    fb.classList.remove('feedback--error');
    overlay.classList.remove('modal__overlay--show');
  });

  fbForm.addEventListener('submit', function (event) {
    if (!fbName.value || !fbEmail.value || !fbMessage.value) {
      event.preventDefault();
      fb.classList.remove('feedback--error');
      void (fb.offsetWidth); // Обновление анимации
      fb.classList.add('feedback--error');
    } else {
      overlay.classList.remove('modal__overlay--show');
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (fb.classList.contains('feedback--show')) {
        fb.classList.remove('feedback--show');
        fb.classList.remove('feedback--error');
        overlay.classList.remove('modal__overlay--show');
      }
    }
  });
}
