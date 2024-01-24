<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$menu = $_POST['menu'];

$sql = "DELETE Menus FROM Menus INNER JOIN Restaurantes ON Menus.fkid_res = Restaurantes.id_res INNER JOIN Miembros ON Restaurantes.id_res = Miembros.fkid_res WHERE Miembros.id_mie = '$id' AND Menus.platoNom = '$menu';";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
