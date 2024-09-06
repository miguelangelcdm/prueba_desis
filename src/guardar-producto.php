<?php
require '../config/config.php';
$mysqli = getConnection();

$codigo = $_POST['codigo'];
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];
$bodega = $_POST['bodega'];
$sucursal = $_POST['sucursal'];
$moneda = $_POST['moneda'];
$materiales = json_decode($_POST['materiales']);

$mysqli->begin_transaction();
try {
    // Verificar el codigo de producto
    $query = "SELECT COUNT(*) AS count FROM productos WHERE codigo = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $codigo);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close(); // Cerrar el stmt después del fetch

    if ($count > 0) {
        echo json_encode(['success' => false, 'error' => 'El código de producto ya existe']);
        $mysqli->rollback(); // Asegúrate de hacer rollback aquí antes de salir
        exit;
    }

    // Agregar Producto
    $query = "INSERT INTO productos (codigo, nombre, precio, descripcion, bodega_id, sucursal_id, moneda_id) 
              VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("ssssiii", $codigo, $nombre, $precio, $descripcion, $bodega, $sucursal, $moneda);
    $stmt->execute();
    $productId = $mysqli->insert_id; // Obtener el último ID insertado
    $stmt->close(); // Cerrar el stmt después de uso

    // Agregar registros a la tabla transaccional
    $query = "INSERT INTO producto_material (producto_id, material_id) VALUES (?, ?)";
    $stmt = $mysqli->prepare($query);
    foreach ($materiales as $material) {
        $stmt->bind_param("ii", $productId, $material);
        $stmt->execute();
    }
    $stmt->close(); // Cerrar el stmt después de uso

    // Commit de la transacción
    $mysqli->commit();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    // Rollback transaction
    $mysqli->rollback();
    // Log the error and send a failure response
    error_log("Error: " . $e->getMessage());
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
