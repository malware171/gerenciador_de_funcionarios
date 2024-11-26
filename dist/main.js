"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = __importDefault(require("./model/Address"));
const Bussiness_1 = __importDefault(require("./model/Bussiness"));
const PrimayScreen_1 = require("./view/PrimayScreen");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function criarEmpresa() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Acessando Empresa...");
        yield delay(2000); // Simula um carregamento
        const ENDERECO = new Address_1.default("Rodovia BR 373", "Vila das Flores", 200);
        const EMPRESA = new Bussiness_1.default("Agropeças San't Ana", 27666834000197, ENDERECO);
        console.log(`${EMPRESA.getNomeEmpresa} acessada com sucesso !`);
        return EMPRESA; // Retorna a instância criada
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const empresa = yield criarEmpresa(); // Aguarda a criação da empresa
        const screen = new PrimayScreen_1.PrimaryScreen(empresa);
        screen.getFirstScreen(); // Executa a tela principal após a criação
    });
}
main();
