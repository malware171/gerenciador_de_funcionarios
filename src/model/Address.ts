export default class Address implements IAddress{
   rua: string
   bairro: string
   numero: number
   
   constructor(rua: string, bairro: string, numero: number ) {
      this.rua = rua;
      this.bairro = bairro;
      this.numero = numero;
   }
   
   public get getRua() : string {
      return this.rua
   }
    
   public set setRua(rua : string) {
      this.rua = rua;
   }

   public get getBairro() : string {
      return this.bairro
   }
    
   public set setBairro(bairro : string) {
      this.bairro = bairro;
   }

   public get getNumero() : number {
      return this.numero
   }
    
   public set setNumero(numero : number) {
      this.numero = numero;
   }
}