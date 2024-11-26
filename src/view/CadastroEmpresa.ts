import prompt from "prompt-sync";
import Bussiness from "../model/Bussiness";

let teclado = prompt();

export class CadastroEmpresa {
  public telaCadastroEmpresa(): void {
    let option = 0;

    while (option != 2) {
      console.log("+======   Gerenciador de Funconarios   ======+");
      console.log("|1. Cadastrar Empresa                        |");
      console.log("|2. Sair                                     |");

      option = +teclado("Escolha uma ação: ");

      switch (option) {
        case 1: {

          break;
        }
        case 2: {
          break;
        }
        default: {
          console.log("Opcão Invalida !");
          break;
        }
      }
    }
  }
}
