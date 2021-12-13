const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    // .then(conteudo => conteudo.toLowerCase())
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)





// Não certo, Nem errado, pelo menos tava lendo!
// function maravilhasDaPromise() {
//     return new Promise(resolve => {
//         // function exibirConteudo(_, conteudo){ // _ quando o parametro for dispensável para função
//         //     console.log(conteudo.toString())
//         // }
        
//         console.log('Inicio ...')
//         // fs.readFile(caminho, {}, exibirConteudo)
//         const lendo = fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
//         console.log('Fim ...')
//         // resolve(lendo)
//     })
// }

// maravilhasDaPromise()
//     .then(letras => letras.toLowerCase())
//     .then(console.log)