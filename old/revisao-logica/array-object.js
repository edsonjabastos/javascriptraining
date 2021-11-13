const nomes = ["Daniel", "Maria", ""]
const pessoa = { nome: "Daniel", idade: 10, email: "" }
const pessoa1 = {}
const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    nome: "Joao",
    idade: 4464
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Helena",
    idade: 45
    }]
for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui  ${pessoas[i].idade} anos`)
}