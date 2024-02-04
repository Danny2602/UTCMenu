<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$restaurante=$_POST['restaurante'];
$nombre = $_POST['nombre'];

$ubicacion = $_POST['ubicacion'];
$descripcion = $_POST['descripcion'];

$horario1 = $_POST['horario1'];
$horario2 = $_POST['horario2'];
$hora = $horario1 . ' hasta ' . $horario2;



$sql = "UPDATE restaurantes SET nombre_res='$nombre', ubi_res='$ubicacion', desc_res='$descripcion',hora_res='$hora' where nombre_res='$restaurante';";


if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
