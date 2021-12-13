// function somar(n1) {
//     return function(n2){
//         return function(n3){
//             return n1 + n2 + n3
//         }
//     }
// }
// const somei = somar(1)(1)(1)
// console.log(somei)
// console.log(somar(2)(2)(2))

function calculadora(n1) {
    return function(n2){
        return function(fn) {
            return fn(n1, n2)
        }
    }
}

function subtrair (a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

function somar (a, b) {
    return a + b
}

console.log(calculadora(6)(10)(somar))
console.log(calculadora(2)(6)(multiplicar))
console.log(calculadora(2)(6)(subtrair))