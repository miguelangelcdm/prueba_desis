export async function fetchBodegas() {
  const response = await fetch("../../src/cargar-bodegas.php");
  if (!response.ok) throw new Error("Error cargando bodegas");
  return response.json();
}

export async function fetchSucursales(bodegaId) {
  const response = await fetch(
    `../src/cargar-sucursales.php?bodega_id=${bodegaId}`
  );
  if (!response.ok) throw new Error("Error cargando sucursales");
  return response.json();
}

export async function fetchMateriales() {
  const response = await fetch("../../src/cargar-materiales.php");
  if (!response.ok) throw new Error("Error cargando los materiales");
  return response.json();
}

export async function fetchMonedas() {
  const response = await fetch("../../src/cargar-monedas.php");
  if (!response.ok) throw new Error("Error cargando los materiales");
  return response.json();
}

export async function saveProduct(formData) {
  const response = await fetch("../../src/guardar-producto.php", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new error("Error en la respuesta");
  }
  return response.json();
}

export async function checkProductCode(codigo) {
  try {
    const response = await fetch(
      `../src/check-product-code.php?codigo=${encodeURIComponent(codigo)}`
    );
    const data = await response.json();
    return data.unique;
  } catch (error) {
    console.error("Error verificando su el producto es unico", error);
    return false;
  }
}
