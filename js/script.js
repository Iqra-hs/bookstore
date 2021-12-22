// search form

searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

// login form

loginForm = document.querySelector(".login-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

loginForm = document.querySelector(".login-container");

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

// // theme design js

// let themeToggler = document.querySelector('.theme-toggler');

// themeToggler.onclick = () => {
//   themeToggler.classList.toggle('active');

//   if(themeToggler.classList.contains('active')){
//     document.body.classList.add('active');
//     }
//     else{
//       document.body.classList.remove('active');
//     }
// }

// document.querySelector('.theme-colors .color').forEach(color => {

//   color.onclick = () =>{
//     let background = color.style.background;

//     document.querySelector(':root').style.setProperty(' --blue', background);
//   }
  
// });


// home slider js

var swiper = new Swiper(".book-slider", {
  loop: true,
  centeredslides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// featured  slider js

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredslides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// arrival  slider js

var swiper = new Swiper(".arrival-slider", {
  loop: true,
  spaceBetween:10,
  centeredslides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// review slider

var swiper = new Swiper(".review-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// blog slider

var swiper = new Swiper(".blog-slider", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  fadeOut();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 4000);
}
