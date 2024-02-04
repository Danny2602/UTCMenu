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
        if (data === "US") {
          window.location.href = "clienteVerRestaurantes.html";
        }
        if (data === "RE") {
          window.location.href = "agregarMenu.html";
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
          document.getElementById("registrar").reset();
          console.log("datos ingresado");
        }
      });
  });
}
