const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
        }],
    calcularValorSeguro: function () {
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro ']
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)