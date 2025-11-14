function calcularResultado() {
  let total = 0;

  // Contar correctamente de la 1 a la 11
  for (let i = 1; i <= 11; i++) {
    const respuesta = document.querySelector(`input[name="q${i}"]:checked`);
    if (respuesta && respuesta.value === "1") {
      total++;
    }
  }

  // Mostrar resultado
  document.getElementById("resultado").textContent =
    `Tu resultado es: ${total} de 11 respuestas correctas.`;

  // Poner la calificación en el campo de texto (máx 10)
  document.getElementById("cal").value = total > 10 ? 10 : total;
}

// Autocompletar el nombre seleccionado en el campo de texto
window.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('eleccionDeNombre');
  const texto = document.getElementById('texto');

  selector.addEventListener('change', () => {
    texto.value = selector.value;
  });
});
