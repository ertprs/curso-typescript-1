"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'João';
}
const pessoa = {
    nome: 'Paulo',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker');
// Usando classes com interfaces
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimateCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimateCompra);
let potencia;
potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
//# sourceMappingURL=interfaces.js.map