"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bussiness {
    constructor(nome, cnpj, endereco) {
        this._funcionarios = [];
        this._cargos = [];
        this._nome = nome, this._cnpj = cnpj, this._endereco = endereco;
    }
    get getNomeEmpresa() {
        return this._nome;
    }
    get getCnpj() {
        return this._cnpj;
    }
    get getEndereco() {
        return this._endereco;
    }
    adicionarFuncionario() {
    }
    removerFuncionario() { }
    listarFuncionario() { }
    adicionarCargo() { }
    atualizarCargo() { }
    listarCargo() { }
}
exports.default = Bussiness;
