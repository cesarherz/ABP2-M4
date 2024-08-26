export class Artículo {
    constructor(nombre, email, teléfono) {
        this._nombre = nombre;
        this._email = email;
        this._teléfono = teléfono;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get teléfono() {
        return this._teléfono;
    }

    set teléfono(value) {
        this._teléfono = value;
    }

    getInfoProveedor(proveedor) {
        return `Proveedor: ${proveedor.nombre}, Teléfono: ${this._teléfono}`;
    }
}

