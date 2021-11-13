let arrayX = ["a", "b", "c"]
let arrayY = arrayX
let arrayZ = [].concat(arrayX)
arrayY[arrayX.length] = "New value!"
console.log(arrayX)
console.log(arrayY)
console.log(arrayZ)