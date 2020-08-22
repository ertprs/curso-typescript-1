function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({nome: 'Paulo', idade: 27}))

// Criando função com Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto
}
console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'Paulo', idade: 27}))

// Generics disponíveis na API
// A classe Array foi criada de uma forma genérica na API JS, porém podemos atribuir tipos nesse generics
const avaliacoes: Array<number> = [10, 9.3, 6.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5') -- Não consegue dar um push em um Array genérico do tipo number
console.log(avaliacoes)

// Array 
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Paulo'])
imprimir<{ nome: string, idade: number }>([
 { nome: 'Paulo', idade: 22 },
 { nome: 'Fulano', idade: 24 },
 { nome: 'Cicrano', idade: 15 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
  { nome: 'Paulo', idade: 22 },
  { nome: 'Fulano', idade: 24 },
  { nome: 'Cicrano', idade: 15 }
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Something'))

// Classe com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T,
      public operando2: T) {}

      abstract executar(): R
}

//console.log(new OperacaoBinaria('Bom ', 'dia').executar())
//console.log(new OperacaoBinaria(3, 7).executar())
//console.log(new OperacaoBinaria(3, 'Opa').executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 42).executar())

// Classe Data e tipo de retorno será STRING
class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    // Destructuring - Expor os atributos de DATA em 3 váriaveis
    let { dia, mes, ano } = data 
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    // Math.abs evita o valor negativo
    const diferenca =  Math.abs(t1 - t2)
    // 1000 milisegundos * 60 segundos * 60 minutos * 24horas
    const dia = 1000 * 60 * 60 * 24
    // Arredondamento 
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, próximo, imprimir

class Fila<T> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args
  }

  entrar(elemento: T) {
    this.fila.push(elemento)
  }

  proximo() : T | null {
    if(this.fila.length >= 0 && this.fila[0]) {
      const primeiro =  this.fila[0]
      this.fila.splice(0, 1)
      return primeiro
    } else {
      return null
    }
  }

  imprimir() {
    console.log(this.fila)
  }
}

const fila = new Fila<string>('Paulo', 'Ana', 'Lu', 'Rafa')

fila.imprimir()
fila.entrar('Allan')
fila.imprimir()
console.log('Próximo da fila: ', fila.proximo())
console.log('Próximo da fila: ', fila.proximo())
console.log('Próximo da fila: ', fila.proximo())

fila.imprimir()