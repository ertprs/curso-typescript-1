"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'Externo';
function revelar() {
    const segredo = 'Interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá");
saudacao();
// Typescript obriga que haja parenteses
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('Paulo');
// This
//function normalComThis() {
//  console.log(this)
//}
//normalComThis()
// Bind transforma o parâmetro em this
//const normalComThisEspecial = normalComThis.bind(2)
//normalComThisEspecial()
// this anterior e this não varia em Arrow function
//console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()
// Parâmetros padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Paulo', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
// Rest
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 5, 222, 111);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
const [w, z] = [1, 2];
console.log(w, z);
// Destructuring (objeto)
const item = {
    nome: 'SSD 280GB',
    preco: 200,
    caracteristica: {
        import: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem, precoItem);
const { nome: n, preco: p } = item;
console.log(n, p);
// Template String
const usuarioID = 'SuporteCod3r';
const notificacoes = '9';
//const boasVindas = 'Boas vindas ' + usuarioID + 'Notificações: ' + notificacoes
const boasVindas = `
  Boas vindas ${usuarioID},
  Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
console.log(`Motor ${caracteristicas[0]}`);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois Callback...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois Promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title));
//# sourceMappingURL=ecmascript.js.map