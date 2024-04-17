const menuButton = document.querySelector(".container-header-menu-button");
const dropdown = document.querySelector(".container-header-dropdown");

menuButton.addEventListener("click", () => {
  dropdown.classList.toggle("show");

  const headerHeight = dropdown.classList.contains("show")
    ? dropdown.offsetHeight
    : 0;
  header.style.height = headerHeight + "px";
});

let swiper = new Swiper(".swiper-container", {
  loop: true, // Ativa o loop contínuo
  slidesPerView: 4, // Exibe 5 slides por vez
  spaceBetween: 20, // Espaçamento entre os slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    662: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
