const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');

let current = 0;
let interval;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Flechas
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Botones
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Auto
function startAutoSlide() {
  interval = setInterval(nextSlide, 25000); // ← Espera 25 segundos
}
function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}
startAutoSlide();

// === Agregar funcionalidad de arrastrar ===
let startX = 0;
let isDragging = false;

// PC: arrastrar con mouse
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const diff = startX - e.clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    resetInterval();
    isDragging = false;
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Celular: arrastrar con el dedo
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  const diff = startX - e.touches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    resetInterval();
    startX = e.touches[0].clientX; // evita múltiples cambios en un solo movimiento
  }
});
