<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$menu = $_POST['menu'];

$nombre=$_POST['nombre'];
$descripcion=$_POST['descripcion'];
$Precio = $_POST['Precio'];
$Estado= $_POST['estado'];
$horaMenu=$_POST['horaMenu'];


$sql = "UPDATE Menus SET platoNom='$nombre',platodesc='$descripcion',platoest = '$Estado', platoprec = $Precio,platohora='$horaMenu' WHERE fkid_res IN (SELECT fkid_res FROM miembros WHERE id_mie = '$id') AND platoNom = '$menu';
";

if ($conn->query($sql) === TRUE) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();
?>
