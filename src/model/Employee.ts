import Role from "./Role";

export default class Employee {
  private _id: number;
  private _nome: string;
  private _cargo: Role;
  private _salario: number;

  constructor(nome: string, id: number, cargo: Role, salario: number) {
    (this._nome = nome),
      (this._id = id),
      (this._cargo = cargo),
      (this._salario = salario);
  }

  promover() {}
  detalharFuncionario() {}
}
