const arrayX = [1,2,3]
const arrayZ = [4, 5, 6]
function sum() {
    console.log(arguments)
    console.log(arguments.length)
}
sum(1, 2, 3)
sum(arrayX)
sum([1, 2, 3])
sum(...[1, 2, 3])
sum(...arrayX)
const arrayY = arrayX.push(arrayZ)
console.log(arrayY)