//hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navLink");

navLink.forEach(n => n.addEventListener("click", closeMenu))

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// form reset

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

//typing function

let message = "Front-End Web Developer"
let textPosition = 0;
let speed = 100;

function typewriter() {
  document.querySelector("#message").innerHTML = message.substring(0, textPosition) + '<span>\u25AE</span>'

  if (textPosition++ !== message.length)
  setTimeout(typewriter, speed)
}

window.addEventListener("load", typewriter)
