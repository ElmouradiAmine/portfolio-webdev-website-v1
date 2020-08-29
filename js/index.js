const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const lines = document.querySelectorAll(".hamburger .line");
const navLinks = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
  lines.forEach((line) => line.classList.toggle("open"));
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.toggle("open");
    lines.forEach((line) => line.classList.toggle("open"));
  })
);
