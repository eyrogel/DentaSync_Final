document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const navbarSticky = document.getElementById("navbar-sticky");
    if (navbarSticky.classList.contains("hidden")) {
      navbarSticky.classList.remove("hidden");
    } else {
      navbarSticky.classList.add("hidden");
    }
  });
  const new_swiper = new Swiper('#mySwiper1', {
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  coverflowEffect: {
    rotate: 30,  // Less extreme rotation
    stretch: 0,
    depth: 50,  // Reduced depth
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.6,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1280: {
      centeredSlides:false,
      slidesPerView: 2.2,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1440: {
      centeredSlides:false,
      slidesPerView: 2.5,
      spaceBetween: 5,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1600: {
      centeredSlides:false,
      slidesPerView: 2.9,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  }
});
function scrollToSection(mobileSectionId, desktopSectionId) {
      if (window.innerWidth <= 1920) {
        document.getElementById(mobileSectionId).scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById(desktopSectionId).scrollIntoView({ behavior: 'smooth' });
      }
    }
  
  
