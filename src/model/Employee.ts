import { Gender } from "./Gender";
import People from "./People";
import Role from "./Role";

export default class Employee extends People{
  private _id: number;
  private _cargo: Role;
  private _salario: number;

  constructor(id: number, nome:string, idade: number, cpf: number, genero: Gender,telefone: number, cargo: Role, salario: number) {
    super(nome, idade, cpf, genero, telefone)
    this._id = id,
    this._salario = salario
    this._cargo = cargo
  }

  promover() {}
  detalharFuncionario() {}
}
