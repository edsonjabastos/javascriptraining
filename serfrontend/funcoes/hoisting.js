// teste()

const teste = function teste() {
    console.log('teste')
}

teste()

//
// teste()

// function teste() {
//     console.log('teste')
// }

// hoisting variáveis

console.log(minhaVar) // a variável já existe, sua crição sofreu hoisting porém ainda não foi lhe atribuido valor

var minhaVar = 'variável'

console.log(minhaVar)

// console.log(minhaLet) // a variável não existe

let minhaLet = 'let it change'

console.log(minhaLet)

// console.log(minhaConst) // a variável não existe

const minhaConst = 'constante' 

console.log(minhaConst)