// Adaptador para Pato ser usado como Galinha
export class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    voarCurtoDistancia(): void {
      this.pato.voar();
    }
  }