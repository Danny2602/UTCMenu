<?php

session_start();
require_once('conexion.php');

$id = $_SESSION['id'];

$miDatoRecibido = $_GET['dato'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$precio= $_POST['precio'];
$estado = $_POST['estado'];


$sql = "CALL InsertarMenu('$nombre', '$descripcion', $precio, '$estado', '$id');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
