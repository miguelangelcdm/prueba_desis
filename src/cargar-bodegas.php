<?php
require '../config/config.php';

// Encabezado JSON
header('Content-Type: application/json');

// Conexión a la base de datos
$mysqli = getConnection();

$query = "SELECT * FROM bodegas";
$result = $mysqli->query($query);

$bodegas = [];
while ($row = $result->fetch_assoc()) {
    $bodegas[] = $row;
}

echo json_encode($bodegas);
?>