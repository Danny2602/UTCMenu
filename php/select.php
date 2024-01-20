<?php
require_once('conexion.php');
$usuario = $_POST['usuario'];
$contra = $_POST['contra'];

$sql = "SELECT * FROM miembros WHERE nom_mie = '$usuario' AND contra_mie = '$contra'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $fila = $result->fetch_assoc();
    $dosPrimerosCaracteres = substr($fila['id_mie'], 0, 2);
    echo json_encode($dosPrimerosCaracteres);
   
} else {
    echo json_encode(false);
}

$conn->close();

?>

