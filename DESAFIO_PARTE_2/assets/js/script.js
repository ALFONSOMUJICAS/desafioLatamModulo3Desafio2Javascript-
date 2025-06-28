// Espera a que el contenido del documento se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el botón
  const boton = document.querySelector("button");

  // Agrega evento al hacer clic en el botón
  boton.addEventListener("click", function () {
    // Obtiene el valor numérico de cada input, usa 0 si el valor está vacío o es inválido
    const valor1 = parseInt(document.getElementById("sticker1").value) || 0;
    const valor2 = parseInt(document.getElementById("sticker2").value) || 0;
    const valor3 = parseInt(document.getElementById("sticker3").value) || 0;

    // Suma los stickers seleccionados
    const total = valor1 + valor2 + valor3;

    // Selecciona el párrafo donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

    // Si la suma es 10 o menos, muestra cuántos stickers lleva
    if (total <= 10) {
      resultado.textContent = `Llevas ${total} stickers`;
    } else {
      // Si la suma es mayor a 10, muestra advertencia
      resultado.textContent = "Llevas demasiados stickers";
    }
  });
});
