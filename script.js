document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contacto")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  var nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("No has escrito nada en el nombre");
    return;
  }
  var edad = document.getElementById("edad");
  if (edad.length < 18) {
    alert("Debe ser mayor de 18 años para hacer esta petición");
  }
  var celular = document.getElementById("celular").value;
  if (celular.length < 9) {
    alert(
      "El celular indicado no corresponde. Favor escribalo con codigo de área"
    );
    return;
  }
  this.submit();
}
