"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'Paulo', idade: 27 }));
// Criando função com Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Paulo', idade: 27 }));
// Generics disponíveis na API
// A classe Array foi criada de uma forma genérica na API JS, porém podemos atribuir tipos nesse generics
const avaliacoes = [10, 9.3, 6.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5') -- Não consegue dar um push em um Array genérico do tipo number
console.log(avaliacoes);
// Array 
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Paulo']);
imprimir([
    { nome: 'Paulo', idade: 22 },
    { nome: 'Fulano', idade: 24 },
    { nome: 'Cicrano', idade: 15 }
]);
imprimir([
    { nome: 'Paulo', idade: 22 },
    { nome: 'Fulano', idade: 24 },
    { nome: 'Cicrano', idade: 15 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Something'));
// Classe com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
//console.log(new OperacaoBinaria('Bom ', 'dia').executar())
//console.log(new OperacaoBinaria(3, 7).executar())
//console.log(new OperacaoBinaria(3, 'Opa').executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 42).executar());
// Classe Data e tipo de retorno será STRING
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        // Destructuring - Expor os atributos de DATA em 3 váriaveis
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        // Math.abs evita o valor negativo
        const diferenca = Math.abs(t1 - t2);
        // 1000 milisegundos * 60 segundos * 60 minutos * 24horas
        const dia = 1000 * 60 * 60 * 24;
        // Arredondamento 
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
//# sourceMappingURL=genericos.js.map