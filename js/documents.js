let docsSwiper = new Swiper(".docs-swiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  speed: 2000,
  autoplay: {
    delay: 1000,
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

// Stop swiper autoplay when mouse enters
function stopSwiping(swiperVar, elClass) {
  let demo = document.querySelector(elClass).parentElement;

  demo.addEventListener("mouseenter", () => {
    swiperVar.autoplay.stop();
  });

  demo.addEventListener("mouseleave", () => {
    swiperVar.autoplay.start();
  });
}

// making the slidesPerView property according to the screen size
function makeSlidePerView(swiperVar) {
  let mediaQueryMd = window.matchMedia(
    "(min-width: 550px) and (max-width: 768px)"
  );
  let mediaQuerySm = window.matchMedia(
    "(min-width: 400px) and (max-width: 550px)"
  );
  let mediaQueryXs = window.matchMedia("(max-width: 400px)");

  if (mediaQueryXs.matches) {
    // from 550px to 768px
    swiperVar.params.slidesPerView = 1;
    swiperVar.update();
  } else if (mediaQuerySm.matches) {
    // from 400px to 550px
    swiperVar.params.slidesPerView = 2;
    swiperVar.update();
  } else if (mediaQueryMd.matches) {
    // from 0px to 400px
    swiperVar.params.slidesPerView = 3;
    swiperVar.update();
  } else {
    // from 768px to unlimited px
    swiperVar.params.slidesPerView = 4;
    swiperVar.update();
  }
}

stopAutoplay(docsSwiper, ".docs-swiper");
stopSwiping(docsSwiper, ".docs-swiper");
makeSlidePerView(docsSwiper);
