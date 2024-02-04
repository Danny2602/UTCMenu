<?php

session_start();
require_once('conexion.php');

$id = $_SESSION['id'];


$descripcion = $_POST['descripcion'];
$fecha = $_POST['fecha'];
$restaurante=$_POST['restaurante'];



$sql = "call InsertarComentario('$descripcion','$fecha','$restaurante','$id');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
