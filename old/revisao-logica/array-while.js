//criar um array com numeros dandomicos nao repeditos
function generateRandomInteger(max) {
    return parseInt(Math.random() * max)
}
let arr = []
let i = 0
while (arr.length <= 10) {
    i++
    let randomNumber = generateRandomInteger(30)
    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    } else {
        console.log(randomNumber, "ja existe no arr")
    }
}
console.log(arr)
console.log("o loop foi executado", i, "vezes")