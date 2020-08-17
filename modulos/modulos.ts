// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'

// Modos diferentes de importação e exportação
// Função exportada no modo default não exige necessidade de ser o mesmo nome da função
import retangulo from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Paulo'))