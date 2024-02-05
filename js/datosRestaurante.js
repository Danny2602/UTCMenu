function insertar() {
  var formul = document.getElementById("formulario");
  var respuesta = document.getElementById("respuesta");

  formul.addEventListener("submit", function (e) {
    e.preventDefault();

    var datos = new FormData(formul);
    var fileInput = document.getElementById("file-input");

    // Verificar si se seleccionó un archivo
    if (fileInput.files.length > 0) {
      datos.append("imagen", fileInput.files[0]);
    }

    fetch("php/insert.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresados incorrectamente");
        } else {
          console.log("datos ingresados correctamente");
          document.getElementById("formulario").reset();
        }
      });
  });
}
