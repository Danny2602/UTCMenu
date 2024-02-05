<?php
session_start();
require_once('conexion.php');

$id = $_SESSION['id'];
$restaurante=$_POST['restaurante'];


$sql = "select platoNom,platodesc, platoprec,platoest,platohora from Menus inner join restaurantes on fkid_res=id_res where nombre_res='$restaurante';";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
        
    }
} else {
    // Si no hay datos, devolver un array vacío
   
    $data = array();
}

// Enviar la respuesta como JSON
echo json_encode($data);

$conn->close();
?>