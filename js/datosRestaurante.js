function insertar() {
  var formul = document.getElementById("formulario");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    console.log(datos.get("nombre"));
    fetch("php/insert.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresado maaaal");
        } else {
          console.log("datos ingresado");
        }
      });
  });
}
