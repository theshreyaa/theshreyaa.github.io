const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// animation in the qualifications section

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => {
  observer.observe(element);
});

//scroll active link

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

//show scroll top

function scrollUp() {
  const scrollTop = document.getElementById("scrollup");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

//change theme

// while (toggleTheme) {
//   if (toggleTheme) {
//     document.body.classList.toggle("dark-theme");
//     themeButton.classList.toggle("active");
//     circle.classList.toggle("dark");
//   }

//   toggleTheme = !toggleTheme;
// }

const themeButton = document.getElementById("theme-button");
const circle = document.querySelector("#theme-button .circle");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("active");
  circle.classList.toggle("dark");
});
document.body.classList.add("dark-theme");
themeButton.classList.toggle("active");
