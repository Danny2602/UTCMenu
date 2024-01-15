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
