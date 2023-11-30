"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});
// GET http://localhost:8000/api/v1
app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
/**
 * Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.
Siga o exemplo apresentadola no Hipertexto 4 e crie as classes AdaptadorPato e Adaptador atoDemo para
demonstrar o uso da classe AdaptadorPato.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo
ao lado para que outros desenvolvedores possam analisá-lo.
 */
const PatoSelvagem_1 = require("./PatoSelvagem");
const AdaptadorPato_1 = require("./AdaptadorPato");
// Exemplo de uso do adaptador
const patoSelvagem = new PatoSelvagem_1.PatoSelvagem();
const adaptadorPato = new AdaptadorPato_1.AdaptadorPato(patoSelvagem);
// Demonstração
console.log("Chamadas de métodos da Galinha usando o Pato adaptado:");
adaptadorPato.cacarejar();
adaptadorPato.voarCurtoDistancia();
