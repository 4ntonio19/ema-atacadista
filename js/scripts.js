const menuButton = document.querySelector(".container-header-menu-button");
const dropdown = document.querySelector(".container-header-dropdown");

menuButton.addEventListener("click", () => {
  dropdown.classList.toggle("show");

  const headerHeight = dropdown.classList.contains("show")
    ? dropdown.offsetHeight
    : 0;
  header.style.height = headerHeight + "px";
});

// let index = 0;
// const carouselContent = document.querySelector(".section-parceiros-carrousel");
// const cards = document.querySelectorAll(".card");

// function showSlide(i) {
//   index = i;
//   if (index < 0) {
//     index = cards.length - 1;
//   } else if (index >= cards.length) {
//     index = 0;
//   }
//   const cardWidth = cards[0].offsetWidth;
//   const offset =
//     -index * (cardWidth + parseInt(getComputedStyle(cards[0]).marginRight));
//   carouselContent.style.transform = `translateX(${offset}px)`;
// }

// function nextSlide() {
//   showSlide(index + 1);
// }

// function prevSlide() {
//   showSlide(index - 1);
// }

// setInterval(nextSlide, 5000);

// Inicialize o carrossel Swiper com configurações de loop contínuo
// import Swiper from "swiper";

// const swiperCarousel = new Swiper(".swiper-container", {
//   loop: true, // Ativa o loop contínuo
//   slidesPerView: 5, // Exibe 5 slides por vez
//   spaceBetween: 20, // Espaçamento entre os slides
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 5000,
//   },
// });
