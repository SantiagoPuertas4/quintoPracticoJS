export const validacionTarea = ($input) => {
  if (!$input || !$input.value.trim()) {
    invalidInput($input);
    return false;
  }

  if ($input.value.trim().length < 1 || $input.value.trim().length > 2000) {
    invalidInput($input);
    return false;
  }

  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ0-9.,@()\-\s]+$/;
  if (!regex.test($input.value)) {
    invalidInput($input);
    return false;
  }

  validInput($input);
  return true;
};

export const limpiarInput = ($input) => {
  $input.classList.remove("is-invalid");
  $input.classList.remove("is-valid");
};

const validInput = ($input) => {
  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
};

const invalidInput = ($input) => {
  $input.classList.add("is-invalid");
  $input.classList.remove("is-valid");
};

export const obtenerTareasDeLS = () => {
  return JSON.parse(localStorage.getItem("tareas")) || [];
};

export const agregarTarea = (tarea) => {
  const tareas = obtenerTareasDeLS();

  tareas.push(tarea);

  localStorage.setItem("tareas", JSON.stringify(tareas));
};

export const cargarTabla = ($table) => {
  const arreglo = obtenerTareasDeLS();
  let tamanio = arreglo.length;

  $table.textContent = "";

  for (let i = 0; i < tamanio; i++) {
    const $tr = document.createElement("tr");

    const $tdTarea = document.createElement("td");
    const $pTarea = document.createElement("p");
    $pTarea.textContent = `${arreglo[i].tarea}`;
    $tdTarea.appendChild($pTarea);
    $tr.appendChild($tdTarea);

    const $tdBoton = document.createElement("td");
    $tdBoton.classList.add("d-flex", "column-gap-1", "flex-wrap");
    const $btnEliminar = document.createElement("button");
    $btnEliminar.id = "btnEliminar";
    $btnEliminar.classList.add("br-4", "btn", "my-3", "mt-3", "btn-danger");
    $btnEliminar.textContent = "Eliminar";
    $btnEliminar.onclick = () => {
      eliminarTarea(arreglo[i].codigo);
      cargarTabla($table);
    };
    $tdBoton.appendChild($btnEliminar);

    $tr.appendChild($tdTarea);
    $tr.appendChild($tdBoton);

    $table.appendChild($tr);
  }
};

const eliminarTarea = (codigo) => {
  const tareas = obtenerTareasDeLS();
  const nuevasTareas = tareas.filter((tarea) => {
    return tarea.codigo !== codigo;
  });
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
};
