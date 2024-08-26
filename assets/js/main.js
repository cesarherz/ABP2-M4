import { Proveedor } from './proveedor.js';
import { Artículo } from './articulo.js';

document.getElementById("proveedorForm").onsubmit = function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const nombre_articulo = document.getElementById("nombreArticulo").value;
    const email_articulo = document.getElementById("email").value;
    const tel_articulo = document.getElementById("telefono").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const impuesto = parseFloat(document.getElementById("impuesto").value);

    const artículo = new Artículo(nombre_articulo, email_articulo, tel_articulo);
    const proveedor = new Proveedor(nombre, artículo, precio);

    const impuestoTotal = calcularImpuesto(precio, impuesto);
    const resultadoHTML = `
        <p>${proveedor.getInfoProveedor()}</p>
        <p>Precio: $${precio.toFixed(2)}</p>
        <p>Impuesto (${impuesto}%): $${impuestoTotal.toFixed(2)}</p>
        <p>Total a pagar: $${(precio + impuestoTotal).toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
};

const calcularImpuesto = (precio, porcentajeImpuesto) => {
    return precio * (porcentajeImpuesto / 100);
};