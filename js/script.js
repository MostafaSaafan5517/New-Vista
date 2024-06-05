// AOS library
AOS.init({
  duration: 1000,
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

// Header
let services = document.querySelector(".services");
let dropdown = document.querySelector(".dropdown");

let documentClickHandler = (e) => {
  if (!services.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
    document.removeEventListener("click", documentClickHandler);
  }
};

services.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display = "block";
  document.addEventListener("click", documentClickHandler);
});

// Switch active class
let ulLinks = document.querySelectorAll("header ul li a");

ulLinks.forEach((a) => {
  a.addEventListener("click", () => {
    ulLinks.forEach((a) => {
      a.classList.remove("active");
    });
    a.classList.add("active");
  });
});

// Landing Swiper
let landSwiper = new Swiper(".land-swiper", {
  slidesPerView: 4,
  grabCursor: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 1000,
  },
});

stopAutoplay(landSwiper, ".land-swiper");
stopSwiping(landSwiper, ".land-swiper");

// Match media query for the landing swiper
let mediaQuery = window.matchMedia("(max-width: 500px)");

if (mediaQuery.matches) {
  // from 0px to 500px
  landSwiper.params.slidesPerView = 1;
  landSwiper.update();
} else {
  // from 500px to unlimited px
  landSwiper.params.slidesPerView = 4;
  landSwiper.update();
}

// Recommendations Swiper
let recSwiper = new Swiper(".rec-swiper", {
  initialSlide: 2,
  effect: "cards",
  grabCursor: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".rec-swiper .swiper-pagination",
    dynamicBullets: true,
  },
});

stopAutoplay(recSwiper, ".rec-swiper");

// Footer
let currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();
