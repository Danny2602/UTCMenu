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
        } else {
          window.location.href = "registrarRestaurante.html";
        }
      });
  });
}
