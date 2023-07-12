function probarValidarNombre() {
  console.assert(
    validarNombre("Nombre") === "",
    "Validar nombre no funcionó con un nombre válido"
  );

  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("3534534") === "Este campo solo admite letras",
    "Validar nombre no validó que el nombre solo tenga letras"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("Catamarca") === "",
    "ValidarCuidad no funcionó con un nombre válido "
  );

  console.assert(
    validarCiudad("") === "Este campo no debe estar vacío",
    "ValidarCiudad no validó que el campo ciudad no sea vacío"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("Descripción de regalo") === "",
    "ValidarDescripcionRegalo no funcionó con un nombre válido "
  );

  console.assert(
    validarDescripcionRegalo(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "ValidarDescripcionRegalo no validó que el nombre sea menor a 100 caracteres",
    "ValidarDescripcionRegalo no funcionó con un nombre válido "
  );

  console.assert(
    validarDescripcionRegalo("") === "Este campo no debe estar vacío",
    "ValidarDescripcionRegalo no validó que el campo descripcionRegalo no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(",.,.,") === "Este campo solo admite letras y números",
    "ValidarDescripcionRegalo no validó que el campo solo tenga letras y números"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
