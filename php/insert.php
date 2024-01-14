<?php
require_once('conexion.php');

$nombre = $_POST['nombre'];
$ubicacion = $_POST['ubicacion'];
$descripcion = $_POST['descripcion'];
$horario = $_POST['horario'];
$usuario = $_POST['usuario'];
$contrase = $_POST['contrase'];

$sql = "CALL InsertRestaurantAndMember('$nombre', '$ubicacion', '$descripcion', '2024-01-13', '$usuario', '$contrase');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
