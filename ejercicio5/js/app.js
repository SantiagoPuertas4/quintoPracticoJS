/* 
5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/

let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;
let intervaloActualizacion;

const $btnIniciar = document.querySelector("#btnIniciar");
const $btnPausar = document.querySelector("#btnPausar");
const $btnReanudar = document.querySelector("#btnReanudar");
const $btnReiniciar = document.querySelector("#btnReiniciar");

const $horaCronometro = document.querySelector("#horaCronometro");
const $minutoCronometro = document.querySelector("#minutoCronometro");
const $segundoCronometro = document.querySelector("#segundoCronometro");
const $centesimaCronometro = document.querySelector("#centesimaCronometro");

$btnIniciar.addEventListener("click", () => {
  intervaloActualizacion = setInterval(cronometro, 1);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = false;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = false;
});

$btnPausar.addEventListener("click", () => {
  clearInterval(intervaloActualizacion);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = true;
  $btnReanudar.disabled = false;
  $btnReiniciar.disabled = false;
});

$btnReanudar.addEventListener("click", () => {
  intervaloActualizacion = setInterval(cronometro, 1);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = false;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = false;
});

$btnReiniciar.addEventListener("click", () => {
  clearInterval(intervaloActualizacion);
  horas = 0;
  minutos = 0;
  segundos = 0;
  centesimas = 0;
  $horaCronometro.textContent = "00";
  $minutoCronometro.textContent = "00";
  $segundoCronometro.textContent = "00";
  $centesimaCronometro.textContent = "00";
  $btnIniciar.disabled = false;
  $btnPausar.disabled = true;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = true;
});

function cronometro() {
  if (centesimas <= 98) {
    centesimas++;
    if (centesimas < 10) {
      centesimas = "0" + centesimas;
    }
    $centesimaCronometro.textContent = centesimas;
  }
  if (centesimas === 99) {
    segundos++;
    centesimas = "0" + 0;
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    $segundoCronometro.textContent = segundos;
    $centesimaCronometro.textContent = centesimas;
  }
  if (segundos === 60) {
    minutos++;
    segundos = "0" + 0;
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    $minutoCronometro.textContent = minutos;
    $segundoCronometro.textContent = segundos;
  }
  if (minutos === 60) {
    horas++;
    minutos = "0" + 0;
    if (horas < 10) {
      horas = "0" + horas;
    }
    $horaCronometro.textContent = horas;
    $minutoCronometro.textContent = minutos;
  }
}
