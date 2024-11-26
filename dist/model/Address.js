"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(rua, bairro, numero) {
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
    }
    get getRua() {
        return this.rua;
    }
    set setRua(rua) {
        this.rua = rua;
    }
    get getBairro() {
        return this.bairro;
    }
    set setBairro(bairro) {
        this.bairro = bairro;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(numero) {
        this.numero = numero;
    }
}
exports.default = Address;
