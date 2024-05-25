/* 4- Crear una web con un reloj */

const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const mes = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

setInterval(() => {
  const fechaActual = new Date();
  const $fecha = document.querySelector("#fecha");
  $fecha.textContent = "";
  const $p = document.createElement("p");
  $p.textContent = `${
    semana[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    mes[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;
  $fecha.appendChild($p);

  let hora = "";
  let minuto = "";
  let segundo = "";

  hora = fechaActual.getHours();
  minuto = fechaActual.getMinutes();
  segundo = fechaActual.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }

  const $horas = document.querySelector("#horas");
  $horas.textContent = "";
  const $p2 = document.createElement("p");
  $p2.textContent = `\n${hora}:${minuto}:${segundo}`;
  $horas.appendChild($p2);
}, 1000);
/*
setInterval(() => {
  let semanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  let fechaReloj = document.getElementById("fecha");
  fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  // arreglar los valores de un digito
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let horas = fecha.getHours();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  let horaReloj = document.querySelector("#hora");
  horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);
*/
