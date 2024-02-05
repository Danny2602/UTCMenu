<?php
require_once('conexion.php');

$sql = "SELECT * FROM restaurantes";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Convertir cada imagen a base64 y asignarla al arreglo
        $imagenBase64 = base64_encode($row['imagen_res']);
        $row['imagen_res'] = $imagenBase64;

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
