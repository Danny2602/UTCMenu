<?php
require_once('conexion.php');

$sql = "SELECT id_res, nombre_res, ubi_res, desc_res, hora_res FROM restaurantes";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    // Si no hay datos, devolver un array vacío
    $data = array();
}

// Establecer el encabezado Content-Type a application/json
header('Content-Type: application/json');

// Enviar la respuesta como JSON
echo json_encode($data);

$conn->close();
?>
