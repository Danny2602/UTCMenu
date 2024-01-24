<?php
session_start();
require_once('conexion.php');

$id = $_SESSION['id'];
$sql = "call seleccionarMenu('$id');";
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

// Enviar la respuesta como JSON
echo json_encode($data);

$conn->close();
?>