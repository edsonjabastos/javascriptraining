function sum() {
    const numbers = [...arguments]
    console.log(numbers)
    return numbers.reduce(function (sum, current) {
        return sum + current
    }, 0)
}
function avarege() {
    return sum(...arguments) / arguments.length
}
let sumX = sum(1, 2, 3, 4, 5)
console.log(sumX)
let averageX = avarege(1, 2, 3, 4, 5)
console.log(averageX)