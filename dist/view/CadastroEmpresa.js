"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroEmpresa = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let teclado = (0, prompt_sync_1.default)();
class CadastroEmpresa {
    telaCadastroEmpresa() {
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
exports.CadastroEmpresa = CadastroEmpresa;
