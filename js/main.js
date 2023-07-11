const $nombre = document.querySelector("[name=nombre]");
const $ciudades = document.querySelector("[name=ciudad]");
const $descripcionRegalo = document.querySelector("[name=descripcion-regalo]");

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
  return "";
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "El campo no debe estar vacío";
  }
  return "";
}
