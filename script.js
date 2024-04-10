const configBg = document.querySelector(".configs");
const configBtn = document.querySelector(".settings");

configBtn.addEventListener("click", function () {
  const isOpen = configBg.classList.contains("open");
  if (isOpen) {
    configBg.classList.remove("open");
    configBtn.classList.remove("btn-active");
  } else {
    configBg.classList.add("open");
    configBtn.classList.add("btn-active");
  }
});

const configBg2 = document.querySelector(".configs2");
const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  const isOpen = configBg2.classList.contains("open2");
  if (isOpen) {
    configBg2.classList.remove("open2");
    logo.classList.remove("btn-active");
  } else {
    configBg2.classList.add("open2");
    // logo.classList.add("btn-active");
  }
});

///////////////
let theme_toggler = document.querySelector("#tema");

theme_toggler.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
