import prompt from "prompt-sync";
import Bussiness from "../model/Bussiness";
import Address  from "../model/Address";
import BussinessView from "../view/BussinessView";

let teclado = prompt();

export class BussinessController {

   static criarEmpresa(): void {
      let nome = teclado("Qual o nome da empresa ? ");
      let cnpj = +teclado("Qual o CNPJ da empresa ? ");
      let ruaEmpresa = teclado("Em que rua esta a empresa ? ");
      let bairroEmpresa = teclado("Em qual bairro esta localizado ? ");
      let numeroEmpresa = +teclado("Qual o número ? ")
  
      const address: Address = new Address(ruaEmpresa, bairroEmpresa, numeroEmpresa)
      const empresa: Bussiness = new Bussiness(nome, cnpj, address);

      BussinessView.exibirEmpresa(empresa)
    }

    
}