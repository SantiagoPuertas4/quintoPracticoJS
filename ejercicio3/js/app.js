/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

import { Tarea } from "./Tarea.js";
import {
  validacionTarea,
  limpiarInput,
  cargarTabla,
  agregarTarea,
} from "./utils.js";

const $inputTarea = document.querySelector("#inputTarea");
const $btnEnviar = document.querySelector("#btnEnviar");
const $formCompleto = document.querySelector("#formCompleto");
const $tableBody = document.querySelector("#tableBody");
const $btnEliminar = document.querySelector("#btnEliminar");

$inputTarea.addEventListener("blur", () => {
  validacionTarea($inputTarea);
});

$btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validacionTarea($inputTarea)) {
    alert("Revisa los campos");
    return;
  }

  limpiarInput($inputTarea);

  const tarea = new Tarea($inputTarea.value);
  agregarTarea(tarea);
  $formCompleto.reset();

  cargarTabla($tableBody);
});

cargarTabla($tableBody);
