// Agregar opciones del 1 al 9 a cada select
for (let i = 1; i <= 9; i++) {
  document.getElementById(
    "dig1"
  ).innerHTML += `<option value="${i}">${i}</option>`;
  document.getElementById(
    "dig2"
  ).innerHTML += `<option value="${i}">${i}</option>`;
  document.getElementById(
    "dig3"
  ).innerHTML += `<option value="${i}">${i}</option>`;
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnIngresar");

  boton.addEventListener("click", () => {
    const d1 = document.getElementById("dig1").value;
    const d2 = document.getElementById("dig2").value;
    const d3 = document.getElementById("dig3").value;

    const password = d1 + d2 + d3;
    const resultado = document.getElementById("resultado");

    if (password === "911") {
      resultado.textContent = "password 1 correcto";
    } else if (password === "714") {
      resultado.textContent = "password 2 es correcto";
    } else {
      resultado.textContent = "password incorrecto";
    }
  });
});
