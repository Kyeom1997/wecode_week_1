// function about scroll smoothly
function scrollIntoView(e) {
  const scrollTo = document.querySelector(e);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
}

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Show "arrow up" button when scrolling down
const home = document.querySelector("#header");
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#header");
});

// Show "Subnav" when scrolling down
const navbar = document.querySelector("#subnav");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});

const subnavbarMenu = document.querySelector(".sub_navbar_menu");
subnavbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  subnavbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Header Typing
const content = "안녕하세요, 프론트엔드 개발자를 꿈꾸는 김형겸입니다.";
const text = document.querySelector(".header_typing_txt");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}

setInterval(typing, 250);
