const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const lines = document.querySelectorAll(".hamburger .line");
const navLinks = document.querySelectorAll(".nav__item");
const faders = document.querySelectorAll(".fade-in");
const fromLeft = document.querySelectorAll(".from-left");
const fromRight = document.querySelectorAll(".from-right");

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

const options = {
  threshold: 0.5,
  rootMargin:  "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

fromLeft.forEach((item) => {
  appearOnScroll.observe(item);
});

fromRight.forEach((item) => {
  appearOnScroll.observe(item);
});
