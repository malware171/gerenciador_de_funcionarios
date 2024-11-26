"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    constructor(id, nome, salario) {
        (this._id = id), (this._nome = nome), (this._salario = salario);
    }
    get id() {
        return this._id;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set salario(salario) {
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    atualizarSalario() { }
    detalharCargo() { }
}
exports.default = Role;
