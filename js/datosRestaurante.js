function insertar() {
  var formul = document.getElementById("formulario");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas si");
    var datos = new FormData(formul);
    console.log(datos.get("horario1"));
    fetch("php/insert.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresado mal");
        } else {
          console.log("datos ingresado");
          document.getElementById("formulario").reset();
        }
      });
  });
}
