"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorPato = void 0;
// Adaptador para Pato ser usado como Galinha
class AdaptadorPato {
    constructor(pato) {
        this.pato = pato;
    }
    cacarejar() {
        this.pato.grasnar();
    }
    voarCurtoDistancia() {
        this.pato.voar();
    }
}
exports.AdaptadorPato = AdaptadorPato;
