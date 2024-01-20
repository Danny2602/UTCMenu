<?php
require_once('conexion.php');

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$usu= $_POST['usu'];
$cor = $_POST['cor'];


$sql = "CALL InsertClienteAndMember ('$nombre', '$correo', '$usu', '$cor');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
