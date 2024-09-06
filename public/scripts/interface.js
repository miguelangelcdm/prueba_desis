export function populateBodegaSelect(bodegas) {
  const bodegaSelect = document.getElementById("bodega");
  bodegas.forEach((bodega) => {
    const option = document.createElement("option");
    option.value = bodega.id;
    option.textContent = bodega.nombre;
    bodegaSelect.appendChild(option);
  });
}

export function populateMonedaSelect(monedas) {
  const monedaSelect = document.getElementById("moneda");
  monedas.forEach((moneda) => {
    const option = document.createElement("option");
    option.value = moneda.id;
    option.textContent = moneda.nombre;
    monedaSelect.appendChild(option);
  });
}

export function populateSucursalSelect(sucursales) {
  const sucursalSelect = document.getElementById("sucursal");
  sucursalSelect.innerHTML =
    "<option value=''>Selecciona una Sucursal</option>";
  sucursales.forEach((sucursal) => {
    const option = document.createElement("option");
    option.value = sucursal.id;
    option.textContent = sucursal.nombre;
    sucursalSelect.appendChild(option);
  });
}

export function generateMaterialCheckboxes(materiales) {
  const materialesContainer = document.getElementById("materiales-container");
  materialesContainer.innerHTML = ""; // Clear previous checkboxes
  materiales.forEach((material) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "materiales";
    checkbox.value = material.id;

    const label = document.createElement("label");
    label.textContent = material.nombre;

    materialesContainer.appendChild(checkbox);
    materialesContainer.appendChild(label);
    materialesContainer.appendChild(document.createElement("br"));
  });
}
