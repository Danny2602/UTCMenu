if (window.location.href.includes("clienteVerRestaurantes.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    restaurantes();
  });
  var restaurante = "";
} else {
  document.addEventListener("DOMContentLoaded", function () {
    mostrarRestaurantes();
    mostrarMenu();
    mostrarComentarios();
  });
  var restaurante = sessionStorage.getItem("restaurante");
  console.log("Contenido del label almacenado:", restaurante);
}

function restaurantes() {
  fetch("php/select/selectRestaurante.php")
    .then((response) => response.json())
    .then((data) => {
      // Verificar si data es un array y tiene al menos un elemento
      if (Array.isArray(data) && data.length > 0) {
        console.log(data[0].nombre_res);
        console.log(data);
        for (i = 0; i < data.length; i++) {
          let elementoId = "nombre" + (i + 1);
          document.getElementById(elementoId).innerText = data[i].nombre_res;
        }
      } else {
        console.error("Los datos no tienen la estructura esperada.");
      }
    })
    .catch((error) => console.error("Error al obtener datos:", error));
}

// Declarar una variable global para almacenar el contenido del label

// Función que se ejecuta al hacer clic en el enlace
function almacenarContenido(enlace) {
  // Obtener el contenido del label dentro del enlace clicado
  var contenidoLabel = enlace.querySelector("label").textContent;

  sessionStorage.setItem("restaurante", contenidoLabel);

  window.location.href = "clienteVerMenu.html";

  // Puedes realizar otras acciones con el restaurante según tus necesidades
}

//otra pagina
function mostrarRestaurantes() {
  var restaurante = sessionStorage.getItem("restaurante");
  console.log("Contenido del label almacenado:", restaurante);

  // Verificar si hay restaurante antes de enviarlo
  if (restaurante) {
    // Configurar los datos que se enviarán en el cuerpo de la solicitud
    var datos = new URLSearchParams();
    datos.append("restaurante", restaurante);

    // Realizar la solicitud fetch utilizando el método POST
    fetch("php/select/selectRes.php", {
      method: "POST",
      body: datos,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor si es necesario
        console.log("Respuesta del servidor:", data);
        document.getElementById("nombre").innerText = data.nombre_res;
        document.getElementById("ubicacion").innerText = data.ubi_res;
        document.getElementById("descripcion").innerText = data.desc_res;
        document.getElementById("horario").innerText = data.hora_res;
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  }
}

function mostrarMenu() {
  // Configurar los datos que se enviarán en el cuerpo de la solicitud
  var datos = new URLSearchParams();
  datos.append("restaurante", restaurante);

  // Realizar la solicitud fetch utilizando el método POST
  fetch("php/select/selectTodosMenus.php", {
    method: "POST",
    body: datos,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("datos obtenido: ", data);
      actualizarTabla(data);
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
    });
}
// Función para actualizar la tabla con los datos recibidos
function actualizarTabla(data) {
  // Obtener la referencia de la tabla
  var tabla = document.querySelector(".tabla");

  // Limpiar el contenido actual de la tabla

  // Lista de claves que deseas mostrar en la tabla
  var columnasMostradas = [
    "platoNom",
    "platodesc",
    "platoprec",
    "platoest",
    "platoHora",
  ];

  // Verificar si data es un array y tiene al menos un elemento
  if (Array.isArray(data) && data.length > 0) {
    // Crear filas con los datos
    data.forEach(function (fila) {
      var tr = document.createElement("tr");
      columnasMostradas.forEach(function (columna) {
        var td = document.createElement("td");
        td.textContent = fila[columna];
        tr.appendChild(td);
      });
      tabla.appendChild(tr);
    });
  } else {
    console.error("Los datos no tienen la estructura esperada.");
  }
}

function cometarios() {
  var restaurante = sessionStorage.getItem("restaurante");
  console.log("Contenido del label almacenado:", restaurante);
  var fechaHoraActual = new Date();
  var opcionesFechaHora = { timeZone: "America/Guayaquil" }; // Zona horaria de Ecuador (GMT-5)
  var fecha = fechaHoraActual.toLocaleString("es-EC", opcionesFechaHora);

  var formul = document.getElementById("formulario");
  var respuesta = document.getElementById("respuesta");
  formul.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("vas bien");
    var datos = new FormData(formul);
    datos.append("restaurante", restaurante);
    datos.append("fecha", fecha);
    console.log(datos);
    fetch("php/insert/insertComentario.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          console.log("datos ingresado maaaal");
        } else {
          console.log("datos ingresado");
          document.getElementById("texto").value = "";
          mostrarComentarios();
        }
      });
  });
}
function mostrarComentarios() {
  // Configurar los datos que se enviarán en el cuerpo de la solicitud
  var datos = new URLSearchParams();
  datos.append("restaurante", restaurante);

  // Realizar la solicitud fetch utilizando el método POST
  fetch("php/select/selectComentarios.php", {
    method: "POST",
    body: datos,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("datos obtenido restaurante: ", data);
      mostrarComentariosEnHTML(data);
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
    });
}

function mostrarComentariosEnHTML(comentarios) {
  // Obtener el contenedor donde se mostrarán los comentarios
  var contenedorComentarios = document.getElementById("contenedorComentarios");

  // Limpiar el contenido actual del contenedor
  contenedorComentarios.innerHTML = "";

  // Iterar sobre los comentarios y crear las secciones dinámicamente
  comentarios.forEach(function (comentario) {
    var nuevaSeccion = document.createElement("section");
    nuevaSeccion.classList.add("comentario1");
    nuevaSeccion.style.boxShadow = "1px 1px 5px rgba(0, 0, 0.2, 0.4)";
    nuevaSeccion.style.backgroundColor = "white";

    nuevaSeccion.innerHTML = `
          <label for="" id="nombre">Usuario:${comentario.nom_usu}</label>
          <label for="" id="fecha">Fecha:${comentario.fecha_com}</label><br />
          <label for="" id="fecha">Comentario: </label><br />
          <label for="" class="com" style="width: 90%; height: 90px" id="comentario">${comentario.desc_com}</label>
      `;

    // Agregar la nueva sección al contenedor
    contenedorComentarios.insertBefore(
      nuevaSeccion,
      contenedorComentarios.firstChild
    );
  });
}
