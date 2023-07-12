function probarValidarNombre() {
  console.assert(
    validarNombre("") === "El nombre debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "El nombre debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Nombre") === "",
    "Validar nombre no funcionó con un nombre válido"
  );

  console.assert(
    validarNombre("3534534") === "Este campo solo admite letras",
    "Validar nombre no validó que el nombre solo tenga letras"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "El campo ciudad no debe estar vacío",
    "ValidarCiudad no validó que el campo ciudad no sea vacío"
  );

  console.assert(
    validarCiudad("Buenos Aires") === "",
    "ValidarCiudad no funcionó con un nombre de ciudad válido "
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "La descripcion del regalo debe tener menos de 100 caracteres",
    "ValidarDescripcionRegalo no funcionó con un nombre válido "
  );

  console.assert(
    validarDescripcionRegalo("") ===
      "El campo de la descripción de regalo no debe estar vacío",
    "ValidarDescripcionRegalo no validó que el campo descripcion de regalo no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(",.,.,") ===
      "La descripción de regalo solo admite letras y números",
    "ValidarDescripcionRegalo no validó que el campo solo tenga letras y números"
  );
  console.assert(
    validarDescripcionRegalo("Descripcion de regalo") === "",
    "ValidarDescripcionRegalo no funcionó con un nombre válido "
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
