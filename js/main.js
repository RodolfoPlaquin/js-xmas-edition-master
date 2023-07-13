function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "El nombre debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "El nombre debe tener menos de 50 caracteres";
  }

  if (!/^[A-Za-z]+$/i.test(nombre)) {
    return "El nombre solo admite letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo de ciudad no debe estar vacío";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "El campo de descripción de regalo no debe estar vacío";
  }

  if (descripcionRegalo.length >= 100) {
    return "El campo de descripción de regalo debe tener menos de 100 caracteres";
  }

  if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo de descripción de regalo solo admite letras y números";
  }
  return "";
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  $errores.innerHTML = "";
  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });
  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = function (e) {
  e.preventDefault();
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    $divMensajeEnvioExitoso = document.querySelector("#exito");
    $divMensajeEnvioExitoso.className = "";
    setTimeout(() => {
      window.location.href = "wishlist.html";
    }, 5000);
  }
};
