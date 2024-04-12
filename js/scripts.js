const menuButton = document.querySelector(".container-header-menu-button");
const dropdown = document.querySelector(".container-header-dropdown");

menuButton.addEventListener("click", () => {
  dropdown.classList.toggle("show");

  const headerHeight = dropdown.classList.contains("show")
    ? dropdown.offsetHeight
    : 0;
  header.style.height = headerHeight + "px";
});
