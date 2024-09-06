<?php
if (file_exists(__DIR__ . '/../.env')) {
  $variables = parse_ini_file(__DIR__ . '/../.env');
  define('DB_HOST', $variables['DB_HOST']);
  define('DB_NAME', $variables['DB_NAME']);
  define('DB_USER', $variables['DB_USER']);
  define('DB_PASSWORD', $variables['DB_PASSWORD']);
  define('DB_PORT', $variables['DB_PORT']);
}

function getConnection()
{
  $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
  if ($mysqli->connect_error) {
    die("Conexion fallida: " . $mysqli->connect_error);
  }
  return $mysqli;
}