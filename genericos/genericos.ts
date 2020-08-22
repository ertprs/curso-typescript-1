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