//function somar(n1, n2, n3) {
//    return n1 + n2 + n3
//    console.log("somar")
//}
////console.log(somar(1, 2, 3))
//function somar(arr) {
//    let total = 0
//    for (let i = 0; i < arr.length; i++) {
//        total += arr[i]
//    }
//    return total
//}
//console.log(somar([1, 2, 3]))
// ARGUMENTS NÃO FUNCIONA COM ARROW FUNCTIONS
function somar(arr) {
    console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log(somar.name)
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5))
console.log(somar(1, 2, 3, 4, 5, 6, 7))