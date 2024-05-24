export const validacionNombre = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  if ($input.value.trim().length < 8 || $input.value.trim().length > 50) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};

export const validacionEdad = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^\d{1,2}$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};

export const validacionDNI = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^\d{8}$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};

export const validacionSexo = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^[HhMm]$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};

export const validacionPeso = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^(?:[1-9]?[0-9]|[1-2][0-9]{2}|300)$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};

export const validacionAltura = ($input) => {
  if (!$input || !$input.value.trim()) {
    $input.classList.remove("is-valid");
    $input.classList.add("is-invalid");
    return false;
  }

  const regex = /^(5[0-9]|[6-9][0-9]|1[0-9]{2}|2[0-9]{2}|300)$/;
  if (!regex.test($input.value)) {
    $input.classList.add("is-invalid");
    $input.classList.remove("is-valid");
    return false;
  }

  $input.classList.remove("is-invalid");
  $input.classList.add("is-valid");
  return true;
};
