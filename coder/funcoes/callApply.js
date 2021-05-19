function getPreco(imposto = 0, moeda = '$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4899.00,
    desc: 0.1,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
const carro = { preco: 48999, desc: 0.2 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17,'$']))