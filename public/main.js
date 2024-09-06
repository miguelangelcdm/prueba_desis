import {
  fetchBodegas,
  fetchSucursales,
  fetchMateriales,
  fetchMonedas,
  saveProduct,
  checkProductCode,
} from "./scripts/calls.js";
import {
  populateBodegaSelect,
  populateSucursalSelect,
  populateMonedaSelect,
  generateMaterialCheckboxes,
} from "./scripts/interface.js";
import { validateForm } from "./scripts/validation.js";

//cargar información para los selects
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const bodegas = await fetchBodegas();
    populateBodegaSelect(bodegas);
    const materiales = await fetchMateriales();
    generateMaterialCheckboxes(materiales);
    const monedas = await fetchMonedas();
    populateMonedaSelect(monedas);
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un problema al cargar la información");
  }
});

//cargar sucursales dinamicamente
document.getElementById("bodega").addEventListener("change", async function () {
  try {
    const bodegaId = this.value;
    const sucursales = await fetchSucursales(bodegaId);
    populateSucursalSelect(sucursales);
  } catch (error) {
    console.error("Error: ", error);
    alert("Hubo un problema al cargar las sucursales.");
  }
});

//manejar la creacion de un producto haciendo las validaciones respectivas
document
  .getElementById("productForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const bodega = document.getElementById("bodega").value;
    const sucursal = document.getElementById("sucursal").value;
    const precio = document.getElementById("precio").value;
    const moneda = document.getElementById("moneda").value;
    const descripcion = document.getElementById("descripcion").value;

    const formData = new FormData(this);

    //capturar materiales seleccionados
    const selectedMaterials = Array.from(
      document.querySelectorAll("input[name='materiales']:checked")
    ).map((checkbox) => checkbox.value);

    if (selectedMaterials.length < 2) {
      alert("Por favor selecciona al menos dos materiales");
      return;
    }

    formData.append("materiales", JSON.stringify(selectedMaterials));

    //validar campos
    if (
      !validateForm(
        codigo,
        nombre,
        precio,
        descripcion,
        bodega,
        sucursal,
        moneda
      )
    )
      return;

    //verificar que el codigo de producto sea unico
    const isCodeUnique = await checkProductCode(codigo);
    if (!isCodeUnique) {
      alert("El código del producto ya está registrado");
      return;
    }

    try {
      const data = await saveProduct(formData);
      console.log(data);
      if (data.success) {
        alert("Producto guardado exitosamente");
      } else {
        alert("Error al guardar: " + (data.error || "desconocido"));
      }
    } catch (error) {
      console.error("Error", error);
      alert("Error de servidor al intentar guardar el producto");
    }
  });
