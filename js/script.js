let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
    menu.style.transition = 'visibility 0.3s ease-in-out, transform 0.3s ease-in-out';

    document.body.classList.toggle('stop-scroll');
  })

  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('header__nav--active'))
      menu.removeAttribute('style');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('cross');
})

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})


const container = document.querySelector(".container")
const swiper = new Swiper('.swiper-container', {

  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  effect: 'fade',
})


let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.tabsPath;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn--active')});
    e.currentTarget.classList.add('tabs__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-tabs-target=${path}]`).classList.add('tabs__item--active');
  });
});

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


