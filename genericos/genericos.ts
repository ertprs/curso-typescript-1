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