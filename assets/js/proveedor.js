import { Artículo } from './articulo.js';

export class Proveedor {
    constructor(nombre, artículo, precio) {
        this._nombre = nombre;
        this._artículo = artículo;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get artículo() {
        return this._artículo;
    }

    set artículo(value) {
        this._artículo = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }

    getInfoProveedor() {
        return this._artículo.getInfoProveedor(this);
    }
}
