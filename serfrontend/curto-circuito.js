//let n = 0
//if (n === 0) {
//    n = 10
//}
//console.log(n)
//let n = 0
//if (!n) { //quando n foi negado estando em valor falsy por ser 0 (falso) deu continuidade ao if
//    n = 10
//}
//console.log(n)
let n = 1
n = n || 10
console.log(n)
let isValid = true
// if (isValid) {
//     console.log("é válido.")
// }
isValid = false
isValid && console.log("é válido.") // avaliou o primeiro sendo falso não executou o segundo
isValid = true
isValid || console.log("não é válido.") // avaliou o primeiro sendo verdadeiro não executou o segundo
// NO  OPERADOR LÓGICO OU SE A PRIMEIRA PROPOSIÇÃO FOR VERDADEIRA NÃO SE EXECUTA A SEGUNDA E FOR FALSO ELE PULA E EXECUTA A SEGUNDA
// NO OPERADOR LÓGICO E SE A PRIMEIRA É VERDADEIRA ENTÃO ELE TAMBÉM AVALIA ASEGUNDA E RETORNA A SEGUNDA E SE A PRIMEIRA FOR FALSA NÃO EXECUTA NENHUMA