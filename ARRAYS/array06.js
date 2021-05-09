let arrayX = [1, 2, 3, 4]
//arrayX.reverse() // inverte a ordem da array
//console.log(arrayX)
let j = 0
let reduceX = arrayX.reduce(function (stack, current, i, arrayZ) {
    console.log("i ===> ", i) //stack (acumulador), current (atual), i indice de iteração, array original sem mudanças.
    console.log("j ===> ", j++)
    console.log(stack, "<=== stack", current, "<=== current")
    return stack + current
}, ":)") // <=== valor incial, se passado por segundo parametro
console.log(arrayX)
console.log(reduceX)
const names = ["Edson", "Daiane", "Edgar", "Eunice", "Debora", "João", "Maria", "Suzi", "Honda", "Matilda"]
let namesInAlphabetOrder = names.reduce(function (names, currentNames) {
    /*
    */
    let firstLetter = currentNames[0]
    if (names[firstLetter]){
        names[firstLetter] ++
    } else {
        names[firstLetter] = 1
    }
    return names
}, {})
console.log(namesInAlphabetOrder)
