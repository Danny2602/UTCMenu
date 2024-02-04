// En menu.js
if (window.location.href.includes("gestionarMenu.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    selecionarMenu();
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    mostrarMenu();
  });
}

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
          mostrarunMenu();
          document.getElementById("menuFormulario").reset();
        }
      });
  });
}

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
        document.getElementById("nombre").value = data.platoNom;
        document.getElementById("descripcion").value = data.platodesc;
        document.getElementById("precio").value = data.platoprec;
        document.getElementById("estado").value = data.platoest;
        document.getElementById("horaMenu").value = data.platohora;
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
          alert("Datos actualizados");
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
    console.log(datos.get("menu"));
    fetch("php/delete/deleteMenu.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === false) {
          alert("datos mal eliminados");
        } else {
          alert("datos eliminados");
          window.location.href = "gestionarMenu.html";
        }
      });
  });
}

// tablas
function mostrarMenu() {
  // Configurar los datos que se enviarán en el cuerpo de la solicitud

  var datos = new URLSearchParams();

  // Realizar la solicitud fetch utilizando el método POST
  fetch("php/select/selectMenu.php", {
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
    "platohora",
  ];

  // Verificar si data es un array y tiene al menos un elemento
  if (Array.isArray(data) && data.length > 0) {
    // Crear filas con los datos en orden inverso
    for (var i = data.length - 1; i >= 0; i--) {
      var tr = document.createElement("tr");
      columnasMostradas.forEach(function (columna) {
        var td = document.createElement("td");
        td.textContent = data[i][columna];
        tr.appendChild(td);
      });
      tabla.appendChild(tr);
    }
  } else {
    console.error("Los datos no tienen la estructura esperada.");
  }
}

function mostrarunMenu() {
  fetch("php/select/selectMenu.php", {
    method: "POST",
    body: new URLSearchParams(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("datos obtenidos: ", data);

      // Verificar si data es un array y tiene al menos un elemento
      if (Array.isArray(data) && data.length > 0) {
        // Obtener la referencia de la tabla y la fila de encabezado
        var tabla = document.querySelector(".tabla");
        var filaEncabezado = document.querySelector(".cabeza");

        // Crear una nueva fila con los datos del último menú
        var nuevaFila = data[data.length - 1];
        var tr = document.createElement("tr");
        var columnasMostradas = [
          "platoNom",
          "platodesc",
          "platoprec",
          "platoest",
          "platohora",
        ];

        columnasMostradas.forEach(function (columna) {
          var td = document.createElement("td");
          td.textContent = nuevaFila[columna];
          tr.appendChild(td);
        });

        // Insertar la nueva fila después de la fila de encabezado
        filaEncabezado.insertAdjacentHTML("afterend", tr.outerHTML);
      } else {
        console.error("Los datos no tienen la estructura esperada.");
      }
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
    });
}

//SE genera el pdf
function generarPDF() {
  let doc = new jsPDF();

  // Añade el fondo al PDF desde una imagen
  const fondo = new Image();
  fondo.onload = function () {
    doc.addImage(
      fondo,
      "PNG",
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height
    );

    // Añade el logo al documento después de cargar completamente
    const logo = new Image();
    logo.onload = function () {
      // Configura el tamaño de la imagen del logo
      const logoWidth = 20;
      const logoHeight = (logoWidth / logo.width) * logo.height;

      // Añade el logo en la esquina superior izquierda
      doc.addImage(logo, "PNG", 10, 10, logoWidth, logoHeight);

      // Configura el título "MENU" en negrilla y centrado con sombra blanca
      const titleSize = 35; // Tamaño de la fuente
      doc.setFontSize(titleSize);
      doc.setTextColor(0, 0, 0); // Color azul celeste (ajusta los valores según tu preferencia)
      doc.setFontType("bold");

      const titleText = "MENU";
      const titleWidth =
        (doc.getStringUnitWidth(titleText) * titleSize) /
        doc.internal.scaleFactor;
      const titleX = (doc.internal.pageSize.width - titleWidth) / 2;

      // Configura sombra blanca
      doc.setTextColor(255, 255, 255); // Color blanco
      doc.text(titleText, titleX + 1, 31 + 1); // Desplaza ligeramente en posición Y

      // Restaura el color del texto a azul celeste
      doc.setTextColor(0, 0, 0);
      // Ajusta la posición del título
      doc.text(titleText, titleX, 30);

      // Crea una tabla con estilo más formal y contorno
      const tabla = document.querySelector(".tabla");
      doc.autoTable({
        html: tabla,
        startY: 60, // Ajusta la posición de inicio de la tabla
        theme: "grid", // Cambia al tema que prefieras
        margin: { top: 15 },
        styles: {
          fontSize: 13, // Aumenta el tamaño de la fuente en la tabla
        },
        headStyles: {
          fillColor: [20, 0, 0], // Cambia el color del encabezado
          textColor: 25, // Cambia el color del texto del encabezado
          fontStyle: "bold", // Aplica negrita
        },
        columnStyles: {
          // Centra el contenido de todas las columnas
          0: { cellAlign: "center" },
          1: { cellAlign: "center" },
          2: { cellAlign: "center" },
          // Añade más columnStyles si tienes más columnas
        },
        didParseHeader: function (data) {
          data.table.body[0].forEach((cell) => {
            cell.styles.fontStyle = "bold"; // Aplica negrita a las celdas del encabezado
          });
        },
      });

      doc.save("menu.pdf");
    };

    // Asegúrate de que la ruta del logo sea correcta
    logo.src = "img/logo.png"; // Cambia la ruta del logo según tu estructura de carpetas
  };

  // Asegúrate de que la ruta de la imagen de fondo sea correcta
  fondo.src = "img/fondopdf.png"; // Cambia la ruta de la imagen de fondo según tu estructura de carpetas
}
