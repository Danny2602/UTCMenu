<?php
session_start();
require_once('conexion.php');
$id = $_SESSION['id'];
$menu = $_POST['menu'];

$sql = "SELECT platoNom,platodesc,platoprec,platoest,platohora FROM Menus INNER JOIN Restaurantes ON Menus.fkid_res = Restaurantes.id_res INNER JOIN Miembros ON Restaurantes.id_res = Miembros.fkid_res WHERE Miembros.id_mie = '$id' AND Menus.platoNom='$menu';";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $fila = $result->fetch_assoc();
    
    echo json_encode($fila);
   


} else {
    echo json_encode(false);
}

$conn->close();

?>

