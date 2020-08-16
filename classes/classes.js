"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(28, 11, 1993);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // É possível emitir os paresentes ()
casamento.ano = 2019;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(28, 11, 1993);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // É possível emitir os paresentes ()
casamentoEsperto.ano = 2019;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs1.: Desconto é opcional (valor padrão 0)
// Obs2.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto
    // minhaResposta
    precoComDesconto() {
        let desconto = this.preco * this.desconto;
        return this.preco - desconto;
    }
    // Resposta do professor
    //public precoComDesconto() : number {
    //  return this.preco * (1 - this.desconto)
    //}
    resumo() {
        return `${this.nome} custa com desconto R$${this.precoComDesconto().toFixed(2)} (${this.desconto * 100}% off!)`;
    }
}
const produto1 = new Produto('Pizza', 25.00, 0.06);
console.log(produto1.resumo());
const produto2 = new Produto('Refrigerante 2L', 9.50);
produto2.desconto = 0.15;
console.log(produto2.resumo());
// Modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // Protected compartilha métodos via Herança e na própria Classe
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Renault', 'Sandero', 185);
// Cria um Array com 50 posições e roda o método acelerar 50x
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
// Frear 20x
Array(20).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// Simular "erros"
// carro1.velocidadeAtual = 300
// console.log('Atual -> ' + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('Máxima -> ' + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('Atual -> ' + carro1.velocidadeAtual)
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        // Permitir que o construtor da classe pai seja executado
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -3;
console.log(pessoa1);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
const m1 = new Matematica();
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// Sem static :
// console.log(new Matematica().areaCirc(4))
// Com static :
console.log(Matematica.areaCirc(4));
// Classes abstrata
// Classe feita para ser herdada por classes concretas
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
// Exemplo de polimorfismo
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//# sourceMappingURL=classes.js.map