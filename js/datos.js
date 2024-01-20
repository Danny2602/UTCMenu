function comparar() {
  var formul = document.getElementById("formulario");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    fetch("php/select.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          respuesta.innerHTML = ` 
                <div class="alert alert-primary" role="alert">
                    Usuario no existe
                </div>
                `;
        }
        if (data === "1") {
          window.location.href = "registrarRestaurante.html";
        }
        if (data === "CL") {
          window.location.href = "verRestaurantes.html";
        }
      });
  });
}
function insertarcliente() {
  var formul = document.getElementById("registrar");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    console.log(datos.get("nombre"));
    fetch("php/insert/insertarCliente.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresado maaaal");
        } else {
          window.location.href = "index.html";
          console.log("datos ingresado");
        }
      });
  });
}
