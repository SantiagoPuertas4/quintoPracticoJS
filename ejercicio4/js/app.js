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
