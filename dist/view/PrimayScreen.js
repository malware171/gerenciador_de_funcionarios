"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let teclado = (0, prompt_sync_1.default)();
class PrimaryScreen {
    getFirstScreen() {
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
exports.default = PrimaryScreen;
