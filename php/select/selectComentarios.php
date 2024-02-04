<?php
session_start();
require_once('conexion.php');

$id = $_SESSION['id'];
$restaurante=$_POST['restaurante'];

$sql = "select * from comentarios c inner join restaurantes r on c.fkid_res=r.id_res inner join  usuarios u on c.fkid_usu=u.id_usu where r.nombre_res='$restaurante';";

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