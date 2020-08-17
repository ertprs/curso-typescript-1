// Interface nada mais é que um contrato
interface Humano {
  nome: string
  idade?: number // atributos opcionais acompanham o símbolo de interrogação ?
  [prop: string]: any // atributos dinâmicos seguem essa sintaxe de [algumacoisa: tipo]: any
  saudar(sobrenome: string): void // métodos dentro da interface
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'João'
}

const pessoa: Humano = {
  nome: 'Paulo',
  idade: 27,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker')

// Usando classes com interfaces
class Cliente implements Humano {
  nome: string = ''
  ultimateCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimateCompra)

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, expoente: number): number {
  return Array(expoente).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)