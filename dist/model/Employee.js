"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(nome, id, cargo, salario) {
        (this._nome = nome),
            (this._id = id),
            (this._cargo = cargo),
            (this._salario = salario);
    }
    promover() { }
    detalharFuncionario() { }
}
exports.default = Employee;
