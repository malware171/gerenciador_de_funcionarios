"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimayScreen_1 = __importDefault(require("./view/PrimayScreen"));
const CadastroEmpresa_1 = require("./view/CadastroEmpresa");
let cadastroEmpresa = new CadastroEmpresa_1.CadastroEmpresa();
let screen = new PrimayScreen_1.default();
cadastroEmpresa.telaCadastroEmpresa();
screen.getFirstScreen();
