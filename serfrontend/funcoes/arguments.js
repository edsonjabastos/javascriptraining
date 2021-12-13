// const somar = () => {} // usando arrow functions não temos acesso ao arguments
// toda função tem a propriedade name que retorna o nome da função
const somar = function() {
    console.log(arguments)

    let total = 0
    
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
// somar()

console.log(somar.name)
console.log(somar(0, 1, 2, 3, 4))
console.log(somar(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(somar(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13))