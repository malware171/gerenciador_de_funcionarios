import PrimaryScreen from "./view/PrimayScreen";
import Employee from "./model/Employee";
import { CadastroEmpresa } from "./view/CadastroEmpresa";

let cadastroEmpresa = new CadastroEmpresa();
let screen = new PrimaryScreen();

cadastroEmpresa.telaCadastroEmpresa();
screen.getFirstScreen();
