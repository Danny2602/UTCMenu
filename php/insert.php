<?php
require_once('conexion.php');

$nombre = $_POST['nombre'];
$ubicacion = $_POST['ubicacion'];
$descripcion = $_POST['descripcion'];
$usuario = $_POST['usuario'];
$contrase = $_POST['contrase'];
$horario1 = $_POST['horario1'];
$horario2 = $_POST['horario2'];
$hora = $horario1 . ' hasta ' . $horario2;
//$imagen = base64_decode($_POST['imagen']);

$sql = "CALL InsertRestaurantAndMember('$nombre', '$ubicacion', '$descripcion', '$hora','', '$usuario', '$contrase');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
