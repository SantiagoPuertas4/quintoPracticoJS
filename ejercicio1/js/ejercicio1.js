/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

let numeroMagico;
let generado = false;

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

const $btnGenerar = document.querySelector("#btnGenerar");
const $btnEnviar = document.querySelector("#btnEnviar");
const $inputNumero = document.querySelector("#inputNumero");
const $formCompleto = document.querySelector("#formCompleto");
const $infoJuego = document.querySelector("#infoJuego");
const $p = document.createElement("p");

$btnGenerar.addEventListener("click", () => {
  numeroMagico = generarNumeroAleatorio();

  $inputNumero.classList.remove("d-none");
  $btnEnviar.classList.remove("d-none");
  $formCompleto.classList.remove("d-none");

  $p.textContent = "Numero Magico Generado";
  $p.classList.add("mt-3", "px-3");
  if (!generado) {
    $infoJuego.appendChild($p);
  }
  generado = true;
});

$btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (!$inputNumero.value || !$inputNumero.value.trim()) {
    $p.textContent = "No ingreso nada";
  }

  if (isNaN($inputNumero.value)) {
    $p.textContent = "No ingreso un numero";
    return;
  }

  if (numeroMagico < $inputNumero.value) {
    $p.textContent = "El numero generado es MENOR";
    return;
  }

  if (numeroMagico > $inputNumero.value) {
    $p.textContent = "El numero generado es MAYOR";
    return;
  }

  $p.textContent = "Adivinaste el numero magico. Felicidades!";
  return;
});
