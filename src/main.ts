import Address from "./model/Address";
import Bussiness from "./model/Bussiness";
import { PrimaryScreen } from "./view/PrimayScreen";

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function criarEmpresa(): Promise<Bussiness> {
  console.log("Acessando Empresa...");

  await delay(2000); // Simula um carregamento

  const ENDERECO: Address = new Address("Rodovia BR 373", "Vila das Flores", 200);
  const EMPRESA: Bussiness = new Bussiness("Agropeças San't Ana", 27666834000197, ENDERECO);

  console.log(`${EMPRESA.getNomeEmpresa} acessada com sucesso !`);
  return EMPRESA; // Retorna a instância criada
}

async function main() {
  const empresa = await criarEmpresa(); // Aguarda a criação da empresa
  const screen = new PrimaryScreen(empresa);

  screen.getFirstScreen(); // Executa a tela principal após a criação
}

main();
