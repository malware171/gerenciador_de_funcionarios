export default class Role {
  private _id: number;
  private _nome: string;
  private _salario: number;

  constructor(id: number, nome: string, salario: number) {
    (this._id = id), (this._nome = nome), (this._salario = salario);
  }

  public get id(): number {
    return this._id;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }

  public set salario(salario: number) {
    this._salario = salario;
  }

  public get salario(): number {
    return this._salario;
  }

  atualizarSalario() {}
  detalharCargo() {}
}
