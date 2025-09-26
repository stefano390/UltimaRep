// Seleccionamos todos los iconos
const infoIconsInline = document.querySelectorAll('.info-icon');

infoIconsInline.forEach(icon => {
  icon.addEventListener('click', () => {
    const popup = icon.nextElementSibling; // ventana dentro del mismo plan
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });
});

// Cerrar ventana con la X
const closeButtonsInline = document.querySelectorAll('.close-popup');

closeButtonsInline.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none'; // solo cierra su ventana correspondiente
  });
})

