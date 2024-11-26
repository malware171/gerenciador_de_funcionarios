
import { Gender } from "./Gender"

export default class People {
   protected _nome: string
   protected _idade: number
   protected _cpf: number
   protected _genero: Gender
   protected _telefone: number

   constructor(nome:string, idade: number, cpf: number, genero: Gender,telefone: number) {
      this._nome = nome
      this._idade = idade
      this._cpf = cpf
      this._telefone = telefone
      this._genero = genero
   }

   public set setNome(nome : string) {
      this._nome = nome;
   }
   public get getNome() : string {
      return this._nome
   }
   public set setIdade(idade : number) {
      this._idade = idade;
   }
   public get getIdade() : number {
      return this._idade
   }
   public set setCpf(cpf : number) {
      this._cpf = cpf;
   }
   public get getCpf() : number {
      return this._cpf
   }
   public set setTelefone(telefone : number) {
      this._telefone = telefone;
   }
   public get getTelefone() : number {
      return this._telefone
   }
   

   
   
}