const arr = [1, 5, 10, "ola", true]
//let onlyNumbers = arr.every(function (el) {
//    console.log(el)
//    return typeof el === "number"
//})
//console.log(onlyNumbers)
//let onlyNumbers = arr.some(function (el) {
//    console.log(el)
//    return typeof el === "number" && el > 20
//})
//console.log(onlyNumbers)
let numbersArray = arr.filter(function (el, i, arr) {
    return typeof el === "number"
    //console.log(el)
    //console.log(i)
    //console.log(arr)
})
console.log(numbersArray)
let stringsArray = arr.filter(function (el, i, arr) {
    return typeof el === "string"
})
console.log(stringsArray)
arr.forEach(function (el, i, arr) {
    console.log(i, "===>", el)
})
numbersArrayX = numbersArray.map(function (el, i, arr) {
    return el * el
})
console.log(numbersArrayX)