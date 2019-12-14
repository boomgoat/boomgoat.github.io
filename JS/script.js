function toggle() {
  var hamburger = document.getElementById("nav-toggle");
  var menu = document.getElementById("side-bar");
  var overlay = document.getElementById("menu-overlay");
  hamburger.classList.toggle("rotate");
  hamburger.classList.toggle("toggle-active");
  menu.classList.toggle("slide");
  overlay.classList.toggle("overlay-fadeIn");
}

const mq = window.matchMedia( "(min-width: 780px)" );
