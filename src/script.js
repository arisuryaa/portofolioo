const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

const typing = document.querySelector(".typing");

let typed = new Typed(typing, {
  strings: ["pelajar...", "programer...", "UI UX..."],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});

const logo = document.querySelector("#logo");
const darkMode = document.getElementById("dark");
const html = document.querySelector("html");

darkMode.addEventListener("click", function () {
  html.classList.toggle("dark");

  // const contains = html.classList.contains("dark")
  if (html.classList.contains("dark")) {
    logo.src = "/img/logo ars white.png";
    logo.classList.add("wt");
  } else {
    logo.src = "/img/logo .svg";
  }
});
