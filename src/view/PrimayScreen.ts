import Employee from "../model/Employee";
import prompt from "prompt-sync";

let teclado = prompt();

export default class PrimaryScreen {
  public getFirstScreen(): void {
    let option = 0;

    while (option != 9) {
      console.log("+======   Gerenciador de Funconarios   ======+");
      console.log("|1. Cadastrar Funcionario                    |");
      console.log("|2. Remover Funcionario                      |");
      console.log("|3. Promover Funcionario                     |");
      console.log("|4. Listar Funcionarios                      |");
      console.log("|5. Excluir Funcionario                      |");
      console.log("|6. Cadastrar Cargo                          |");
      console.log("|7. Listar Cargos                            |");
      console.log("|8. Excluir Cargo                            |");
      console.log("|9. Sair                                     |");

      option = +teclado("Escolha uma ação: ");

      switch (option) {
        case 1: {
          break;
        }
        case 2: {
          break;
        }
        case 3: {
          break;
        }
        case 4: {
          break;
        }
        case 9: {
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
