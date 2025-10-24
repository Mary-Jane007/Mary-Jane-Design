
console.log("script loaded");
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");



function showSlide(index) {
 slides.forEach(slide=> slide.classList.remove("active"));
  slides[index].classList.add("active");
}

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

setInterval ( () => {
  currentIndex= (currentIndex + 1) % slides.length;
  showSlide (currentIndex);
}, 4000);