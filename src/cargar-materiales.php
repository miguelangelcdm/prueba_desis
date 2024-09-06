<?php
require '../config/config.php';

header('Content-Type: application/json');

// Conexión a la base de datos
$mysqli = getConnection();

$query = "SELECT * FROM materiales";
$result = $mysqli->query($query);

$materiales = [];
while ($row = $result->fetch_assoc()) {
    $materiales[] = $row;
}

// Asegúrate de que estás enviando un JSON válido
echo json_encode($materiales);
?>