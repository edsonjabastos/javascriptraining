// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)
let minhaVar = "minha string"
let minhaVar2 = 'minha "string" com aspas duplas'
let minhaVar3 = "minha 'string' com aspas simples"
let minhaVar4 = `minha template literal`
let minhaVar5 = 50
let minhaVar6 = "concatenação com: + (" + minhaVar5 + " = minhaVar5)"
let minhaVar7 = `com template literal (${minhaVar5} = minhaVar5)`
let minhaBooleana3 // undefined por não receber nenhum valor
let minhaBooleana2 = null
let minhaBooleana1 = false
let minhaBooleana = true
console.log(minhaVar)
console.log(minhaVar2)
console.log(minhaVar3)
console.log(minhaVar4)
console.log(minhaVar6)
console.log(minhaVar7)
console.log("Hello " + "World!");
console.log(typeof minhaBooleana, typeof minhaVar5, typeof minhaVar6, typeof minhaVar7, typeof minhaVar, "-_-", 1994)
console.log(`o tipo da minhaBoleana é: ${typeof minhaBooleana}, e o seu valor é: ${minhaBooleana}.`)
console.log(`o tipo da minhaBoleana1 é: ${typeof minhaBooleana1}, e o seu valor é: ${minhaBooleana1}.`) //um null recebe o tipo object por falhas antigas da linguagem
console.log(`o tipo da minhaBoleana2 é: ${typeof minhaBooleana2}, e o seu valor é: ${minhaBooleana2}.`)
console.log(`o tipo da minhaBoleana2 é: ${typeof minhaBooleana3}, e o seu valor é: ${minhaBooleana3}.`)
minhaBooleana3 = "valor em string"
console.log(minhaBooleana3, "tipado como", typeof minhaBooleana3)
minhaBooleana3 = 10
console.log(minhaBooleana3, "tipado como", typeof minhaBooleana3)
minhaBooleana3 = null
console.log(minhaBooleana3, "tipado como", typeof minhaBooleana3)
console.log(`o tipo da minhaVar5 é: ${typeof minhaVar5}, e o seu valor é: ${minhaVar5}.`)
console.log(`o tipo da minhaVar é: ${typeof minhaVar}, e o seu valor é: ${minhaVar}.`)