const emailLink = document.getElementById('emailLink');

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
  // Intentar abrir Gmail directamente si está disponible
  // pero, si no lo está, usará la aplicación de correo predeterminada
  emailLink.href = "mailto:ultimarep.entrenamiento@gmail.com?subject=Consulta%20UltimaRep";
  emailLink.target = "_self"; // abrir en la misma ventana
}
