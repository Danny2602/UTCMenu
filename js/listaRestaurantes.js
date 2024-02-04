window.onload = function () {
  selecionarRestaurante();
};

$(document).ready(function () {
  $.ajax({
    url: "php/select/selectRestaurante.php",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, dato) {
        $("#tabla-restaurantes").append(
          "<tr><td>" +
            dato.id_res +
            "</td><td>" +
            dato.nombre_res +
            "</td><td>" +
            dato.ubi_res +
            "</td><td>" +
            dato.desc_res +
            "</td><td>" +
            dato.hora_res +
            "</td></tr>"
        );
      });
    },
  });
});

function selecionarRestaurante() {
  // Hacer una solicitud HTTP a tu servidor para obtener los datos
  fetch("php/select/selectRestaurante.php")
    .then((response) => response.json())
    .then((data) => {
      // Obtener el menú desplegable
      console.log(data);
      const restaurante = document.getElementById("restaurante");

      // Llenar el menú desplegable con los datos obtenidos
      data.forEach((item) => {
        const option = document.createElement("option");

        option.text = item.nombre_res;
        console.log(item.nombre_res);
        restaurante.appendChild(option);
      });
    });
}

function datosRestaurante() {
  var sel = document.getElementById("restaurante").value;

  // Utilizar fetch para realizar la solicitud POST
  fetch("php/select/selectRes.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "restaurante=" + encodeURIComponent(sel),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const horasSeparadas = data.hora_res.split(" hasta ");
        const dato1 = horasSeparadas[0];
        const dato2 = horasSeparadas[1];
        // Actualizar los campos de entrada con los datos recibidos
        document.getElementById("nombre").value = data.nombre_res;
        document.getElementById("ubicacion").value = data.ubi_res;
        document.getElementById("descripcion").value = data.desc_res;
        document.getElementById("horario1").value = dato1;
        document.getElementById("horario2").value = dato2;
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
    console.log(datos.get("restaurantes"));
    fetch("php/update/updateRes.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          alert("datos mal actualizados");
        } else {
          alert("datos actualizados");
          document.getElementById("actualizarDatos").reset();
        }
      });
  });
}

function eliminar() {
  var formul = document.getElementById("actualizarDatos");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);

    fetch("php/delete/deleteRes.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          alert("datos mal eliminados");
        } else {
          alert("datos eliminados");
          window.location.href = "gestionarRestaurante.html";
        }
      });
  });
}
