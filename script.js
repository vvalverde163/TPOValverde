document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contacto")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  let nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("No has escrito nada en el nombre");
    return;
  }
  let edad = document.getElementById("edad").value;
  console.log(edad);
  if (edad < 0) {
    alert("El valor de la edad debe ser mayor a 0");
    return;
  }
  if (edad < 18) {
    alert("Debe ser mayor de 18 años para hacer esta petición");
    return;
  }
  let celular = document.getElementById("celular").value;
  if (celular.length < 9) {
    alert(
      "El celular ingresado no es valido. Por favor escribalo nuevamente"
    );
    return;
  }
  alert('¡Su formulario ha sido enviado con éxito!')
  this.submit();
}
