<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$restaurante = $_POST['restaurante'];

$sql = "DELETE FROM restaurantes where nombre_res='$restaurante';";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
