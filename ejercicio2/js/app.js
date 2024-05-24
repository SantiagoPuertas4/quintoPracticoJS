/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */
import { Persona } from "./Persona.js";
import {
  validacionNombre,
  validacionEdad,
  validacionDNI,
  validacionSexo,
  validacionPeso,
  validacionAltura,
} from "./utils.js";

let personaCreada = false;

const $formCompleto = document.querySelector("#formCompleto");
const $inputNombre = document.querySelector("#inputNombre");
const $inputEdad = document.querySelector("#inputEdad");
const $inputDNI = document.querySelector("#inputDNI");
const $inputSexo = document.querySelector("#inputSexo");
const $inputPeso = document.querySelector("#inputPeso");
const $inputAltura = document.querySelector("#inputAltura");
const $btnEnviar = document.querySelector("#btnEnviar");
const $btnGeneracion = document.querySelector("#btnGeneracion");
const $btnMayor = document.querySelector("#btnMayor");
const $btnDatos = document.querySelector("#btnDatos");
const $btnBorrado = document.querySelector("#btnBorrado");
const persona = new Persona();

$inputNombre.addEventListener("blur", () => {
  validacionNombre($inputNombre);
});
$inputEdad.addEventListener("blur", () => {
  validacionEdad($inputEdad);
});
$inputDNI.addEventListener("blur", () => {
  validacionDNI($inputDNI);
});
$inputSexo.addEventListener("blur", () => {
  validacionSexo($inputSexo);
});
$inputPeso.addEventListener("blur", () => {
  validacionPeso($inputPeso);
});
$inputAltura.addEventListener("blur", () => {
  validacionAltura($inputAltura);
});

const crearPersona = (nombre, edad, dni, sexo, peso, altura) => {
  persona.setNombre(nombre);
  persona.setEdad(edad);
  persona.setDNI(dni);
  persona.setSexo(sexo);
  persona.setPeso(peso);
  persona.setAltura(altura);
};

$btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !validacionNombre($inputNombre) ||
    !validacionEdad($inputEdad) ||
    !validacionDNI($inputDNI) ||
    !validacionSexo($inputSexo) ||
    !validacionPeso($inputPeso) ||
    !validacionAltura($inputAltura)
  ) {
    alert("Revisa los datos");
    return;
  }

  let nombre = $inputNombre.value;
  let edad = $inputEdad.value;
  let dni = $inputDNI.value;
  let sexo = $inputSexo.value;
  let peso = $inputPeso.value;
  let altura = $inputAltura.value;

  if (!personaCreada) {
    crearPersona(nombre, edad, dni, sexo, peso, altura);
    personaCreada = true;
    $btnGeneracion.disabled = false;
    $btnMayor.disabled = false;
    $btnDatos.disabled = false;
    $btnBorrado.disabled = false;
    $btnEnviar.disabled = true;
    $formCompleto.reset();
  }
});

$btnGeneracion.addEventListener("click", (event) => {
  event.preventDefault();
  persona.mostrarGeneracion();
});
$btnMayor.addEventListener("click", (event) => {
  event.preventDefault();
  persona.esMayorDeEdad();
});
$btnDatos.addEventListener("click", (event) => {
  event.preventDefault();
  persona.mostrarDatos();
});
$btnBorrado.addEventListener("click", (event) => {
  event.preventDefault();
  personaCreada = false;
  $btnGeneracion.disabled = true;
  $btnMayor.disabled = true;
  $btnDatos.disabled = true;
  $btnBorrado.disabled = true;
  $btnEnviar.disabled = false;
  alert("Persona borrada");
});
