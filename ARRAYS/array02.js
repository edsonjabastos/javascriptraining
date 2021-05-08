let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))
console.log(arr.indexOf(55))
console.log(arr.lastIndexOf(5))
console.log(arr.lastIndexOf(55))
console.log(arr.includes(5))
console.log(arr.lastIndexOf(55) > -1)
console.log(arr.find(function (el) {
    return el > 10
}))

console.log(arr.find(function (el) {
    return el > 100
}))
console.log(arr.findIndex(function (el) {
    return el > 10
}))
console.log(arr.findIndex(function (el) {
    return el > 100
}))