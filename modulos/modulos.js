"use strict";
// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modos diferentes de importação e exportação
// Função exportada no modo default não exige necessidade de ser o mesmo nome da função
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
//# sourceMappingURL=modulos.js.map