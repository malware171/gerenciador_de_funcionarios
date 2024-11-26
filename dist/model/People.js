"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(nome, idade, cpf, genero, telefone) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._telefone = telefone;
        this._genero = genero;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    get getNome() {
        return this._nome;
    }
    set setIdade(idade) {
        this._idade = idade;
    }
    get getIdade() {
        return this._idade;
    }
    set setCpf(cpf) {
        this._cpf = cpf;
    }
    get getCpf() {
        return this._cpf;
    }
    set setTelefone(telefone) {
        this._telefone = telefone;
    }
    get getTelefone() {
        return this._telefone;
    }
}
exports.default = People;
