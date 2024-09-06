export function validateForm(
  codigo,
  nombre,
  precio,
  descripcion,
  bodega,
  sucursal,
  moneda
) {
  //Validar codigo de producto
  if (codigo === "") {
    alert("El código del producto no puede estar en blanco.");
    return false;
  }
  const codigoRegex = /^[A-Za-z0-9]+$/;
  if (!codigoRegex.test(codigo)) {
    alert("El código del producto debe contener letras y números");
    return false;
  }
  if (codigo.length < 5 || codigo.length > 15) {
    alert("El código del producto debe tener entre 5 y 15 caracteres.");
    return false;
  }

  //Validar nombre del producto
  if (nombre === "") {
    alert("El nombre del producto no puede estar en blanco.");
    return false;
  }
  if (nombre.length < 2 || nombre.length > 50) {
    alert("El nombre del producto debe tener entre 2 y 50 caracteres.");
    return false;
  }

  //Validar moneda
  if (moneda === "") {
    alert("Debe seleccionar una moneda para el producto.");
    return false;
  }

  //Validar precio
  if (precio === "") {
    alert("El precio del producto no puede estar en blanco.");
    return false;
  }
  const precioRegex = /^\d+(\.\d{1,2})?$/;
  if (!precioRegex.test(precio)) {
    alert(
      "El precio del producto debe ser un número positivo con hasta dos decimales."
    );
    return false;
  }

  //Validar descripcion
  if (descripcion === "") {
    alert("La descripción del producto no puede estar en blanco.");
    return false;
  }

  if (descripcion.length < 10 || descripcion.length > 1000) {
    alert("La descripción del producto debe tener entre 10 y 1000 caracteres.");
    return false;
  }

  //Validar bodega
  if (bodega === "") {
    alert("Debe seleccionar una bodega.");
    return false;
  }

  //Validar sucursal
  if (sucursal === "") {
    alert("Debe seleccionar una sucursal para la bodega seleccionada.");
    return false;
  }

  return true;
}
