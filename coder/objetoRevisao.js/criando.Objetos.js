const { isNull } = require("lodash")

const obj1 = {}
console.log(obj1)
// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
//funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('maria', 11890, 1)
console.log(f1.getSalario(), f2.getSalario())
// object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)
// uma função famos que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)