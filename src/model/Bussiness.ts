import Employee from "./Employee";
import Address from "./Address";
import Role from "./Role";

export default class Bussiness {
  private _nome: string;
  private _cnpj: number;
  private _endereco: Address;
  private _funcionarios: Employee[] = [];
  private _cargos: Role[] = [];

  constructor(nome: string, cnpj: number, endereco: Address) {
    this._nome = nome, this._cnpj = cnpj, this._endereco = endereco
  }
  
  public get getNomeEmpresa() : string {
    return this._nome
  }

  public get getCnpj() {
    return this._cnpj
  }

  public get getEndereco() {
    return this._endereco
  }

  adicionarFuncionario() {
  }
  removerFuncionario() {}
  listarFuncionario() {}
  adicionarCargo() {}
  atualizarCargo() {}
  listarCargo() {}
}
