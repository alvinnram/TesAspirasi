const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Ganti gambar setiap 2 detik
setInterval(nextSlide, 2000);
