import prompt from "prompt-sync";
let input = prompt()

export class PrimaryScreenController {
   static escolherOpcao(): number {
      let option = 0;
      option = +input("Escolha uma ação: ")
      return option
   }
   static addFuncionario(): string {
      let nome: string
      nome = input("Qual o nome do funcionario ? ")
      return nome

   }
}  