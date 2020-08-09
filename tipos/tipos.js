"use strict";
// string
var nome = 'Paulo';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// array
var hobbies = ["Jogar Games", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// Tuplas - Array com uma quantidade pré definida de tipos
var endereco = ["Av Principal", 99, "CASA 1"];
console.log(endereco);
endereco = ["Rua importante", 1206, "Bloco C"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2020 };
console.log(carro);
// funções - Tipo esperado no retorno da função
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 9));
// Tipo função
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// Objetos
var usuario = {
    nome: 'Paulo',
    idade: 27
};
console.log(usuario);
// Nao é permitido
// usuario = {}
// usuario = {
//  name: 'Maria',
//  age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
var funcionario = {
    supervisores: ['Paulo', 'Mayara'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
var funcionario2 = {
    supervisores: ['Bia', 'Ana'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// Checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome!");
        }
        if (this.preco <= 0) {
            falha("Preço inválido!");
        }
    }
};
produto.validarProduto();
// Valores opcionais com tipo Nulo
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '984545411',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
