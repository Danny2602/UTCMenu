<?php
require_once('conexion.php');
$restaurante= $_POST['restaurante'];

$sql = "SELECT * FROM restaurantes where nombre_res='$restaurante';";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    $fila = $result->fetch_assoc();
    
    echo json_encode($fila);
   


} else {
    echo json_encode(false);
}



$conn->close();
?>
