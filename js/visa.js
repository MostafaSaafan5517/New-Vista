// Schengen Swiper
let schengenSwiper = new Swiper(".schengen-swiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
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

stopAutoplay(schengenSwiper, ".schengen-swiper");
stopSwiping(schengenSwiper, ".schengen-swiper");

makeSlidePerView(schengenSwiper);

// display visa options according to destination
let destination = document.querySelector("#destination");
let destOptions = Array.from(document.querySelector("#destination"));
let visaType = document.querySelector("#visa-type");
let visaOptions = document.querySelectorAll("#visa-type option");

destination.addEventListener("change", () => {
  if (visaType.value != destination.value) {
    visaType.value = visaOptions[0].value;
  }

  let dest;
  destOptions.forEach((option) => {
    if (option.value == destination.value) {
      dest = option.classList.value;
    }

    visaOptions.forEach((opt) => {
      if (opt.classList.value == dest) {
        opt.style.display = "block";
      } else {
        opt.style.display = "none";
      }
    });
  });
});
