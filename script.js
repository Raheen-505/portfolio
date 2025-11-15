const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});






const track = document.getElementById("testimonial-track");
const dots = document.querySelectorAll(".slider-dot");
let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;}
