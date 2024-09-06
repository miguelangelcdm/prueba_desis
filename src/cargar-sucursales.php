<?php
require '../config/config.php';
$mysqli = getConnection();

$bodega_id = $_GET['bodega_id'];

$query = "SELECT * FROM sucursales WHERE bodega_id = ?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param("i", $bodega_id);
$stmt->execute();
$result = $stmt->get_result();

$sucursales = [];
while ($row = $result->fetch_assoc()) {
    $sucursales[] = $row;
}

echo json_encode($sucursales);
?>