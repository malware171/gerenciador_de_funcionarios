"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Employee extends People_1.default {
    constructor(id, nome, idade, cpf, genero, telefone, cargo, salario) {
        super(nome, idade, cpf, genero, telefone);
        this._id = id,
            this._salario = salario;
        this._cargo = cargo;
    }
    promover() { }
    detalharFuncionario() { }
}
exports.default = Employee;
