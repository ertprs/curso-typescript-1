"use strict";
// Exercício 1 - Classe
/* function Moto(nome) {
  this.nome = nome
  this.velocidade = 0

  this.buzinar = function() {
      console.log('Toooooooooot!')
  }

  this.acelerar= function(delta) {
      this.velocidade = this.velocidade + delta
  }
}
 */
// Resposta Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
/*
var objeto2D = {
  base: 0,
  altura: 0
}

var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
  return this.base * this.altura
} */
// Resposta Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo1 = new Retangulo(5, 7);
console.log('A área do retângulo é: ', retangulo1.area());
// Exercício 3 - Getters & Setters
/* var estagiario = {
  _primeiroNome: ''
}

Object.defineProperty(estagiario, 'primeiroNome', {
  get: function () {
      return this._primeiroNome
  },
  set: function (valor) {
      if (valor.length >= 3) {
          this._primeiroNome = valor
      } else {
          this._primeiroNome = ''
      }
  },
  enumerable: true,
  configurable: true
}) */
// Resposta Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
    }
}
const estagio1 = new Estagiario;
console.log(estagio1.primeiroNome);
estagio1.primeiroNome = 'Du';
console.log(estagio1.primeiroNome);
estagio1.primeiroNome = 'Dudu';
console.log(estagio1.primeiroNome);
//# sourceMappingURL=desafio.js.map