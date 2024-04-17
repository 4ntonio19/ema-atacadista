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

document.addEventListener("DOMContentLoaded", function () {
  // Selecionar os links no cabeçalho
  var quemSomosLink = document.getElementById("quem-somos-link");
  var parceirosLink = document.getElementById("parceiros-link");
  var contatosLink = document.getElementById("contatos-link");

  // Adicionar event listeners
  quemSomosLink.addEventListener("click", function () {
    // Rolar até a seção "Quem Somos"
    console.log("quem somos");
    document
      .getElementById("quem-somos")
      .scrollIntoView({ behavior: "smooth" });
  });

  parceirosLink.addEventListener("click", function () {
    console.log("parceiros");
    // Rolar até a seção "Parceiros"
    document.getElementById("parceiros").scrollIntoView({ behavior: "smooth" });
  });

  contatosLink.addEventListener("click", function () {
    console.log("contatos");
    // Rolar até a seção "Contatos"
    document.getElementById("contatos").scrollIntoView({ behavior: "smooth" });
  });
});
