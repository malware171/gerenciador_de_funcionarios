"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BussinessController = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Bussiness_1 = __importDefault(require("../model/Bussiness"));
const Address_1 = __importDefault(require("../model/Address"));
const BussinessView_1 = __importDefault(require("../view/BussinessView"));
let teclado = (0, prompt_sync_1.default)();
class BussinessController {
    static criarEmpresa() {
        let nome = teclado("Qual o nome da empresa ? ");
        let cnpj = +teclado("Qual o CNPJ da empresa ? ");
        let ruaEmpresa = teclado("Em que rua esta a empresa ? ");
        let bairroEmpresa = teclado("Em qual bairro esta localizado ? ");
        let numeroEmpresa = +teclado("Qual o número ? ");
        const address = new Address_1.default(ruaEmpresa, bairroEmpresa, numeroEmpresa);
        const empresa = new Bussiness_1.default(nome, cnpj, address);
        BussinessView_1.default.exibirEmpresa(empresa);
    }
}
exports.BussinessController = BussinessController;
