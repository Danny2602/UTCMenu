<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$menu = $_POST['menu'];
$Precio = $_POST['Precio'];
$Estado= $_POST['Estado'];


$sql = "UPDATE Menus SET platoest = '$Estado', platoprec = $Precio WHERE fkid_res IN (SELECT fkid_res FROM miembros WHERE id_mie = '$id') AND platoNom = '$menu';
";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
