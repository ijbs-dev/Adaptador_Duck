// Classe de implementação para Galinha
export class GalinhaComum implements Galinha {
    cacarejar(): void {
      console.log("Galinha comum está cacarejando");
    }
  
    voarCurtoDistancia(): void {
      console.log("Galinha comum está voando a curta distância");
    }
  }