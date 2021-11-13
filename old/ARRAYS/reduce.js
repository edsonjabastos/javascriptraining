const numbers = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
let uniqueNumbers = numbers.reduce(function (uniqueNumbers, currentNumber) {
    let firsTime = currentNumber
    if (uniqueNumbers.indexOf(currentNumber) < 0) {
        uniqueNumbers.push(currentNumber)
    }
    return uniqueNumbers
}, [])
console.log(uniqueNumbers)
let testNumbers = numbers.reduce()