<?php
require_once('conexion.php');

$restaurante = $_POST['restaurante'];

$sql = "SELECT * FROM restaurantes WHERE nombre_res='$restaurante';";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $fila = $result->fetch_assoc();

    // Convertir la imagen a base64 y asignarla al arreglo
    $imagenBase64 = base64_encode($fila['imagen_res']);
    $fila['imagen_res'] = $imagenBase64;

    // Enviar la respuesta JSON con la imagen convertida
    echo json_encode($fila);
} else {
    // Si no hay resultados, enviar false
    echo json_encode(false);
}

$conn->close();
?>
