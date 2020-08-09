// string
let nome: string = 'Paulo'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Jogar Games", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)

// Tuplas - Array com uma quantidade pré definida de tipos
let endereco: [string, number, string] = ["Av Principal", 99, "CASA 1"]
console.log(endereco)

endereco = ["Rua importante", 1206, "Bloco C"]
console.log(endereco)

// Enums
enum Cor {
  Cinza,
  Verde = 100, 
  Azul = 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2020}
console.log(carro)

// funções - Tipo esperado no retorno da função
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number) : number {
  return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 9))

// Tipo função
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// Objetos
let usuario: { nome: string, idade: number } =  {
  nome: 'Paulo',
  idade: 27
}

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
  }
  console.log(usuario);

  // Desafio
  /* 
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número) e retorna uma string
    -> Ponto normal (<=8)
    -> Fora do horário (> 8)
*/

// Alias
type Funcionario = { 
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
  supervisores: ['Paulo', 'Mayara'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Ana'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30

if (typeof valor === "number") {
  console.log("É um number!")
} else {
  console.log(typeof valor)
}

// Never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome!")
    }
    if(this.preco <= 0) {
      falha("Preço inválido!")
    }
  }
}

produto.validarProduto()

// Valores opcionais com tipo Nulo
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '984545411',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

// Desafio - Transformar código JS em TS
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number){
      this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[],
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
