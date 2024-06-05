// Hotels Swiper
let embassySwiper = new Swiper(".embassy-swiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  coverflowEffect: {
    rotate: -30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Stop swiper autoplay when scrolling down
function stopAutoplay(swiperVar, elClass) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        swiperVar.autoplay.start();
      } else {
        swiperVar.autoplay.stop();
      }
    });
  });

  observer.observe(document.querySelector(elClass));
}

stopAutoplay(embassySwiper, ".embassy-swiper");
