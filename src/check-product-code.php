<?php
require '../config/config.php';
$mysqli = getConnection();

$codigo = $_GET['codigo'];

$query = "SELECT COUNT(*) AS count FROM productos WHERE codigo = ?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param("s", $codigo);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();

echo json_encode(['unique' => $count == 0]);