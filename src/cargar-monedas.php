<?php
require '../config/config.php';

header('Content-Type: application/json');

// Conexión a la base de datos
$mysqli = getConnection();

$query = "SELECT * FROM monedas";
$result = $mysqli->query($query);

$monedas = [];
while ($row = $result->fetch_assoc()) {
    $monedas[] = $row;
}

// Asegúrate de que estás enviando un JSON válido
echo json_encode($monedas);
?>