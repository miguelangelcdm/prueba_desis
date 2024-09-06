CREATE DATABASE desis;

USE desis;

CREATE TABLE materiales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE monedas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE bodegas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE sucursales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  bodega_id INT,
  FOREIGN KEY (bodega_id) REFERENCES bodegas(id)
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(15) UNIQUE NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion TEXT NOT NULL,
  bodega_id INT,
  sucursal_id INT,
  moneda_id VARCHAR(10),
  FOREIGN KEY (moneda_id) REFERENCES moneda(id),
  FOREIGN KEY (bodega_id) REFERENCES bodegas(id),
  FOREIGN KEY (sucursal_id) REFERENCES sucursales(id)
);

CREATE TABLE producto_material (
  producto_id INT,
  material_id INT,
  PRIMARY KEY (producto_id, material_id),
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (material_id) REFERENCES materiales(id)
);

INSERT INTO bodegas (id, nombre) VALUES
(1, 'Bodega Central'),
(2, 'Bodega Norte'),
(3, 'Bodega Sur'),
(4, 'Bodega Este');

INSERT INTO sucursales (id, nombre, bodega_id) VALUES
(1, 'Sucursal A', 1),
(2, 'Sucursal B', 1),
(3, 'Sucursal C', 2),
(4, 'Sucursal D', 3);

INSERT INTO monedas (id, nombre) VALUES
(1, 'Sol'),
(2, 'Dólar'),
(3, 'Euro'),
(4, 'Yen');

INSERT INTO materiales (id, nombre) VALUES
(1, 'Acero'),
(2, 'Aluminio'),
(3, 'Cobre'),
(4, 'Plástico');