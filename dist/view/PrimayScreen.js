"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryScreen = void 0;
const PrimaryScreenController_1 = require("../controller/PrimaryScreenController");
class PrimaryScreen {
    constructor(empresa) {
        this.empresa = empresa;
    }
    getFirstScreen() {
        let option = 0;
        while (option !== 9) {
            console.log(`\n+======   Gerenciador de Funconarios da empresa ${this.empresa.getNomeEmpresa}   ======+`);
            console.log("| 1. Cadastrar Funcionario                    |");
            console.log("| 2. Remover Funcionario                      |");
            console.log("| 3. Promover Funcionario                     |");
            console.log("| 4. Listar Funcionarios                      |");
            console.log("| 5. Excluir Funcionario                      |");
            console.log("| 6. Cadastrar Cargo                          |");
            console.log("| 7. Listar Cargos                            |");
            console.log("| 8. Excluir Cargo                            |");
            console.log("| 9. Sair                                     |");
            option = PrimaryScreenController_1.PrimaryScreenController.escolherOpcao();
            switch (option) {
                case 1: {
                    this.empresa.addFuncionario;
                    console.log("Cadastrando funcionário...");
                    break;
                }
                case 2: {
                    console.log("Removendo funcionário...");
                    break;
                }
                case 3: {
                    console.log("Promovendo funcionário...");
                    break;
                }
                case 4: {
                    console.log("Listando funcionários...");
                    break;
                }
                case 9: {
                    console.log("Saindo...");
                    break;
                }
                default: {
                    console.log("Opção Inválida!");
                    break;
                }
            }
        }
    }
}
exports.PrimaryScreen = PrimaryScreen;
