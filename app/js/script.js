const hamMenu = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has-fade");
// console.log(header);

hamMenu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeElems.forEach((elem) => {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
        
      });
  } else {
    header.classList.add("open");
    body.classList.add("no-scroll");
    fadeElems.forEach((elem) => {
      elem.classList.add("fade-in");
      elem.classList.remove("fade-out");
    });
  }
});
