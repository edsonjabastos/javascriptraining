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
if (isValid) {
    console.log("é válido.")
}
isValid = true
isValid && console.log("é válido.")
isValid = false
isValid || console.log("não é válido.")