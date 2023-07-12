const $form = document.querySelector('#carta-a-santa');
const $nombre = $form.nombre.value;
const $ciudad = $form.ciudad.value;
const $descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo no debe estar vacío";
  }
  
  if (ciudad.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
  
  return "";
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "El campo no debe estar vacío";
  }
  
  return "";
}
