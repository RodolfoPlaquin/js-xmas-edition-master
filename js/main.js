function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if(!/^[A-Za-z]+$/u.test(nombre)){
    return "Este campo solo admite letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo no debe estar vacío";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "El campo no debe estar vacío";
  }

  if (descripcionRegalo.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }

  if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
    return "Este campo solo admite letras y números";
  }
  return "";
}

function validarFormulario(e){
  const $form = document.querySelector('#carta-a-santa');
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo
  }

  manejarErrores(errores);

  e.preventDefault();
}

function manejarErrores(errores){
  const keys = Object.keys(errores);
  const $errores = document.querySelector('#errores');
  const $error = document.createElement('li');
  $error.innerHTML = "";
  let cantidadErrores = 0;

  keys.forEach(function(key){
    const error = errores[key];

    if(error){
      cantidadErrores++;
      $form[key].className = "error";

      $error.innerText = error;
      $errores.appendChild($error); 
    } else {
      $form[key].className = "";
    }
  })
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;