// En menu.js

function insertarmenus() {
  var formul = document.getElementById("menuFormulario");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    console.log(datos.get("nombre"));
    fetch("php/insert/insertarMenu.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresado maaaal");
        } else {
          console.log("datos ingresado");
          document.getElementById("menuFormulario").reset();
        }
      });
  });
}

window.onload = function () {
  selecionarMenu();
};

function selecionarMenu() {
  // Hacer una solicitud HTTP a tu servidor para obtener los datos
  fetch("php/select/selectMenu.php")
    .then((response) => response.json())
    .then((data) => {
      // Obtener el menú desplegable
      console.log(data);
      const menu = document.getElementById("menu");

      // Llenar el menú desplegable con los datos obtenidos
      data.forEach((item) => {
        const option = document.createElement("option");

        option.text = item.platoNom;
        menu.appendChild(option);
      });
    });
}
function datos() {
  var sel = document.getElementById("menu").value;

  // Utilizar fetch para realizar la solicitud POST
  fetch("php/select/selectMenuIndi.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "menu=" + encodeURIComponent(sel),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        // Actualizar los campos de entrada con los datos recibidos
        document.getElementById("precio").value = data.platoprec;
        document.getElementById("estado").value = data.platoest;
      } else {
        // Manejar el caso en que no haya datos
        console.log("No se encontraron datos para el menú seleccionado.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function actualizar() {
  var formul = document.getElementById("actualizarDatos");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    console.log(datos.get("menu"));
    fetch("php/update/updateMenu.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos mal actualizados");
        } else {
          console.log("datos actualizados");
          document.getElementById("actualizarDatos").reset();
        }
      });
  });
}
