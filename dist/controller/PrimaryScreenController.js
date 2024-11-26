"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryScreenController = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
class PrimaryScreenController {
    static escolherOpcao() {
        let option = 0;
        option = +input("Escolha uma ação: ");
        return option;
    }
    static addFuncionario() {
        let nome;
        nome = input("Qual o nome do funcionario ? ");
        return nome;
    }
}
exports.PrimaryScreenController = PrimaryScreenController;
