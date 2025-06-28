// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene una referencia al elemento de la imagen por su ID
  const imagen = document.getElementById("miImagen");

  // Agrega un evento al hacer clic en la imagen
  imagen.addEventListener("click", function () {
    // Si la imagen ya tiene la clase 'borde-rojo', se la quita.
    // Si no la tiene, se la agrega.
    if (imagen.classList.contains("borde-rojo")) {
      imagen.classList.remove("borde-rojo");
    } else {
      imagen.classList.add("borde-rojo");
    }
  });
});
