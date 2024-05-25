export const validarNumeros = ($input) => {
  if (!$input || !$input.value.trim()) {
    invalidInput($input);
    return false;
  }

  const regex = /^\d{1,2}$/;
  if (!regex.test($input.value)) {
    invalidInput($input);
    return false;
  }

  validInput($input);
  return true;
};

const validInput = ($input) => {
  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
};

const invalidInput = ($input) => {
  $input.classList.add("is-invalid");
  $input.classList.remove("is-valid");
};

export const limpiarInput = ($input) => {
  $input.classList.remove("is-invalid");
  $input.classList.remove("is-valid");
};

export const dibujado = ($input, valor) => {
  if (valor < 10) {
    $input.textContent = "0" + valor;
    return;
  }

  $input.textContent = valor;
  return;
};
