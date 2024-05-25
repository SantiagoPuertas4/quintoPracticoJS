/* 
6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
 */

import { validarNumeros, dibujado, limpiarInput } from "./utils.js";

const $horaCronometro = document.querySelector("#horaCronometro");
const $minutoCronometro = document.querySelector("#minutoCronometro");
const $segundoCronometro = document.querySelector("#segundoCronometro");

const $formCompleto = document.querySelector("#formCompleto");

const $mensajeTemporizador = document.querySelector("#mensajeTemporizador");

const $btnEnviar = document.querySelector("#btnEnviar");
const $btnIniciar = document.querySelector("#btnIniciar");
const $btnPausar = document.querySelector("#btnPausar");
const $btnReanudar = document.querySelector("#btnReanudar");
const $btnReiniciar = document.querySelector("#btnReiniciar");

const $inputHoras = document.querySelector("#inputHoras");
const $inputMinutos = document.querySelector("#inputMinutos");
const $inputSegundos = document.querySelector("#inputSegundos");

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervaloTemporizador;

$inputHoras.addEventListener("blur", (event) => {
  event.preventDefault();
  validarNumeros($inputHoras);
});
$inputMinutos.addEventListener("blur", (event) => {
  event.preventDefault();
  validarNumeros($inputMinutos);
});
$inputSegundos.addEventListener("blur", (event) => {
  event.preventDefault();
  validarNumeros($inputSegundos);
});

$btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !validarNumeros($inputHoras) ||
    !validarNumeros($inputMinutos) ||
    !validarNumeros($inputSegundos)
  ) {
    alert("Revisa los campos ingresados");
    return;
  }

  clearInterval(intervaloTemporizador);

  horas = $inputHoras.value;
  minutos = $inputMinutos.value;
  segundos = $inputSegundos.value;
  dibujado($horaCronometro, horas);
  dibujado($minutoCronometro, minutos);
  dibujado($segundoCronometro, segundos);

  $btnIniciar.disabled = false;
  $btnPausar.disabled = true;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = true;

  limpiarInput($inputHoras);
  limpiarInput($inputMinutos);
  limpiarInput($inputSegundos);

  $formCompleto.reset();
  return;
});

$btnIniciar.addEventListener("click", () => {
  intervaloTemporizador = setInterval(cronometro, 1000);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = false;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = false;
});

$btnPausar.addEventListener("click", () => {
  clearInterval(intervaloTemporizador);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = true;
  $btnReanudar.disabled = false;
  $btnReiniciar.disabled = false;
});

$btnReanudar.addEventListener("click", () => {
  intervaloTemporizador = setInterval(cronometro, 1000);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = false;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = false;
});

$btnReiniciar.addEventListener("click", () => {
  clearInterval(intervaloTemporizador);
  horas = 0;
  minutos = 0;
  segundos = 0;
  dibujado($horaCronometro, horas);
  dibujado($minutoCronometro, minutos);
  dibujado($segundoCronometro, segundos);
  $btnIniciar.disabled = true;
  $btnPausar.disabled = true;
  $btnReanudar.disabled = true;
  $btnReiniciar.disabled = true;
});

function cronometro() {
  if (segundos >= 1) {
    segundos--;
    dibujado($segundoCronometro, segundos);
    return;
  }
  if (minutos >= 1) {
    minutos--;
    segundos = 59;
    dibujado($minutoCronometro, minutos);
    dibujado($segundoCronometro, segundos);
    return;
  }

  if (horas >= 1) {
    horas--;
    minutos = 59;
    segundos = 59;
    dibujado($horaCronometro, horas);
    dibujado($minutoCronometro, minutos);
    dibujado($segundoCronometro, segundos);
    return;
  }

  $mensajeTemporizador.classList.remove("d-none");
  return;
}
