const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
// console.log(__dirname, caminho)

function exibirConteudo(_, conteudo){ // _ quando o parametro for dispensável para função
    console.log(conteudo.toString())
}

console.log('Inicio ...')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
console.log('Fim ...')

console.log('Inicio sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim sync...')